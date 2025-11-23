import {useState} from "react";
import "./VisibilityButton.css";

function VisibilityButton(props) {

    const [showDropDown, setDropDown] = useState(false);
    const anonymous = "🙈 Anonymous";
    const nonAnonymous = "👁️Not Anonymous";
    const [text, setText] = useState(nonAnonymous);
    const [option, setOption] = useState(anonymous);


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

    return <>
    <button className="visibility-button" onClick={handleDropDown}>{text}🔻</button>
    {
        showDropDown && <div className="dropdown-content">
            <button className="option-button" onClick={handleOptionClick} value={option}>{anonymous}</button>
            <button className="option-button" onClick={handleOptionClick} value={option}>{nonAnonymous}</button>
        </div>
    }
    </>
}

export default VisibilityButton;