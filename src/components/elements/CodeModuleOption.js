function CodeModuleOption(props) {

    return <>
    <label htmlFor={props.id}>{props.codeType}</label>
        <input type="radio" id={props.id} name="codeModuleOption" value={props.value} defaultChecked={props.isChecked}/>
    </>;
}

export default CodeModuleOption;
