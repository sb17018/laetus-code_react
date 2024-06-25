import { useRef, useContext, useState, useEffect } from "react";
import BarGenerationCtx from "../../js/barGeneration-context";

import Button from "../elements/Button";
import InputRadio from "../elements/RadioModuleOption";

import selectors from "./PrintPanel.module.css";

function PrintPanel() {

    const MAX_VALUE = 131070;

    const barsCombCtx = useContext(BarGenerationCtx);
    const barsValue = barsCombCtx.barsValue;

    const ref = useRef();

    let codeSizeChosen = "STANDARD";
    function checkValue(event) {
        codeSizeChosen = event.target.value;
    }

    const [barsPrintButtonClass, setBarsPrintButtonClass] = useState("");

    let printPanelClass = "";

    if (barsValue > 2 && barsValue <= MAX_VALUE) {
        printPanelClass = selectors["panel-visible"];
    }

    useEffect(() => {
        if (barsValue <= 2 || barsValue > MAX_VALUE) {
            setBarsPrintButtonClass("");
        }
    }, [barsValue]);

    let barCodeSettings = <div id={selectors.checkBoxesWrapper}>
        <InputRadio ref={ref} id="codeMicro" name="codeSize" data-code-type="Micro" value="MICRO" data-code-measure="0.250" className={selectors["code-module-checkbox"]} onChange={checkValue} />
        <InputRadio ref={ref} id="codeMini" name="codeSize" data-code-type="Mini" value="MINI" data-code-measure="0.375" className={selectors["code-module-checkbox"]} onChange={checkValue} />
        <InputRadio ref={ref} id="codeStandard" name="codeSize" data-code-type="Standard" value="STANDARD" data-code-measure="0.500" className={selectors["code-module-checkbox"]} onChange={checkValue} defaultChecked="true" />
    </div>;

    function activatePrintBtn() {
        if (barsValue > 2 && barsValue <= MAX_VALUE) {
            setBarsPrintButtonClass(selectors["print-button-active"]);
        }
    }

    function clickFunction(ev) {

        ev.preventDefault();
        if (barsValue > 2 && barsValue <= MAX_VALUE) {
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
    }

    return <>
        <hr id={selectors.dividerLine} />
        <div id={selectors.printPanelWrapper} data-open="false" className={printPanelClass} onTransitionEnd={activatePrintBtn} >
            <div className={selectors["print-panel"] + " " + printPanelClass}>
                <form onSubmit={clickFunction}>
                    {barCodeSettings}
                    <Button id={selectors.printingButton} className={barsPrintButtonClass}><p>PRINT</p></Button>
                </form>
            </div>
        </div>
    </>;
}

export default PrintPanel;