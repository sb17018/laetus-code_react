import { useContext } from "react";
import BarGenerationCtx from "../../js/barGeneration-context";

import selectors from "./InsertNumberPanel.module.css";

function InsertNumberPanel() {
    const barsCombCtx = useContext(BarGenerationCtx);

    const barsValue = barsCombCtx.barsValue;
    
    function displaySth(event) {
        barsCombCtx.generateCode(event.target.value);
        barsCombCtx.setPrompt(event.target.value);
    }
    
    return <div>
        <h4>Enter a number to generate code</h4>
        <div id="toEnterNumber">
            <input type="number" id={selectors.userInputField} placeholder="REQUIRED MINIMAL VALUE 3" value={barsValue > 0 ? barsValue : ""} onCopy={() => false} onChange={displaySth} />
        </div>
        <br />
    </div>;
}

export default InsertNumberPanel;