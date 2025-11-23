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
                <img className="image" src={props.imagePath}></img>
                <h2>{props.title}</h2>
            </div>
            <div className="body">
                <span className="column-title">{props.columnTitle}</span>
                <NewItem title={props.title}/>
            </div>
        </div>
    )
}

export default Item;