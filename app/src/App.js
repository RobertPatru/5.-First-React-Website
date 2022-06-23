import UpperSection from "./components/UpperSection";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";
import ForthSection from "./components/ForthSection";
import FifthSection from "./components/FifthSection";

function Container() {
    return (
        <div className="container">
            <UpperSection />
            <SecondSection title={ 'Some non random text' } />
            <ThirdSection text={"This is an insipiring quote, or a testimonial from a customer. Maybe it's just filling up space, or maye people will actually read it. Who knows? All I know is that it looks nice."} />
            <ForthSection title={ "Call to action! It's Time!" } text={ "Sing up for our product by clicking that button right over there!" } />
            <FifthSection text={ "Copyright ©" } />
        </div>
    );
}

export default Container;