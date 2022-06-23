function ButtonTwo ( {text} ) {
    return (
        <button className="btn bg-color-blue color-white button-two"> {text} </button>
    )
}

ButtonTwo.defaultProps = {
    text: 'Button Placeholder'
}

export default ButtonTwo;