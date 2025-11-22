import Title from "../Components/Title";
import Item from "../Components/Item";
import "./daki.css";

function DAKI() {
    return (
        <div>
            <div className="container">
                <div className="column-title">
                    <Title title="Drop" buttonTitle="Add Item" imagePath="down.png" columnTitle="Unproductive practices"></Title>
                </div>

                <div className="column-title">
                    <Title title="Add" buttonTitle="Add Item" imagePath="plus.png" columnTitle="New ideas to implement"></Title>
                </div>

                <div className="column-title">
                    <Title title="Keep" buttonTitle="Add Item" imagePath="favorite.png" columnTitle="Successful current practices"></Title>
                </div>

                <div className="column-title">
                    <Title title="Improve" buttonTitle="Add Item" imagePath="up-arrow.png" columnTitle="Areas for enhancement"></Title>
                </div>
            </div>
        </div>
    )
}

export default DAKI;