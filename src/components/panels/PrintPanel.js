import { useRef, useContext, useState } from "react";
import BarGenerationCtx from "../../js/barGeneration-context";

import BarsPrintButton from "../elements/BarsPrintButton";
import CodeModuleOption from "../elements/CodeModuleOption";
import InputRadio from "../elements/CodeModuleOption";

import selectors from "./PrintPanel.module.css";

function PrintPanel(props) {

    const MAX_VALUE = 131070;

    const barsCombCtx = useContext(BarGenerationCtx);

    const barsValue = barsCombCtx.barsValue;

    const ref = useRef();

    const [chosenRadioValue, setChosenRadioValue] = useState("STANDARD");
    
    function checkValue(event) {
        console.log(event.target.value);
        setChosenRadioValue(()=>event.target.value);
    }


    let barCodeSettings = "";
    let barsPrintButtonClass = "";
    if (barsValue > 2 && barsValue <= MAX_VALUE) {
        barCodeSettings = <>
            <InputRadio ref={ref} id="codeMicro" name="codeSize" data-code-type="Micro" value="MICRO" data-code-measure="0.250" className={selectors["code-module-checkbox"]} onChange={checkValue} />
            <InputRadio ref={ref} id="codeMini" name="codeSize" data-code-type="Mini" value="MINI" data-code-measure="0.375" className={selectors["code-module-checkbox"]} onChange={checkValue} />
            <InputRadio ref={ref} id="codeStandard" name="codeSize" data-code-type="Standard" value="STANDARD" data-code-measure="0.500" className={selectors["code-module-checkbox"]} onChange={checkValue} defaultChecked="true" />
        </>;
        barsPrintButtonClass = "print-button-active";
    }

    return <div className={selectors["print-panel"] + " " + selectors[props.className]}>
        <hr />
        {barCodeSettings}
        <BarsPrintButton class={barsPrintButtonClass} codeValue={chosenRadioValue} />
    </div>;
}

export default PrintPanel;