import { useContext } from "react";
import BarGenerationCtx from "../../js/barGeneration-context";

import selectors from "./InsertNumberPanel.module.css";

function InsertNumberPanel() {
    const barsCombCtx = useContext(BarGenerationCtx);

    const barsValue = barsCombCtx.barsValue;
    const barsCombNumber = barsCombCtx.eachBarParams.length;

    function displaySth(event) {
        barsCombCtx.generateCode(event.target.value);
    }

    return <div>
        <h4>Enter a number to generate code</h4>
        <div id="toEnterNumber">
            <input type="number" id={selectors.userInputField} placeholder={barsValue > 131070 ? "TO GREAT NUMBER": "REQUIRED MINIMAL VALUE 3"} value={barsValue > 0 ? barsCombNumber <= 16 ? barsValue : "" : ""} onCopy={() => false} onChange={displaySth} />
        </div>
        <output id={selectors.lessThan3Prompt} className={barsValue > 0 ? barsValue < 3 ? selectors["code-number"] : "" : ""}>{barsValue > 0 ? barsValue < 3 ? "REQUIRED MINIMAL VALUE 3" : "" : ""}</output>
    </div>;
}

export default InsertNumberPanel;