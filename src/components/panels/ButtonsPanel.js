import BarsControlButton from "../elements/BarsControlButton";
import selectors from "./ButtonsPanel.module.css";

function ButtonsPanel() {
    return <>
        <h6><i>OR</i></h6>
        <h4>Check number by given bars combination</h4>

        <div className={selectors["button-panel"] + " " + selectors["left"]}>

            <BarsControlButton className={selectors["editing-button"] + " " + selectors["bar-button"]}><div id={selectors.thickButton}></div></BarsControlButton>
            <BarsControlButton id={selectors.lastRemovalButton} className={selectors["editing-button"]}><p>remove last</p></BarsControlButton>

        </div>

        <div className={selectors["button-panel"] + " " + selectors["right"]}>

            <BarsControlButton className={selectors["editing-button"] + " " + selectors["bar-button"]}><div id={selectors.thinButton}></div></BarsControlButton>
            <BarsControlButton id={selectors.clearButton} className={selectors["editing-button"]}><p>clear</p></BarsControlButton>

        </div>
    </>;
}

export default ButtonsPanel;