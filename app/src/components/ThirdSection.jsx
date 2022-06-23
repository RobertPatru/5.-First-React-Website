function ThirdSection ( {text} ) {
    return (
        <div className="third-section default-sections-styles">
            <div className="max-width add-flex add-flex-column">
                <h2 className="text-align-center"><em> {text} </em></h2>
                <span className="text-align-end"> - God if Thunder</span>
            </div>
        </div>
    )
}

ThirdSection.defaultProps = {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eveniet itaque sequi quaerat quod vel neque numquam, rem voluptatum, autem unde earum quia similique minus consequatur eos, amet iure! Saepe corporis temporibus ipsum ea exercitationem"
}

export default ThirdSection;