import "./BoardType.css";

function BoardType(props) {
    return (
        <>
            <div className="board-type">
                <img className="boardtype-img" src={props.imgSrc}></img>
                <div className="boardtype-top">
                    <div className="boardtype-title">
                        <img className="board-icon" src={props.iconSrc}></img>
                        <h2>{props.title}</h2>
                    </div>
                    <p>{props.description}</p>
                </div>
            </div>

        </>
    )
}

export default BoardType;