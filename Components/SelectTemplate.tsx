import "./SelectTemplate.css";
import { useState } from "react";
import { CATEGORY, TEMPLATES } from "../app/utils/utils";
import CreateRetro from "./CreateRetro";



function SelectTemplate() {

    const [name, setName] = useState("");
    const [showOption, setShowOption] = useState(false);
    const [selectedTemplate, setSelectedTemplate] = useState(0);
    const [templateType, setTemplateType] = useState(0);
    const [showCreateScreen, setShowCreateScreen] = useState(false);

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

    function handleTypeClick(event)
    {
        const val = event.target.value;
        setTemplateType(val);
    }

    function handleSelect()
    {
        setShowCreateScreen(true);
        setShowOption(false);
    }

    function back()
    {
        setShowCreateScreen(false);
        setShowOption(true);
    }

    return (
        <>
            {!showCreateScreen && !showOption &&
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

            {!showCreateScreen && showOption &&
                <div className="template-popup">
                    <h2>Retrospective Templates</h2>
                    <p>Choose a template to start your retrospective</p>
                    <div className="all-templates">
                        <div className="template-category">
                            {
                                CATEGORY.map((item, idx) => (
                                    <button onClick={handlleTemplateClick} value={idx} key={idx}>{item}</button>
                                ))
                            }
                        </div>
                        <div className="template-list">
                            {
                                TEMPLATES[selectedTemplate].map((item, index) => (
                                    <button onClick={handleTypeClick} value={index} key={index}>{item}</button>
                                ))
                            }
                        </div>
                    </div>
                    <div className="select-template">
                        <button onClick={handleSelect}>✅ Select Template</button>
                    </div>
                </div>}

                {showCreateScreen && <CreateRetro back={back} index={templateType}/>}
        </>
    )
}

export default SelectTemplate;