import { useRef, useContext } from "react";
import BarGenerationCtx from "../../js/barGeneration-context";

import Button from "../elements/Button";
import InputRadio from "../elements/CodeModuleOption";

import selectors from "./PrintPanel.module.css";

function PrintPanel(props) {

    const MAX_VALUE = 131070;

    const barsCombCtx = useContext(BarGenerationCtx);
    const barsValue = barsCombCtx.barsValue;

    const ref = useRef();

    let codeSizeChosen = "STANDARD";
    function checkValue(event) {
        codeSizeChosen = event.target.value;
    }

    let barCodeSettings = "";
    let barsPrintButtonClass = "";
    if (barsValue > 2 && barsValue <= MAX_VALUE) {
        barCodeSettings = <>
            <InputRadio ref={ref} id="codeMicro" name="codeSize" data-code-type="Micro" value="MICRO" data-code-measure="0.250" className={selectors["code-module-checkbox"]} onChange={checkValue} />
            <InputRadio ref={ref} id="codeMini" name="codeSize" data-code-type="Mini" value="MINI" data-code-measure="0.375" className={selectors["code-module-checkbox"]} onChange={checkValue} />
            <InputRadio ref={ref} id="codeStandard" name="codeSize" data-code-type="Standard" value="STANDARD" data-code-measure="0.500" className={selectors["code-module-checkbox"]} onChange={checkValue} defaultChecked="true" />
        </>;
        barsPrintButtonClass = selectors["print-button-active"];
    }

    function clickFunction(ev) {
        
        ev.preventDefault();

        fetch("http://localhost:8080/code",
            {
                mode: "no-cors",
                method: "POST",
                body: codeSizeChosen + "," + barsValue,
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
    }
    return <div className={selectors["print-panel"] + " " + selectors[props.className]}>
        <form onSubmit={clickFunction}>
            <hr />
            {barCodeSettings}
            <Button id={selectors.printingButton} className={barsPrintButtonClass}><p>PRINT</p></Button>
        </form>
    </div>;
}

export default PrintPanel;