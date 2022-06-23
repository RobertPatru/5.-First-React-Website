import Button from "./Button";

function SubHeader() {
    return (
        <div className="sub-header add-flex add-JC-space-between">
            <div className="sub-header-container-left">
                <h1 className="color-white title">This website is awesome</h1>
                <p className="color-gray margin-y-3opx text">This website has some subtext that goes here, under the main title. It's a smaller font and the color is lower contrast</p>
                <Button text={"Sing up"} />
            </div>

            <div className="sub-header-container-right">
                <img src="http://mwgaze.ro/wp-content/uploads/2019/12/placeholder.png" alt="a gray placeholder img" className="placeholder-img" />
            </div>
        </div>
    );
}

export default SubHeader;