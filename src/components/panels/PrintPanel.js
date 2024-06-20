import { useContext } from "react";
import BarGenerationCtx from "../../js/barGeneration-context";

import BarsPrintButton from "../elements/BarsPrintButton";
import CodeModuleOption from "../elements/CodeModuleOption";

import selectors from "./PrintPanel.module.css";

function PrintPanel(props) {

    const barsCombCtx = useContext(BarGenerationCtx);

    const barsValue = barsCombCtx.barsValue;

    let barCodeSettings = "";
    let barsPrintButtonClass = "";
    if (barsValue > 2 && barsValue <= 131070) {
        barCodeSettings = <>
            <CodeModuleOption id="codeMicro" codeType="Micro" value="NICRO" className={selectors["code-module-checkbox"]} />
            <CodeModuleOption id="codeMini" codeType="Mini" value="MINI" className={selectors["code-module-checkbox"]} />
            <CodeModuleOption id="codeStandard" codeType="Standard" value="STANDARD" className={selectors["code-module-checkbox"]} isChecked={true} />
        </>;
        barsPrintButtonClass = "print-button-active";
    }

    return <div className={selectors["print-panel"] + " " + selectors[props.className]}>
        <hr />
        {barCodeSettings}
        <BarsPrintButton class={barsPrintButtonClass} />
    </div>;
}

export default PrintPanel;