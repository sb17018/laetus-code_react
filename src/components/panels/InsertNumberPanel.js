import { useState, useContext } from "react";
import BarGenerationCtx from "../../js/barGeneration-context";

import selectors from "./InsertNumberPanel.module.css";

function InsertNumberPanel() {
    
    const barsCombCtx = useContext(BarGenerationCtx);
    // const [isTooHigh, setIsTooHigh] = useState(barsCombCtx.howManyTimesTooHigh);

    const barsValue = barsCombCtx.barsValue;

    const isTooHigh = barsCombCtx.isValueTooHigh;
    // const isTooHigh = barsCombCtx.isValueTooHigh;
    const howManyTooHigh = barsCombCtx.howManyTimesTooHigh;

    console.log(howManyTooHigh)
    barsCombCtx.setPrompt(howManyTooHigh);

    const isPromptOn = barsCombCtx.upperPrompt;
    
    // setIsTooHigh();
    
    console.log(barsValue)
    console.log(isTooHigh)
    
    // setIsTooHigh(barsCombCtx.howManyTimesTooHigh);

    function displaySth(event) {
        barsCombCtx.generateCode(event.target.value);
        // if(event.target.value > 131070){
            //     event.target.parentElement.nextSibling.nextSibling.className = selectors["too-great-number"];
            // }
        }
        
    let outputClass = selectors[isPromptOn];
    // let outputClass = "";
    // if (barsValue > 0 && barsValue < 3) {
    //     outputClass = selectors["too-little-number"];
    // }
    // else if (isTooHigh > 0) {
    //     outputClass = selectors["too-great-number"];
    // }
    console.log("outputClass = " + outputClass);

    function fadePromptOut(event) {
        // console.log(event.target);
        if(isTooHigh)setTimeout(() =>  barsCombCtx.setPrompt(0), 3000);
    }

    return <div>
        <h4>Enter a number to generate code</h4>
        <div id="toEnterNumber">
            <input type="number" id={selectors.userInputField} placeholder="REQUIRED MINIMAL VALUE OF 3" value={barsValue > 0 ? barsValue : ""} onCopy={() => false} onChange={displaySth} />
        </div>
        <br />
        <output id={selectors.lessThan3Prompt} className={outputClass} onAnimationEnd={fadePromptOut}></output>
    </div>;
}

export default InsertNumberPanel;