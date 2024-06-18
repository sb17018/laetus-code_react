import { useContext } from "react";
import BarGenerationCtx from "../../js/barGeneration-context";

import selectors from "./InsertNumberPanel.module.css";

function InsertNumberPanel() {
    const barsCombCtx = useContext(BarGenerationCtx);

    const barsValue = barsCombCtx.barsValue;

    const isTooHigh = barsCombCtx.isValueTooHigh;

    console.log(barsValue)

    function displaySth(event) {
        barsCombCtx.generateCode(event.target.value);
    }

    let upperPropmt = <output id={selectors.lessThan3Prompt}></output>

    if (barsValue > 0 && barsValue < 3) {
        upperPropmt = <output id={selectors.lessThan3Prompt} className={selectors["too-little-number"]}></output>;
    }
    else if (isTooHigh) {
        upperPropmt = <output id={selectors.lessThan3Prompt} className={selectors["too-great-number"]} onAnimationEnd={fadePromptOut}></output>;
    }


    function fadePromptOut(event) {
        console.log(event.target);
        if (isTooHigh) setTimeout(() => event.target.className = "", 3000);
    }

    // let outputClass = "";
    // if (barsValue > 0 && barsValue < 3) {
    //     outputClass = selectors["too-little-number"];
    // }
    // else if (isTooHigh) {
    //     outputClass = selectors["too-great-number"];
    // }

    // function fadePromptOut(event){
    //     console.log(event.target);
    //     if(isTooHigh) setTimeout(() => event.target.className = "", 3000);
    // }


    return <div>
        <h4>Enter a number to generate code</h4>
        <div id="toEnterNumber">
            <input type="number" id={selectors.userInputField} placeholder="REQUIRED MINIMAL VALUE 3" value={barsValue > 0 ? barsValue : ""} onCopy={() => false} onChange={displaySth} />
        </div>
        <br />
        {upperPropmt}
    </div>;
}

export default InsertNumberPanel;