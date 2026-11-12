import {Navbar} from "./components/Navbar/Navbar";
import {Hero} from "./components/Hero/Hero";
import {Expertise} from "./components/Expertise/Expertise";
import {Portfolio} from "./components/Portfolio/Portfolio";
import {CallToAction} from "./components/CallToAction/CallToAction";
import {ContactSection} from "./components/ContactSection/ContactSection";
import {SiteFooter} from "./components/SiteFooter/SiteFooter";

export function App() {
    return (
        <>
            <Navbar/>
            <main>
                <Hero/>
                <Expertise/>
                <Portfolio/>
                <CallToAction/>
                <ContactSection/>
            </main>
            <SiteFooter/>
        </>
    );
}
