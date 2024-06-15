import { useContext } from "react";
import BarGenerationCtx from "../../js/barGeneration-context";
import Bar from "../elements/Bar";

import selectors from "./BarsDisplayPanel.module.css";

function BarsDisplayPanel() {

    const barsCombCtx = useContext(BarGenerationCtx);

    // all existing bars parameters array
    const barsParams = barsCombCtx.eachBarParams;

    // barsParams.forEach(elem=>console.log(elem.position + " " + elem.value));

    // const BARS_DISPLAY = document.querySelector("#barsPlaceholder");

    // function displayAllBars() {
    //     let theBarsComb = "";
    //     BARS_DISPLAY.style.width = barCodeCurrenWidth() + "px";
    //     // if (
    //     //     theBarsCombDisplay.barCodeCurrenWidth() > theBarsCombDisplay.codeFieldWidth
    //     // ) {
    //     //     let barCodeFieldWidth = parseInt(
    //     //         document.querySelector("#barsPlaceholder").style.width
    //     //     );
    //     //     document.querySelector("#barsCombPlaceholder").style.width =
    //     //         barCodeFieldWidth + 20 + "px";
    //     //     document.querySelector("#mainField").style.width =
    //     //         barCodeFieldWidth + 100 + "px";
    //     // } else {
    //     //     document.querySelector("#barsCombPlaceholder").style.width = "320px";
    //     //     document.querySelector("#mainField").style.width = "400px";
    //     // }

    //     barsParams.forEach((elem) => {
    //         theBarsComb += defineTheBar(elem.position, elem.value);
    //     });
    //     if (theBarsComb != "") BARS_DISPLAY.innerHTML = theBarsComb;
    // }
    // function displayAllBars() {
    //     let theBarsComb = "";
    //     document.querySelector("#barsPlaceholder").style.width =
    //         theBarsCombDisplay.barCodeCurrenWidth() + "px";
    //     if (
    //         theBarsCombDisplay.barCodeCurrenWidth() > theBarsCombDisplay.codeFieldWidth
    //     ) {
    //         let barCodeFieldWidth = parseInt(
    //             document.querySelector("#barsPlaceholder").style.width
    //         );
    //         document.querySelector("#barsCombPlaceholder").style.width =
    //             barCodeFieldWidth + 20 + "px";
    //         document.querySelector("#mainField").style.width =
    //             barCodeFieldWidth + 100 + "px";
    //     } else {
    //         document.querySelector("#barsCombPlaceholder").style.width = "320px";
    //         document.querySelector("#mainField").style.width = "400px";
    //     }

    //     theBarsCombDisplay.eachBarSpecs.forEach((elem) => {
    //         theBarsComb += defineTheBar(elem.position, elem.value);
    //     });
    //     if (theBarsComb != "") theBars.innerHTML = theBarsComb;
    // }

    // function barCodeCurrenWidth(){
    //     return barsParams[barsParams.length -1].position + barsParams[barsParams.length -1].value;
    // }

    // function defineTheBar(theBarPosition, theBarWidth) {
    //     return (
    //         '<rect x="' +
    //         theBarPosition +
    //         '" y="15" width="' +
    //         theBarWidth +
    //         '" height="120" fill="black"/>'
    //     );
    // }

    // function displayAllBars(){

    // };

    const BARS_TO_DISPLAY = [];
    barsParams.forEach((elem) => BARS_TO_DISPLAY.push(<Bar position={elem.position} width={elem.value} />));


    return <div id={selectors.barsPlaceholderPanel}>
        <svg xmlns="http://www.w3.org/2000/svg" className={selectors["bars-placeholder"]} id="barsPlaceholder">
        {BARS_TO_DISPLAY}
        {/* {barsParams.forEach((elem) => console.log(elem.position + " " + elem.value))} */}
        </svg>
        <div id={selectors.calculationPlaceholderFrame}><output id={selectors.calculationPlaceholder}></output></div>
    </div>;
}

export default BarsDisplayPanel;