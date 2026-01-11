"use client"
import Title from "@/Components/Title";
import Item from "@/Components/Item";
import "./page.css";
import NewItem from "@/Components/newItem";
import { useAppStore } from "@/Store/useAppStore";
import { useState, useEffect } from "react";

function DAKI() {
    const [retro, setRetro] = useState<any[]>([]);

    const fetchRetros = async () => {
        const res = await fetch("/api/retros");
        if (!res.ok) {
            console.error("Failed to fetch retros");
            return;
        }
        const data = await res.json();
        setRetro(data);
        console.log("Fetched retros:", data[0]);
    };

    useEffect(() => {
        fetchRetros();
    }, []);

    return (
        <div className="title-container">
            {retro.length > 0 && retro[0].columns.map((column, idx) => {
                return (
                    console.log("Column color: ", column.color),

                    <div key={idx} className="column-title-container">
                        <Title title={column.title} buttonTitle="Add Item" columnTitle={column.description} retroId={retro[0]._id} onAddCard={fetchRetros} color={column.color}></Title>
                        <div className="drop">
                            {column.cards.map((card, cidx) => (
                                <Item key={cidx} index={cidx} text={card.text} />))}
                        </div>

                    </div>)
            })}
        </div>
    )
}

export default DAKI;