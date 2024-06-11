import ButtonsPanel from "../panels/ButtonsPanel";
import BarsDisplayPanel from "../panels/BarsDisplayPanel";
import InsertNumberPanel from "../panels/InsertNumberPanel";

function MainPanel() {
    return <>
        <div id="mainField">
            <InsertNumberPanel />
            <br />
            <hr />
            <BarsDisplayPanel />
            <hr />
            <ButtonsPanel />
        </div>
    </>
}

export default MainPanel;