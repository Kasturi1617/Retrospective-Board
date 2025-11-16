import "./item.css";

function Item(props) {
    return (
        <div>
            <div className="title">
                <img className="image" src={props.imagePath}></img>
                <h2>{props.title}</h2>
            </div>
            <button>{props.buttonTitle}</button>
        </div>
    )
}

export default Item;