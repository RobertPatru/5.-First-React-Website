function BoxAndText( {text} ) {
    return (
        <div className="box-container center-everything-in-column">
            <div className="box"></div>
            <p className="color-gray text-align-center"> {text} </p>
        </div>
    );
}

BoxAndText.defaultProps = {
    text: 'Placeholder sub text'
}

export default BoxAndText;