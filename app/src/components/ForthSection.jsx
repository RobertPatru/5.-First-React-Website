function ForthSection ( {title, text} ) {
    <div className="forth-section default-sections-styles">
        <div className="max-width">
            <div className="container-text-forth-sect">
                <div className="text-container">
                    <h3> {title} </h3>
                    <p> {text} </p>
                </div>
            </div>
        </div>
    </div>
}

ForthSection.defaultProps = {
    title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa obcaecati impedit corporis esse, ab totam!"
}

export default ForthSection;