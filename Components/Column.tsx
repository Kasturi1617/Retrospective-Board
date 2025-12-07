import "./Column.css";
import { TEMPLATE_DETAILS, COLORS } from "../app/utils/utils";
import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

function Column(props) {
    const [items, setItems] = useState(TEMPLATE_DETAILS[props.idx]);

    function onDragEnd(result) {
        if (!result.destination) return;
        const reordered = [...items];
        const [removed] = reordered.splice(result.source.index, 1);
        reordered.splice(result.destination.index, 0, removed);
        setItems(reordered);
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
                                            <input value={item[0]} style={{ borderLeft: `8px solid ${COLORS[index]}` }} />
                                            <img
                                                src="drag (1).png"
                                                {...provided.dragHandleProps}
                                            />
                                        </div>

                                        <input value={item[1]} style={{ borderLeft: `8px solid ${COLORS[index]}` }} />

                                        <div className="column-color-container" style={{ borderLeft: `8px solid ${COLORS[index]}` }}>
                                            <div className="column-color" style={{ backgroundColor: COLORS[index] }}></div>
                                        </div>

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
