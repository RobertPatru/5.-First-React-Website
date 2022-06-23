function FifthSection ( {text} ) {
    return (
        <div className="fifith-section">
            <div className="max-width">
                <footer>
                    <span className="color-white text-align-center color-green"> {text} </span>
                </footer>
            </div>
        </div>    
    );
}

// .color-green {
//      background-color: green;
// }

FifthSection.defaultProps = {
    text: "Placeholder ©"
}

export default FifthSection;