import selectors from "./BarsDisplayPanel.module.css";

function BarsDisplayPanel() {
    return <div id={selectors.barsPlaceholderPanel}>
        <svg xmlns="http://www.w3.org/2000/svg" id={selectors.barsPlaceholder}>
        </svg>
        <div id={selectors.calculationPlaceholderFrame}><output id={selectors.calculationPlaceholder}></output></div>
    </div>;
}

export default BarsDisplayPanel;