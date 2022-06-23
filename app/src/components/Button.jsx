function Button ( {text} ) {
    return (
        <button className="btn bg-color-blue color-white"> {text} </button>
    )
}

Button.defaultProps = {
    text: 'Button Placeholder'
}

export default Button;