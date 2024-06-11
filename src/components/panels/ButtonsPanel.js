function ButtonsPanel() {
    return <>
        <h6><i>OR</i></h6>
        <h4>Check number by given bars combination</h4>

        <div class="button-panel left">
            <div class="editing-button bar-button">
                <div id="thickButton"></div>
            </div>

            <div id="lastRemovalButton" class="editing-button">
                <p>remove last</p>
            </div>
        </div>

        <div class="button-panel right">
            <div class="editing-button bar-button">
                <div id="thinButton"></div>
            </div>

            <div id="clearButton" class="editing-button">
                <p>clear</p>
            </div>
        </div>
    </>;
}

export default ButtonsPanel;