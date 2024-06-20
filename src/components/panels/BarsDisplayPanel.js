import { useContext } from "react";
import BarGenerationCtx from "../../js/barGeneration-context";
import Bar from "../elements/Bar";

import selectors from "./BarsDisplayPanel.module.css";

function BarsDisplayPanel() {

    const MAX_VALUE = 131070;

    const barsCombCtx = useContext(BarGenerationCtx);

    // all existing bars parameters array
    const barsParams = barsCombCtx.eachBarParams;
    const barsValue = barsCombCtx.barsValue;

    const BARS_TO_DISPLAY = [];
    barsParams.forEach((elem, index) => {
        BARS_TO_DISPLAY.push(<Bar key={index} position={elem.position} width={elem.value} color={barsValue > MAX_VALUE ? "grey" : "black"} />);
    });

    function barCodeCurrenWidth() {
        return barsParams.length > 0 ? barsParams[barsParams.length - 1].position + barsParams[barsParams.length - 1].value : 0;
    }

    const prompt = barsCombCtx.prompt;
    let upperPropmt = <output id={selectors.lessThan3Prompt}></output>

    if (barsValue > 0 && barsValue < 3) {
        upperPropmt = <output id={selectors.lessThan3Prompt} className={selectors["too-little-number"]}></output>;
    }
    else if (prompt) {
        upperPropmt = <output id={selectors.lessThan3Prompt} className={selectors["too-great-number"]} onAnimationEnd={fadePromptOut}></output>;
    }

    function fadePromptOut() {
        setTimeout(() => barsCombCtx.setPrompt(barsValue), 3000);
    }

    return <div>
        {upperPropmt}
        <div id={selectors.barsPlaceholderPanel}>
            <svg xmlns="http://www.w3.org/2000/svg" className={selectors["bars-placeholder"]} id="barsPlaceholder" style={{ width: barCodeCurrenWidth() + "px" }}>
                {BARS_TO_DISPLAY}
            </svg>
            <div id={selectors.calculationPlaceholderFrame}><output id={selectors.calculationPlaceholder} className={barsValue > 2 ? barsValue > MAX_VALUE ? selectors["to-great-number"] : selectors["code-number"] : ""}>{barsValue > 2 ? barsValue <= MAX_VALUE ? barsValue : "" : ""}</output></div>
        </div>
    </div>;
}

export default BarsDisplayPanel;