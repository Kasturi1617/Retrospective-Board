import { Comme } from "next/font/google";
import "./Item.css";
import { useState, useEffect } from "react";
import Comments from "./Comment";
import Emoji from "./Emoji";
import { useAppStore } from "../Store/useAppStore";

function Item(props) {
    const [vote, setVote] = useState(0);
    const [showComment, setShowComment] = useState(false);
    const [showEmoji, setShowEmoji] = useState(false);
    const { drop, setDrop } = useAppStore();
    const { add, setAdd } = useAppStore();
    const { keep, setKeep } = useAppStore();
    const { improve, setImprove } = useAppStore();

    function handleMinusClick() {
        if (vote > 0)
            setVote(vote - 1);
    }

    function handlePlusClick() {
        setVote(vote + 1);
    }

    function handleComment() {
        setShowComment(!showComment);
    }

    function handleEmojiClick() {
        setShowEmoji(!showEmoji);
    }

    return (
        <>
            <div className={`item-container ${props.title}-container`}>
                <p className="text">{props.text}</p>
                <div className="item-bottom">

                    {drop?.[props.index]?.reactions.map(([username, reaction], idx) => {
                        return <button className="added-emoji">{reaction}</button>
                    })}
                    <img className="add-emoji-icon" src="add-reaction-icon-md.png" onClick={handleEmojiClick} />
                    <img src="speech-bubble.png" onClick={handleComment} className="comment"></img>
                    <div className="vote">
                        <button className="count-button" onClick={handleMinusClick}>-</button>
                        <p className="count">{vote}</p>
                        <button className="count-button" onClick={handlePlusClick}>+</button>
                    </div>
                </div>
                <div>
                    <div>
                        {showEmoji && <Emoji id={props.index} index={props.index} title={props.title} onSelect={()=> setShowEmoji(false)}/>}
                    </div>
                </div>
                {showComment &&
                    <div>
                        <Comments />
                    </div>}
            </div>
        </>
    )
}

export default Item;