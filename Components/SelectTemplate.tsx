import "./SelectTemplate.css";
import { useState } from "react";
import { CATEGORY, TEMPLATES } from "../app/utils/utils";


function SelectTemplate() {

    const [name, setName] = useState("");
    const [showOption, setShowOption] = useState(false);
    const [selectedTemplate, setSelectedTemplate] = useState(0);

    function handleSelectClick() {
        setShowOption(true);
    }

    function handleChange(event) {
        const value = event?.target.value;
        setName(value);
    }

    function handlleTemplateClick(event) {
        const val = event.target.value;
        setSelectedTemplate(val);
    }

    return (
        <>
            {!showOption &&
                <div className="select-main">
                    <div className="select-title">
                        <img className="select-icon" src="select.png"></img>
                        <h1>Standard Retrospective</h1>
                    </div>

                    <div className="select-input">
                        <fieldset className="select-fieldset">
                            <legend>Retro Name</legend>
                            <input value={name} onChange={handleChange}></input>
                        </fieldset>
                        <button onClick={handleSelectClick}>Select Template</button>
                    </div>
                </div>}

            {showOption &&
                <div className="template-popup">
                    <h2>Retrospective Templates</h2>
                    <p>Choose a template to start your retrospective</p>
                    <div className="all-templates">
                        <div className="template-category">
                            {
                                CATEGORY.map((item, idx) => (
                                    <button onClick={handlleTemplateClick} value={idx}>{item}</button>
                                ))
                            }
                        </div>
                        <div className="template-list">
                            {
                                TEMPLATES[selectedTemplate].map((item, index) => (
                                    <button>{item}</button>
                                ))
                            }
                        </div>
                    </div>
                </div>}
        </>
    )
}

export default SelectTemplate;