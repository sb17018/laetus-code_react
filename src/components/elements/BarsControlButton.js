import { useContext } from "react";
import BarGenerationCtx from "../../js/barGeneration-context";

function BarsControlButton(props) {

    const barsCombCtx = useContext(BarGenerationCtx);

    const barsValue = barsCombCtx.barsValue;

    function manipulateBars() {
        switch (props.id) {
            case "thickButton":
                barsCombCtx.enterNextBar(props.id);
                barsCombCtx.setPrompt(barsValue * 2 + 2);
                break;
            case "thinButton":
                barsCombCtx.enterNextBar(props.id);
                barsCombCtx.setPrompt(barsValue * 2 + 1);
                break;
            case "removeLastBarButton": barsCombCtx.removeLastBar();
                break;
            case "clearAllBarsButton": barsCombCtx.removeAllBars();
                break;
        }
    }

    return <div id={props.id} className={props.className} onClick={manipulateBars}>
        {props.children}
    </div>;
}

export default BarsControlButton;