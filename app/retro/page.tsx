"use client"
import Title from "@/Components/Title";
import Item from "@/Components/Item";
import "./page.css";
import NewItem from "@/Components/newItem";
import { useAppStore } from "@/Store/useAppStore";
import { useState, useEffect } from "react";

function DAKI() {
    const [retro, setRetro] = useState<any[]>([]);

    useEffect(() => {
        async function fetchRetros() {
            const res = await fetch("/api/retros");
            if (!res.ok) {
                console.error("Failed to fetch retros");
                return;
            }
            const data = await res.json();
            setRetro(data);
            console.log("Fetched retros:", data[0]);
        }
        fetchRetros();
    }, []);

    return (
        <div>
            <div className="title-container">
            {retro.length > 0 && retro[0].columns.map((column, idx) => {
                return (
                    
                        <div className="column-title-container">
                            <Title title={column.title} buttonTitle="Add Item" imagePath="down.png" columnTitle={column.description}  retroId={retro[0]._id}></Title>
                            <div className="drop">r
                                {column.cards.map((card, cidx) => (
                                    <Item key={cidx} index={cidx} text={card.text} />))}
                            </div>
                        
                    </div>)
            })}
            </div>
        </div>
    )
}

export default DAKI;