function InsertNumberPanel() {
    return <div>
        <h4>Enter a number to generate code</h4>
        <div class="toEnterNumber">
            <input type="type" id="userInputField" placeholder="REQUIRED MINIMAL VALUE 3" onCopy="false" />
        </div>
    </div>;
}

export default InsertNumberPanel;