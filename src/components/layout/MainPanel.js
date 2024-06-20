import { useContext } from "react";
import BarGenerationCtx from "../../js/barGeneration-context";

import ButtonsPanel from "../panels/ButtonsPanel";
import BarsDisplayPanel from "../panels/BarsDisplayPanel";
import InsertNumberPanel from "../panels/InsertNumberPanel";
import PrintPanel from "../panels/PrintPanel";

import selectors from "./MainPanel.module.css";

function MainPanel() {

    const barsCombCtx = useContext(BarGenerationCtx);

    const barsValue = barsCombCtx.barsValue;

    let printPanelClass = "";
    if (barsValue > 2 && barsValue <= 131070) {
        printPanelClass = <PrintPanel className="panel-visible"/>
    }

    return <>
        <main id={selectors.mainField}>
            <InsertNumberPanel />
            <hr />
            <BarsDisplayPanel />
            <ButtonsPanel />
            <PrintPanel className={printPanelClass}/>
        </main>
    </>
}

export default MainPanel;