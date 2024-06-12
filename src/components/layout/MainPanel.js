import ButtonsPanel from "../panels/ButtonsPanel";
import BarsDisplayPanel from "../panels/BarsDisplayPanel";
import InsertNumberPanel from "../panels/InsertNumberPanel";
import selectors from "./MainPanel.module.css";

function MainPanel() {
    return <>
        <main id={selectors.mainField}>
            <InsertNumberPanel />
            <br />
            <hr />
            <BarsDisplayPanel />
            <hr />
            <ButtonsPanel />
        </main>
    </>
}

export default MainPanel;