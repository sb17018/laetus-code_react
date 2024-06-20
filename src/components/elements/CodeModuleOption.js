import selectors from "./CodeModuleOption.module.css";

function CodeModuleOption(props) {

    return <div className={selectors["radio-wrapper"]}>
        <label htmlFor={props.id}><div><p>{props.codeType}</p><p>{"(" + props.value + ")"}</p></div></label>
        <input type="radio" id={props.id} name="codeModuleOption" value={props.value} defaultChecked={props.isChecked} />
    </div>;
}

export default CodeModuleOption;
