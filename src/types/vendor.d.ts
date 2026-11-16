// Minimal typings for libraries that ship without their own types.
// Only the props this project actually uses are declared.

declare module "react-reveal/Fade" {
    import {ComponentType, ReactNode} from "react";

    interface FadeProps {
        children?: ReactNode;
        top?: boolean;
        bottom?: boolean;
        left?: boolean;
        right?: boolean;
    }

    const Fade: ComponentType<FadeProps>;
    export default Fade;
}

declare module "react-tilt" {
    import {ComponentType, ReactNode} from "react";

    interface TiltProps {
        children?: ReactNode;
        className?: string;
        options?: {max?: number; scale?: number; speed?: number};
    }

    const Tilt: ComponentType<TiltProps>;
    export default Tilt;
}
