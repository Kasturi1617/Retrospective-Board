import Item from "../Components/item";
import "./daki.css";

function DAKI() {
    return (
        <div className="container">
            <div className="column">
                <Item title="Drop" buttonTitle="Add Item" imagePath="down.png"></Item>
            </div>

            <div className="column">
                <Item title="Add" buttonTitle="Add Item" imagePath="plus.png"></Item>
            </div>

            <div className="column">
                <Item title="Keep" buttonTitle="Add Item" imagePath="favorite.png"></Item>
            </div>

            <div className="column">
                <Item title="Improve" buttonTitle="Add Item" imagePath="up-arrow.png"></Item>
            </div>
        </div>
    )
}

export default DAKI;