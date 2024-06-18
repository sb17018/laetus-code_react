import selectors from "./BarsPrintButton.module.css";

function BarsPrintButton() {

    return <div className={selectors["printing-button"]} id="printingButton"><p>PRINT</p>
    </div>;
}

export default BarsPrintButton;