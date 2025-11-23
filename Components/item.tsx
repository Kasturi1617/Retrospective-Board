import { Comme } from "next/font/google";
import "./Item.css";
import { useState } from "react";
import Comments from "./Comment";

function Item(props) {
    const [vote, setVote] = useState(0);
    const [showComment, setShowComment] = useState(false);

    function handleMinusClick() {
        if (vote > 0)
            setVote(vote - 1);
    }

    function handlePlusClick() {
        setVote(vote + 1);
    }

    function handleComment() {
        setShowComment(true);
    }

    return (
        <>
        <div className={`item-container ${props.title}-container`}>
            <p className="text">{props.text}</p>
            <div className="item-bottom">
                <img className="add-emoji-icon" src="add-reaction-icon-md.png" />
                <img src="speech-bubble.png" onClick={handleComment} className="comment"></img>
                <div className="vote">
                    <button className="count-button" onClick={handleMinusClick}>-</button>
                    <p className="count">{vote}</p>
                    <button className="count-button" onClick={handlePlusClick}>+</button>
                </div>
            </div>
            {showComment &&
                <div>
                    <Comments/>
                </div>}
        </div>
        </>
    )
}

export default Item;