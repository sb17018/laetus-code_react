import { useContext, useRef } from "react";
import BarGenerationCtx from "../../js/barGeneration-context";

import Button from "../elements/Button";
import selectors from "./ButtonsPanel.module.css";

function ButtonsPanel() {

    const barsCombCtx = useContext(BarGenerationCtx);
    const barsValue = barsCombCtx.barsValue;

    const refBtn = useRef();

    function manipulateBars(event) {
        switch (event.currentTarget.id) {
            case "thickButton":
                barsCombCtx.enterNextBar(event.currentTarget.id);
                barsCombCtx.setPrompt(barsValue * 2 + 2);
                break;
            case "thinButton":
                barsCombCtx.enterNextBar(event.currentTarget.id);
                barsCombCtx.setPrompt(barsValue * 2 + 1);
                break;
            case "removeLastBarButton": barsCombCtx.removeLastBar();
                break;
            case "clearAllBarsButton": barsCombCtx.removeAllBars();
                break;
        }
    }

    return <>
        <div id={selectors.buttonPanelWrapper}>
            <div id={selectors.divisionWrapper}>
                <hr id={selectors.divisionLineLeft} />
                <h6 id={selectors.connectorOR}><i>OR</i></h6>
                <hr id={selectors.divisionLineRight} />
            </div>
            <h4>Check number by given bars combination</h4>
            <div className={selectors["button-panel"] + " " + selectors["left"]}>

                <Button ref={refBtn} className={selectors["editing-button"] + " " + selectors["bar-button"]} id="thickButton" onClick={manipulateBars}><div id={selectors.thickButton}></div></Button>
                <Button ref={refBtn} className={selectors["remove-last-button"] + " " + selectors["editing-button"]} id="removeLastBarButton" onClick={manipulateBars}><p>remove last</p></Button>

            </div>

            <div className={selectors["button-panel"] + " " + selectors["right"]}>

                <Button ref={refBtn} className={selectors["editing-button"] + " " + selectors["bar-button"]} id="thinButton" onClick={manipulateBars}><div id={selectors.thinButton}></div></Button>
                <Button ref={refBtn} className={selectors["clear-all-button"] + " " + selectors["editing-button"]} id="clearAllBarsButton" onClick={manipulateBars}><p>clear</p></Button>

            </div>
        </div>
    </>;
}

export default ButtonsPanel;