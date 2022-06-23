import Header from "./Header";
import SubHeader from "./SubHeader";

function UpperSection() {
    return (
        <div className="uppderSection default-sections-styles">
            <div className="max-width">
                <Header />
                <SubHeader />
            </div>
        </div>
    );
}

export default UpperSection;