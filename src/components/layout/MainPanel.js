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

    let printPanel = undefined;
    if (barsValue > 2 && barsValue <= 131070) {
        printPanel = <><hr /><PrintPanel /></>;
    }

    return <>
        <main id={selectors.mainField}>
            <InsertNumberPanel />
            <br />
            <hr />
            <BarsDisplayPanel />
            <hr />
            <ButtonsPanel />
            {printPanel}
        </main>
    </>
}

export default MainPanel;