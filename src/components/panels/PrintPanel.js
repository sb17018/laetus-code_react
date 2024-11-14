import { useRef, useContext, useState, useEffect } from "react";
import BarGenerationCtx from "../../js/barGeneration-context";

import Button from "../elements/Button";
import InputRadio from "../elements/RadioModuleOption";

import selectors from "./PrintPanel.module.css";

import axios from 'axios';

function PrintPanel() {

    const MIN_VALUE = 2;
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

    const [objectWithPdf, setObjectWithPdf] = useState("");

    useEffect(() => {
        if (barsValue <= MIN_VALUE || barsValue > MAX_VALUE) {
            setBarsPrintButtonClass("");
            setObjectWithPdf("");
        }
    }, [barsValue]);

    let barCodeSettings = <div id={selectors.checkBoxesWrapper}>
        <InputRadio ref={ref} id="codeMicro" name="codeSize" data-code-type="Micro" value="MICRO" data-code-measure="0.250" className={selectors["code-module-checkbox"]} onChange={checkValue} />
        <InputRadio ref={ref} id="codeMini" name="codeSize" data-code-type="Mini" value="MINI" data-code-measure="0.375" className={selectors["code-module-checkbox"]} onChange={checkValue} />
        <InputRadio ref={ref} id="codeStandard" name="codeSize" data-code-type="Standard" value="STANDARD" data-code-measure="0.500" className={selectors["code-module-checkbox"]} onChange={checkValue} defaultChecked="true" />
    </div>;

    function activatePrintBtn() {
        if (barsValue > MIN_VALUE && barsValue <= MAX_VALUE) {
            setBarsPrintButtonClass(selectors["print-button-active"]);
        }
    }

    function clickFunction(ev) {

        ev.preventDefault();
        if (barsValue > MIN_VALUE && barsValue <= MAX_VALUE) {

            // Generating PDF microservice url
            // let path = "http://localhost:8080/code/" + barsValue + "/" + codeSizeChosen;
            let path = "http://192.168.0.208:8080/code/" + barsValue + "/" + codeSizeChosen;

            let fileName = "Pharmacode_" + barsValue + "_" + codeSizeChosen;


            const config = { responseType: 'blob' };
            axios.get(path, config).then(response => {
                console.log(response.data);
                console.log(response.headers["content-disposition"]);
                // response.data.pipe(fs.createWriteStream(fileName));
                const HREF = URL.createObjectURL(response.data);
      
                // create "a" HTML element with href to file & click
                const link = document.createElement('a');
                link.href = HREF;
                link.setAttribute('download', fileName); //or any other extension
                link.setAttribute('target', '_blank'); //or any other extension
                document.body.appendChild(link);
                link.click();

                // clean up "a" element & remove ObjectURL
                document.body.removeChild(link);
                URL.revokeObjectURL(HREF);
            });

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