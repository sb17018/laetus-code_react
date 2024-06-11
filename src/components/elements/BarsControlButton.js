function BarsControlButton(props) {
    return <div id={props.id} className={props.className}>
        {props.children}
    </div>;
}

export default BarsControlButton;