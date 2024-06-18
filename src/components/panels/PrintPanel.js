import BarsPrintButton from "../elements/BarsPrintButton";
import CodeModuleOption from "../elements/CodeModuleOption";

import selectors from "./PrintPanel.module.css";

function PrintPanel() {

    return <>
        <CodeModuleOption id="codeMicro" codeType="Micro (0.25)" value="0.25" className={selectors["code-module-checkbox"]} />
        <CodeModuleOption id="codeMini" codeType="Mini (0.375)" value="0.375" className={selectors["code-module-checkbox"]} />
        <CodeModuleOption id="codeStandard" codeType="Standard (0.5)" value="0.5" className={selectors["code-module-checkbox"]} />
        <BarsPrintButton />
    </>
}

export default PrintPanel;