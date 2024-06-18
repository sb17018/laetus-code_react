import { useContext } from "react";
import BarGenerationCtx from "../../js/barGeneration-context";

import selectors from "./BarsPrintButton.module.css";

function BarsPrintButton() {
    const barsCombCtx = useContext(BarGenerationCtx);

    const barsCombination = barsCombCtx.eachBarParams;

    function print() {
        console.log(JSON.stringify(barsCombination));
    }

    return <div className={selectors["printing-button"]} id="printingButton" onClick={print}><p>PRINT</p>
    </div>;
}

export default BarsPrintButton;