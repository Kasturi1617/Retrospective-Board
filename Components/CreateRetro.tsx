import { useState } from "react";
import { TEMPLATE_DETAILS, currentDate } from "../app/utils/utils";
import "./CreateRetro.css";

function CreateRetro(props) {

    const [name, setName] = useState(currentDate());

    function handleChange(event) {
        const value = event?.target.value;
        setName(value);
    }


    function handleBackClick() {
        props.back();
    }

    return (<>
        <div className="create-retro-main">
            <div className="create-retro-title">
                <button onClick={handleBackClick}>{'<'}</button>
                <img className="create-retro-icon" src="arrange.png"></img>
                <h1>Standard Retrospective</h1>
            </div>

            <div className="create-retro-input">
                <fieldset className="create-retro-fieldset">
                    <legend>Retro Name</legend>
                    <input value={name} onChange={handleChange}></input>
                </fieldset>
                <p>Retro Template</p>
                {TEMPLATE_DETAILS[props.index].map((item, idx) => (
                    <ul>
                        <li>{item[0]}</li>
                        <span>{item[1]}</span>
                    </ul>
                ))}

                <div className="create-retro-edit-change-buttons">
                    <button className="edit-button">✏️ Edit Template</button>
                    <button className="change-button">🔄️ Change Template</button>
                </div>
                <button className="create-retro-button">Create Retro</button>
            </div>
        </div></>)

}

export default CreateRetro;