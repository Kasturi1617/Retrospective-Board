import { useState } from "react";
import "./newItem.css";

function NewItem() {
    const anonymous = "🙈 Anonymous";
    const nonAnonymous = "👁️Not Anonymous";
    const [showDropDown, setDropDown] = useState(false);
    const [text, setText] = useState(nonAnonymous);
    const [option, setOption] = useState(anonymous);
    const [showBox, setShowBox] = useState(false);

    function handleClick() {
        setShowBox(true);
    }

    function handleDropDown() {
        showDropDown === true ? setDropDown(false) : setDropDown(true);
    }

    function handleOptionClick(event) {
        const current = event.target.value;
        setText(current);
        if (current === anonymous) setOption(nonAnonymous);
        else setOption(anonymous);
        showDropDown === true ? setDropDown(false) : setDropDown(true);
    }

    function handleSubmit(event) {
        event?.preventDefault();
    }

    function handleCancel() {
        setShowBox(false);
    }

    return (<>
        {!showBox && <button className="add-button" onClick={handleClick}>+ Add item</button>}
        {showBox &&
            <form className="item-container" onSubmit={handleSubmit}>
                <button className="visibility-button" onClick={handleDropDown}>{text}🔻</button>
                {showDropDown && <div className="dropdown-content">
                    <button className="option-button" onClick={handleOptionClick} value={option}>{anonymous}</button>
                    <button className="option-button" onClick={handleOptionClick} value={option}>{nonAnonymous}</button>
                </div>
                }
                <input placeholder="Enter your thoughts.." className="input-field"></input>
                <div className="form-bottom">
                    <button className="submit-button">Add Item</button>
                    <button className="cancel-button" onClick={handleCancel}>❌</button>
                </div>
            </form>}
    </>
    )
}

export default NewItem;