import { useState, useEffect, useContext } from "react";
import BarGenerationCtx from "../../js/barGeneration-context";

import selectors from "./BarsPrintButton.module.css";

function BarsPrintButton(porps) {
    const barsCombCtx = useContext(BarGenerationCtx);

    const barsCombination = barsCombCtx.eachBarParams;

    const barsValue = barsCombCtx.barsValue;
    let barCombinationObj = { barsProperties: barsCombination }

    // let clickFunction = () => { };
    // if (barsValue > 2 && barsValue <= 131070) {
    //     let barCombinationObj = {
    //         barsProperties: barsCombination,
    //     }
    //     clickFunction = (ev) => {
    //         ev.preventDefault();
    //         console.log(JSON.stringify(barCombinationObj));
    //         fetch("https://laetus-code-default-rtdb.europe-west1.firebasedatabase.app/",
    //             {
    //                 method: "POST",
    //                 body: JSON.stringify(barCombinationObj),
    //                 headers: {
    //                     "Content-Type": "application/json",
    //                 }
    //             }

    //         );
    //     }
    // }

    const [isLoading, setIsLoading] = useState(true);
    const [valueReturned, setValueReturned] = useState("");

    function clickFunction(ev) {
        ev.preventDefault();


        // useEffect(() => {
        console.log(barsValue);
        // fetch("http://localhost:8080/code",
        //     {
        //         method: "GET", headers: { "Content-Type": "text/plain" }, mode: "no-cors",
        //     }).then(res => { setIsLoading(false); setValueReturned(res) });

        fetch("http://localhost:8080/code",
            {
                mode: "no-cors",
                method: "POST",
                body: "STANDARD," + barsValue,
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
    }
    // }, []);

    return <form onSubmit={clickFunction}>
        <button className={selectors["printing-button"] + " " + selectors[porps.class]} id="printingButton">
            <p>PRINT</p>
        </button>
    </form>;
}

export default BarsPrintButton;