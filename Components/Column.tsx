import "./Column.css";
import { TEMPLATE_DETAILS, COLORS } from "../app/utils/utils";
import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import SelectTemplate from "./SelectTemplate";

function Column(props) {
    const [items, setItems] = useState(TEMPLATE_DETAILS[props.idx]);
    var SIZE = TEMPLATE_DETAILS[props.idx].length;
    const [activeColorIndex, setActiveColorIndex] = useState<number | null>(null);

    const [showSelectTemplate, setSelectTemplate] = useState(false);
    const [showColors, setShowColors] = useState(false);
    const [showAddColumn, setShowAddColumn] = useState(false);
    const EMPTY_COLUMN = ["", "", COLORS[SIZE + 1]];

    function onDragEnd(result) {
        if (!result.destination) return;
        const reordered = [...items];
        const [removed] = reordered.splice(result.source.index, 1);
        reordered.splice(result.destination.index, 0, removed);
        setItems(reordered);
    }

    function handleColorChange(index) {
        if (showColors === false) {
            setShowColors(true);
            setActiveColorIndex(index);
        }
        else {
            setShowColors(false);
            setActiveColorIndex(null);
        }
    }

    function handleColourChoose(itemIndex, item, colorIndex) {
        item[2] = COLORS[colorIndex];
        handleColorChange(itemIndex);
    }

    function handleChangeTemplate() {
        setSelectTemplate(true);
    }

    function handleAddColumn() {
        setItems(prevItems => [
            ...prevItems,
            ["", "", COLORS[SIZE]]
        ]);
        SIZE++;
    }

    function handleColumnDelete(index: number) {
        console.log("Delete clicked");
        const updatedItems = [...items];
        updatedItems.splice(index, 1);
        setItems(updatedItems);
    }

    function handleTitleChange(index: number, value: string) {
        setItems(prev => {
            const updated = [...prev];
            updated[index] = [...updated[index]];
            updated[index][0] = value;
            return updated;
        });
    }

    function handleDescChange(index: number, value: string) {
        setItems(prev => {
            const updated = [...prev];
            updated[index] = [...updated[index]];
            updated[index][1] = value;
            return updated;
        });
    }

    function handleSave()
    {
        props.onSave(items);
    }

    return (<>
        {!showSelectTemplate &&
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="column">
                    {(provided) => (
                        <div className="column-container">
                            <div className="column-main" ref={provided.innerRef} {...provided.droppableProps}>
                                {items.map((item, index) => (
                                    <Draggable key={index} draggableId={String(index)} index={index}>
                                        {(provided) => (
                                            <div
                                                className="column-item-main"
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                            >
                                                <div className="column-title">
                                                    <input value={item[0]} onChange={(e) => handleTitleChange(index, e.target.value)} style={{ borderLeft: `8px solid ${item[2]}` }} />
                                                    <img
                                                        src="drag (1).png"
                                                        {...provided.dragHandleProps}
                                                    />
                                                </div>

                                                <input value={item[1]} onChange={(e) => handleDescChange(index, e.target.value)} style={{ borderLeft: `8px solid ${item[2]}` }} />

                                                <div className="column-color-container" style={{ borderLeft: `8px solid ${item[2]}` }}>
                                                    <div className="column-color" onClick={() => handleColorChange(index)} style={{ backgroundColor: item[2] }}></div>
                                                </div>

                                                {activeColorIndex === index &&
                                                    <div className="all-colors-container">
                                                        {
                                                            COLORS.map((color, colorIdx) => (
                                                                <div className="edit-color" key={colorIdx} style={{ backgroundColor: color }} onClick={() => handleColourChoose(index, item, colorIdx)}></div>
                                                            ))
                                                        }
                                                    </div>}

                                                <div className="column-delete" onClick={() => handleColumnDelete(index)}>
                                                    <img src="trash.png"></img>
                                                    <button >Delete</button>
                                                </div>
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}

                            </div>
                            <div className="button-container">

                                <button className="change-template-button" onClick={handleChangeTemplate}>
                                    <img src="refresh (1).png" className="change-template-img"></img>
                                    Change Template
                                </button>

                                <button className="add-column-button" onClick={handleAddColumn}>
                                    <img src="add-column.png" className="change-template-img"></img>
                                    Add Column
                                </button>
                            </div>

                            <div className="bottom-button-container">

                                <button className="change-template-button" onClick={handleChangeTemplate}>
                                    Cancel
                                </button>

                                <button className="add-column-button" onClick={handleSave}>
                                    Save
                                </button>
                            </div>
                        </div>
                    )}
                </Droppable>
            </DragDropContext>}

        {showSelectTemplate && <SelectTemplate />}</>

    );
}

export default Column;
