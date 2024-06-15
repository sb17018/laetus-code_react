import { useContext } from "react";
import BarGenerationCtx from "../../js/barGeneration-context";

function BarsControlButton(props) {

    // const btnContent = 

    const barsCombCtx = useContext(BarGenerationCtx);

    // const addBar = barsCombCtx.enterNextBar(props.id);
    // const removeLastBar = barsCombCtx.removeLastBar();
    // const clearBars = barsCombCtx.removeAllBars();
    
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

    // function addBarHandler(){
    //     console.log(barType);
    // }

    return <div id={props.id} className={props.className} onClick={manipulateBars}>
        {props.children}
    </div>;
}

export default BarsControlButton;