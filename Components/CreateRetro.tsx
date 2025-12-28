import { useState } from "react";
import { TEMPLATE_DETAILS, currentDate } from "../app/utils/utils";
import "./CreateRetro.css";
import Column from "./Column";
import { useRouter } from "next/navigation";
import { title } from "process";


function CreateRetro(props) {

    async function handleCreateRetro_() {
        await fetch("/api/retros", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name,
                columns: items,
            }),
        });

        router.push("/retro");
    }

    const [items, setItems] = useState(TEMPLATE_DETAILS[props.index]);

    const [name, setName] = useState(currentDate());
    const [showEdit, setShowEdit] = useState(false);
    const router = useRouter();

    function handleChange(event) {
        const value = event?.target.value;
        setName(value);
    }

    function handleBackClick() {
        props.back();
    }

    function handleEdit() {
        setShowEdit(true);
    }

    async function handleSave(newItems) {
        setItems(newItems);
        setShowEdit(false);

        const columns = newItems
            .filter(item => item[0]?.trim())
            .map((item, idx) => ({
                title: item[0].trim(),
                description: item[1] || "",
                color: item[2] || "#ccc",
                order: idx,
                cards: [],
            }));


        try {
            await fetch("/api/retros", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name,
                    templateIndex: props.index,
                    columns,
                }),
            });
        } catch (err) {
            console.error("Failed to create retro:", err);
        }
    }

    function handleCreateRetro() {
        router.push("/retro");
    }

    return (<>
        {!showEdit &&
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
                    {items.map((item, idx) => (
                        <ul key={idx}>
                            <li>{item[0]}</li>
                            <span>{item[1]}</span>
                        </ul>
                    ))}

                    <div className="create-retro-edit-change-buttons">
                        <button className="edit-button" onClick={handleEdit}>✏️ Edit Template</button>
                        <button className="change-button">🔄️ Change Template</button>
                    </div>
                    <button className="create-retro-button" onClick={handleCreateRetro}>Create Retro</button>
                </div>
            </div>}

        {showEdit && <Column idx={props.index} onSave={handleSave} />}
    </>

    )

}

export default CreateRetro;