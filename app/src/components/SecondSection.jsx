import BoxAndText from "./BoxAndText";

function SecondSection( {title}) {
    return (
        <div className="second-section default-sections-styles">
            <div className="max-width">

                <h1 className="text-align-center"> {title} </h1>
                <div className="boxes-container add-flex add-JC-space-between">
                    <BoxAndText text={"this is some subtext under an illustration or image"} />
                    <BoxAndText text={"this is some subtext under an illustration or image"} />
                    <BoxAndText text={"this is some subtext under an illustration or image"} />
                    <BoxAndText text={"this is some subtext under an illustration or image"} />
                </div>

            </div>
        </div>
    )
}

SecondSection.defaultProps = {
    title: 'Placeholder title'
}

export default SecondSection;