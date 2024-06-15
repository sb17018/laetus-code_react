import BarsControlButton from "../elements/BarsControlButton";
import selectors from "./ButtonsPanel.module.css";

function ButtonsPanel() {

    function print(){
        console.log("A");
    }

    return <>
        <h6><i>OR</i></h6>
        <h4>Check number by given bars combination</h4>

        <div className={selectors["button-panel"] + " " + selectors["left"]}>

            <BarsControlButton className={selectors["editing-button"] + " " + selectors["bar-button"]} id="thickButton"><div id={selectors.thickButton}></div></BarsControlButton>
            <BarsControlButton className={selectors["remove-last-button"] + " " + selectors["editing-button"]} id="removeLastBarButton"><p>remove last</p></BarsControlButton>

        </div>

        <div className={selectors["button-panel"] + " " + selectors["right"]}>

            <BarsControlButton className={selectors["editing-button"] + " " + selectors["bar-button"]} id="thinButton"><div id={selectors.thinButton}></div></BarsControlButton>
            <BarsControlButton className={selectors["clear-all-button"] + " " + selectors["editing-button"]} id="clearAllBarsButton"><p>clear</p></BarsControlButton>

        </div>
    </>;
}

export default ButtonsPanel;