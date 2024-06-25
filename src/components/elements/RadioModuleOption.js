import { forwardRef } from "react";

import selectors from "./RadioModuleOption.module.css";

const InputRadio = forwardRef((props, ref) => <div className={selectors["radio-wrapper"]}>
    <label htmlFor={props.id}><div><p>{props["data-code-type"]}</p><p>{"(" + props["data-code-measure"] + ")"}</p></div></label>
    <input type="radio" ref={ref} {...props} />
</div>
);

export default InputRadio;

