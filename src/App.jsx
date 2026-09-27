import Hero from "./sections/hero.jsx";
import ShowcaseSection from "./sections/ShowcaseSection.jsx";
import Navbr from "./component/Navbr.jsx"
import FeaturCard from "./sections/FeaturCard.jsx";
import ExperinceSection from "./sections/ExperinceSection.jsx";
import TechStack from "./sections/TechStack.jsx";
import Testimonial from "./sections/Testimonial.jsx";
import Contact from "./sections/Contact.jsx";
const main = () => {
    return (
        <>
        <Navbr/>
        <Hero/>
        <ShowcaseSection/>
        <FeaturCard/>
        <ExperinceSection/>
        <TechStack/>
        <Testimonial/>
        <Contact/>
        </>
    )
}

export default main;