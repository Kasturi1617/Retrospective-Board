import "./Column.css";
import { TEMPLATE_DETAILS } from "../app/utils/utils";

function Column(props) {

    function handleTitleChange() {

    }

    function handleDescChange() {

    }

    return (
        <>

            <div className="column-main">
                {
                    TEMPLATE_DETAILS[props.idx].map((item, index) => (
                        <div className="column-item-main">
                            <div className="column-title">
                                <input value={item[0]} onChange={handleTitleChange}></input>
                                <img src="drag (1).png"></img>
                            </div>
                            <input value={item[1]} onChange={handleDescChange}></input>
                            <div className="column-color-container">
                                <div className="column-color"></div>
                            </div>
                            <div></div>
                            <div className="column-delete">
                                <img src="trash.png"></img>
                                <button>Delete</button>
                            </div>
                        </div>))
                }
            </div></>
    )
}

export default Column;