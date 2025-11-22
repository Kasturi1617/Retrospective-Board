import "./Item.css";

function Item(props) {
    return (
        <div>
            <p>{props.text}</p>
            <img className="add-emoji-icon" src="add-reaction-icon-md.png" />
        </div>
    )
}

export default Item;