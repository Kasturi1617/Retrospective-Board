import BoardType from "@/Components/BoardType";
import "./page.css";

function Retro() {
    return (
        <>
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
                        imgSrc="https://d4shkfji2h44x.cloudfront.net/public/create-retro-standard.png"
                        title="Standard"
                        description="A standard retrospective board with no predefined flow. This board is perfect fpr teams that want to run a free-form retrospective."
                        iconSrc="arrange.png" />

                    <BoardType
                        imgSrc="https://d4shkfji2h44x.cloudfront.net/public/create-retro-guided.png"
                        title="Guided"
                        description="A guided retrospective that follows a step-by-step process. You can customize the flow to fit your team's needs."
                        iconSrc="user-guide.png" />

                    <BoardType
                        imgSrc="https://d4shkfji2h44x.cloudfront.net/public/create-retro-duplicate.png"
                        title="Duplicate"
                        description="Duplicate an existing meeting, including all polls, columns and settings. Perfect for teams that have fine tuned their retrospective process and want to reuse it."
                        iconSrc="copy.png" />
                </div>
            </div>

        </>);
}

export default Retro;