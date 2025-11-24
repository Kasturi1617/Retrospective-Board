import "./Emoji.css";
import { useAppStore } from "../Store/useAppStore";
import { useState } from "react";

function Emoji(props) {
    const EMOJIS = ["👍", "❤️", "😂", "🎉", "😮", "😢"];
    const [showAllEmojis, setShowAllEmojis] = useState(true);
    const { drop, setDrop } = useAppStore();
    const { add, setAdd } = useAppStore();
    const { keep, setKeep } = useAppStore();
    const { improve, setImprove } = useAppStore();
    const { addReactionToDrop } = useAppStore();

    function handleEmojiClick(event) {
        setShowAllEmojis(false);
        const emoji = event.target.textContent;
        if (props.title === "drop") {
            addReactionToDrop(props.index, "Kasturi", emoji);
            console.log("reactions =", drop[props.index].reactions);
        }
    }

    return (
        <>
            {showAllEmojis && <div className="emoji-list">
                {EMOJIS.map((em, idx) => (
                    <button key={idx} className="emoji-item" onClick={handleEmojiClick}>{em}</button>
                ))}
            </div>}
        </>
    )

}

export default Emoji;