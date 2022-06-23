import UpperSection from "./components/UpperSection";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";

function Container() {
    return (
        <div className="container">
            <UpperSection />
            <SecondSection title={ 'Some non random text' } />
            <ThirdSection text={"This is an insipiring quote, or a testimonial from a customer. Maybe it's just filling up space, or maye people will actually read it. Who knows? All I know is that it looks nice."} />
        </div>
    );
}

export default Container;