import ButtonTwo from "./Button_Two";

function ForthSection ( {title, text} ) {
    return (
        <div className="forth-section default-sections-styles">
            <div className="max-width">
                <div className="container-text-forth-sect">
                    <div className="text-container">
                        <h3 className="color-white"> {title} </h3>
                        <p className="color-white"> {text} </p>
                    </div>
                    <ButtonTwo text={"Sign Up"} />
                </div>
            </div>
        </div>
    )
}

ForthSection.defaultProps = {
    title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa obcaecati impedit corporis esse, ab totam!"
}

export default ForthSection;