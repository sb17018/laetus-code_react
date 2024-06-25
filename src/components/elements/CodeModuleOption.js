import { forwardRef } from "react";

import selectors from "./CodeModuleOption.module.css";

const InputRadio = forwardRef((props, ref) => <div className={selectors["radio-wrapper"]}>
    <label htmlFor={props.id}><div><p>{props["data-code-type"]}</p><p>{"(" + props["data-code-measure"] + ")"}</p></div></label>
    <input type="radio" ref={ref} {...props} />
</div>
);


// function CodeModuleOption(props) {



//     return <div className={selectors["radio-wrapper"]}>
//         <label htmlFor={props.id}><div><p>{props.codeType}</p><p>{"(" + props.codeMeasure + ")"}</p></div></label>
//         <InputRadio type="radio" id={props.id} name="codeModuleOption" value={props.value} defaultChecked={props.isChecked}/>
//         {/* <input type="radio" id={props.id} name="codeModuleOption" value={props.value} defaultChecked={props.isChecked} /> */}
//     </div>;
// }

// export default CodeModuleOption;
export default InputRadio;

