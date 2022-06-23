import UpperSection from "./components/UpperSection";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";

function Container() {
    return (
        <div className="container">
            <UpperSection />
            <SecondSection title={ 'Some non random text' } />
            <ThirdSection />
        </div>
    );
}

export default Container;