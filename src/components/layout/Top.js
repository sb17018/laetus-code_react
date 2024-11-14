import selectors from "./Top.module.css";

function Top() {
    return <header id={selectors.headerField}>
        <h3>Welcome to <i>PHARMA CODE</i> generator &copy;&nbsp;Piotr&nbsp;Bar</h3>
    </header>;
}

export default Top;