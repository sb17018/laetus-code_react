import { useContext } from "react";
import BarGenerationCtx from "../../js/barGeneration-context";

import ButtonsPanel from "../panels/ButtonsPanel";
import BarsDisplayPanel from "../panels/BarsDisplayPanel";
import InsertNumberPanel from "../panels/InsertNumberPanel";
import PrintPanel from "../panels/PrintPanel";

import selectors from "./MainPanel.module.css";

function MainPanel() {

    const MIN_VALUE = 2;
    const MAX_VALUE = 131070;

    const barsCombCtx = useContext(BarGenerationCtx);

    const barsValue = barsCombCtx.barsValue;

    let printPanelClass = "";
    if (barsValue > MIN_VALUE && barsValue <= MAX_VALUE) {
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