import selectors from "./InsertNumberPanel.module.css";

function InsertNumberPanel() {
    return <div>
        <h4>Enter a number to generate code</h4>
        <div id="toEnterNumber">
            <input type="number" id={selectors.userInputField} placeholder="REQUIRED MINIMAL VALUE 3" onCopy={()=>false} />
        </div>
    </div>;
}

export default InsertNumberPanel;