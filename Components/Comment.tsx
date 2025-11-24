import { useState } from "react";
import VisibilityButton from "./VisibilityButton";

function Comments(props) {
    const [showComment, setShowComment] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [showBox, setShowBox] = useState(false);

    function handleClick() {
        setShowComment(true);
    }

    function handleSubmit(event)
    {
        event?.preventDefault();
    }

    function handleInputChange(event) {
        const text = event.target.value;
        setInputValue(text);
    }

    function handleCancel() {
        setShowComment(false);
    }

    return <>
    <div>
        {!showComment &&
            <div>
                <button onClick={handleClick}>+ Add Comment</button>
            </div>}

        {showComment &&
             <form className={`item-container ${props.title}`} onSubmit={handleSubmit}>
                <VisibilityButton/>
                <input placeholder="Enter comment.." className="input-field" value={inputValue} onChange={handleInputChange}></input>
                <div className="form-bottom">
                    <button className="submit-button">Add Item</button>
                    <button className="cancel-button" onClick={handleCancel}>❌</button>
                </div>
            </form>}
        </div>
    </>
}

export default Comments;