import "./Column.css";
import { TEMPLATE_DETAILS, COLORS } from "../app/utils/utils";
import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

function Column(props) {
    const [items, setItems] = useState(TEMPLATE_DETAILS[props.idx]);
    const [showColors, setShowColors] = useState(false);

    function onDragEnd(result) {
        if (!result.destination) return;
        const reordered = [...items];
        const [removed] = reordered.splice(result.source.index, 1);
        reordered.splice(result.destination.index, 0, removed);
        setItems(reordered);
    }

    function handleColorChange() {
        setShowColors(!showColors);
    }

    function handleColourChoose(itemIndex, item, colorIndex) {
        console.log("Clicked Kasturi");
        console.log(item);
        console.log(COLORS[colorIndex]);
        item[2] = COLORS[colorIndex];
        // setItems(item);
        handleColorChange();
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="column">
                {(provided) => (
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
                                            <input value={item[0]} style={{ borderLeft: `8px solid ${item[2]}` }} />
                                            <img
                                                src="drag (1).png"
                                                {...provided.dragHandleProps}
                                            />
                                        </div>

                                        <input value={item[1]} style={{ borderLeft: `8px solid ${item[2]}` }} />

                                        <div className="column-color-container" style={{ borderLeft: `8px solid ${item[2]}` }}>
                                            <div className="column-color" onClick={handleColorChange} style={{ backgroundColor: item[2] }}></div>
                                        </div>

                                        {showColors &&
                                            <div className="all-colors-container">
                                                {
                                                    COLORS.map((color, colorIdx) => (
                                                        <div className="edit-color" key={colorIdx} style={{ backgroundColor: color }} onClick={() => handleColourChoose(index, item, colorIdx)}></div>
                                                    ))
                                                }
                                            </div>}

                                        <div className="column-delete">
                                            <img src="trash.png"></img>
                                            <button>Delete</button>
                                        </div>
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
}

export default Column;
