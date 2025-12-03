"use client"
import BoardType from "@/Components/BoardType";
import { useState } from "react";
import { useSession } from "next-auth/react";
import "./page.css";
import SelectTemplate from "@/Components/SelectTemplate";

function Retro() {

    const { data: session } = useSession();

    const [selected, setSelected] = useState("");
    const [showTemplate, setShowTemplate] = useState(false);
    if (!session) {
        return(
        <>
            <div>
                <h1>Not logged in</h1>
            </div>
        </>);
    }

    function handleNextClick() {
        setShowTemplate(true);
    }

    function handleBoardClick(type) {
        setSelected(type);
    }

    return (
        <>
            {!showTemplate &&
                <div className="create-body">
                    <div className="create-top">
                        <div className="create-title">
                            <img className="create-icon" src="select.png"></img>
                            <h1>Select Board Type</h1>
                        </div>
                        <h3>Create a retrospective by selecting the type of board you want</h3>
                    </div>

                    <div className="all-board">
                        <BoardType
                            className="standard"
                            imgSrc="https://d4shkfji2h44x.cloudfront.net/public/create-retro-standard.png"
                            title="Standard"
                            description="A standard retrospective board with no predefined flow. This board is perfect fpr teams that want to run a free-form retrospective."
                            iconSrc="arrange.png"
                            isSelected={selected === "standard"}
                            onBoardClick={() => handleBoardClick("standard")} />

                        <BoardType
                            className="guided"
                            imgSrc="https://d4shkfji2h44x.cloudfront.net/public/create-retro-guided.png"
                            title="Guided"
                            description="A guided retrospective that follows a step-by-step process. You can customize the flow to fit your team's needs."
                            iconSrc="user-guide.png"
                            isSelected={selected === "guided"}
                            onBoardClick={() => handleBoardClick("guided")} />


                        <BoardType
                            className="duplicate"
                            imgSrc="https://d4shkfji2h44x.cloudfront.net/public/create-retro-duplicate.png"
                            title="Duplicate"
                            description="Duplicate an existing meeting, including all polls, columns and settings. Perfect for teams that have fine tuned their retrospective process and want to reuse it."
                            iconSrc="copy.png"
                            isSelected={selected === "duplicate"}
                            onBoardClick={() => handleBoardClick("duplicate")} />
                    </div>

                    <div className="create-page-next">
                        <button onClick={handleNextClick}>Next {' >'}</button>
                    </div>
                </div>
            }

            {showTemplate && <SelectTemplate />}

        </>);
}

export default Retro;