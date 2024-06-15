import { useContext } from "react";
import BarGenerationCtx from "../../js/barGeneration-context";

function BarsControlButton(props) {

    const barsCombCtx = useContext(BarGenerationCtx);
    
    function manipulateBars(){
        switch(props.id){
            case "thickButton":
            case "thinButton": barsCombCtx.enterNextBar(props.id);
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