import "./Title.css";
import { useState } from 'react';
import NewItem from "./newItem";

function Item(props) {

    const [showBox, setShowBox] = useState(false);

    function handleClick() {
        setShowBox(true);
    }

    return (
        <div>
            <div className="title">
                <h2 style={{ color: props.color }}>{props.title}</h2>
            </div>
            <div className="body">
                <span className="column-title">{props.columnTitle}</span>
                <NewItem title={props.title} onAddCard={props.onAddCard} color={props.color}/>
            </div>
        </div>
    )
}

export default Item;