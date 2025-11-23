import Title from "../Components/Title";
import Item from "../Components/Item";
import "./daki.css";
import NewItem from "@/Components/newItem";
import { useAppStore } from "../Store/useAppStore";

function DAKI() {
    const { drop, setDrop } = useAppStore();
    const { add, setAdd } = useAppStore();
    const { keep, setKeep } = useAppStore();
    const { improve, setImprove } = useAppStore();
    return (
        <div>
            <div className="title-container">
                <div className="column-title">
                    <Title title="Drop" buttonTitle="Add Item" imagePath="down.png" columnTitle="Unproductive practices"></Title>
                    <div className="drop">
                        {
                            drop.map((el, idx) => (
                                <Item key={idx} text={el} title="drop"/>
                            ))
                        }
                    </div>
                </div>

                <div className="column-title">
                    <Title title="Add" buttonTitle="Add Item" imagePath="plus.png" columnTitle="New ideas to implement"></Title>
                    <div className="add">
                        {
                            add.map((el, idx) => (
                                <Item key={idx} text={el} title="add"/>
                            ))
                        }
                    </div>
                </div>

                <div className="column-title">
                    <Title title="Keep" buttonTitle="Add Item" imagePath="favorite.png" columnTitle="Successful current practices"></Title>
                    <div className="keep">
                        {
                            keep.map((el, idx) => (
                                <Item key={idx} text={el} title="keep"/>
                            ))
                        }
                    </div>
                </div>

                <div className="column-title">
                    <Title title="Improve" buttonTitle="Add Item" imagePath="up-arrow.png" columnTitle="Areas for enhancement"></Title>
                    <div className="improve">
                        {
                            improve.map((el, idx) => (
                                <Item key={idx} text={el} title="improve"/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DAKI;