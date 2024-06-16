import { useContext } from "react";
import BarGenerationCtx from "../../js/barGeneration-context";
import Bar from "../elements/Bar";

import selectors from "./BarsDisplayPanel.module.css";

function BarsDisplayPanel() {

    const barsCombCtx = useContext(BarGenerationCtx);

    // all existing bars parameters array
    const barsParams = barsCombCtx.eachBarParams;

    const barsValue = barsCombCtx.barsValue;

    function barCodeCurrenWidth() {
        return barsParams.length > 0 ? barsParams[barsParams.length - 1].position + barsParams[barsParams.length - 1].value : 0;
    }

    const BARS_TO_DISPLAY = [];
    barsParams.forEach((elem, index) => {
        BARS_TO_DISPLAY.push(<Bar key={index} position={elem.position} width={elem.value} />);
    });


    return <div id={selectors.barsPlaceholderPanel}>
        <svg xmlns="http://www.w3.org/2000/svg" className={selectors["bars-placeholder"]} id="barsPlaceholder" style={{ width: barCodeCurrenWidth() + "px" }}>
            {BARS_TO_DISPLAY}
        </svg>
        <div id={selectors.calculationPlaceholderFrame}><output id={selectors.calculationPlaceholder} className={barsValue > 2 ? barsValue > 131070 ? selectors["to-great-number"] : selectors["code-number"] : ""}>{barsValue > 2 ? barsValue <= 131070 ? barsValue : "" : ""}</output></div>
    </div>;
}

export default BarsDisplayPanel;