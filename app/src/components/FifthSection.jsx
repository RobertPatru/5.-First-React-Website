function FifthSection ( {text} ) {
    return (
        <div className="fifith-section">
            <div className="max-width">
                <footer>
                    <span className="color-white text-align-center"> {text} </span>
                </footer>
            </div>
        </div>    
    );
}

FifthSection.defaultProps = {
    text: "Placeholder ©"
}

export default FifthSection;