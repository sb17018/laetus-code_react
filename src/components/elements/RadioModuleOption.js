import { forwardRef } from "react";

import selectors from "./RadioModuleOption.module.css";

const InputRadio = forwardRef((props, ref) => <label htmlFor={props.id}><div className={selectors["radio-wrapper"]}>
    <div><p>{props["data-code-type"]}</p><p>{"(" + props["data-code-measure"] + ")"}</p></div>
    <input type="radio" ref={ref} {...props} />
</div></label>
);

export default InputRadio;

