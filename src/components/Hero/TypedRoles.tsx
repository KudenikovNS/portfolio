import {useEffect, useState} from "react";
import type {CSSProperties} from "react";
import styles from "./TypedRoles.module.css";

const START_DELAY_MS = 800;   // wait for the hero fade-in
const TYPE_SPEED_MS = 90;     // per character
const LINE_PAUSE_MS = 400;    // before starting the next line
const HOLD_MS = 4000;         // all lines fully shown
const ERASE_SPEED_MS = 35;    // per character
const RESTART_DELAY_MS = 800; // after everything is erased

type Phase = "waiting" | "typing" | "erasing";

const prefersReducedMotion = () =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

interface TypedRolesProps {
    /** Must be a stable reference (define it outside the component) */
    lines: string[];
}

/**
 * Types the lines one after another, holds, erases them in reverse order and repeats.
 * A single blinking cursor follows the line currently being typed.
 */
export function TypedRoles({lines}: TypedRolesProps) {
    const [reduceMotion] = useState(prefersReducedMotion);
    const [counts, setCounts] = useState<number[]>(() =>
        lines.map(line => (reduceMotion ? line.length : 0)));
    const [phase, setPhase] = useState<Phase>("waiting");

    const firstIncomplete = counts.findIndex((count, i) => count < lines[i].length);
    let lastNonEmpty = -1;
    counts.forEach((count, i) => {
        if (count > 0) lastNonEmpty = i;
    });

    useEffect(() => {
        if (reduceMotion) return;

        let delay: number;
        let step: () => void;

        if (phase === "waiting") {
            delay = START_DELAY_MS;
            step = () => setPhase("typing");
        } else if (phase === "typing") {
            if (firstIncomplete === -1) {
                delay = HOLD_MS;
                step = () => setPhase("erasing");
            } else {
                const startsNewLine = firstIncomplete > 0 && counts[firstIncomplete] === 0;
                delay = startsNewLine ? LINE_PAUSE_MS : TYPE_SPEED_MS;
                step = () => setCounts(prev =>
                    prev.map((count, i) => (i === firstIncomplete ? count + 1 : count)));
            }
        } else if (lastNonEmpty === -1) {
            delay = RESTART_DELAY_MS;
            step = () => setPhase("typing");
        } else {
            delay = ERASE_SPEED_MS;
            step = () => setCounts(prev =>
                prev.map((count, i) => (i === lastNonEmpty ? count - 1 : count)));
        }

        const timer = window.setTimeout(step, delay);
        return () => window.clearTimeout(timer);
    }, [phase, counts, firstIncomplete, lastNonEmpty, reduceMotion]);

    // Line that shows the cursor
    let cursorLine: number;
    if (phase === "erasing") cursorLine = Math.max(lastNonEmpty, 0);
    else if (firstIncomplete === -1) cursorLine = lines.length - 1;
    else cursorLine = firstIncomplete;

    // Lines below the last started one are still empty; the divider sits above them
    const lastShownLine = Math.max(lastNonEmpty, cursorLine, 0);
    const dividerStyle = {"--hidden-lines": lines.length - 1 - lastShownLine} as CSSProperties;

    return (
        <div className={styles.roles} style={dividerStyle} aria-label={lines.join(", ")}>
            {lines.map((line, i) => (
                <div key={line} className={styles.line} aria-hidden="true">
                    {line.slice(0, counts[i])}
                    {!reduceMotion && i === cursorLine && <span className={styles.cursor}>|</span>}
                    {/* Keeps the line height while it is empty, so the layout does not jump */}
                    {"​"}
                </div>
            ))}
        </div>
    );
}
