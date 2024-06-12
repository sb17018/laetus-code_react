import selectors from "./Top.module.css";

function Top() {
    return <header id={selectors.headerField}>
        <h3>Welcome to <i>PHARMA CODE</i> generator &copy; Piotr Bar</h3>
    </header>;
}

export default Top;