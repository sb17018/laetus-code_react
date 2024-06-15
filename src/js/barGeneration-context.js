import { createContext, useState } from "react";

const BarGenerationCtx = createContext({
    codeFieldWidth: 300,
    codeFieldHeight: 150,

    // distance between bars; it's equal to thin bar width and half of thick bar width
    modul: 10,

    eachBarParams: [],
    barsValue: 0,
    enterNextBar: () => { },
    removeLastBar: () => { },
    removeAllBars: () => { },
});

let barsCalculatedValue = 0;

export function BarGenerationCtxProvider(props) {
    const [barsCombination, setBarsCombination] = useState([]);
    // const [barsCalculatedValue, setbarsCalculatedValue] = useState(0);

    // to add a bar
    function enterNextBarHandler(barType) {
        if (barsCombination.length < 16) {

            let widthValue = context.modul;
            let barPosition = 0;
            let isThick = false;

            barsCalculatedValue = context.barsValue * 2 + 1;

            if (barType == "thickButton") {
                widthValue *= 2;
                isThick = true;
                barsCalculatedValue++;
            }

            if (barsCombination.length > 0) {
                barPosition =
                    barsCombination[barsCombination.length - 1].value +
                    barsCombination[barsCombination.length - 1].position + context.modul;
            }

            let newBar = { value: widthValue, position: barPosition, thick: isThick };
            setBarsCombination((currentBarsCombination) => { return currentBarsCombination.concat(newBar) });
        }
        console.log(barsCombination);
        console.log(barsCalculatedValue);
    };

    // to remove a last bar
    function removeLastBarHandler() {
        if (barsCombination.length > 0) {
            let currentBarsCombination = [...barsCombination];
            let lastBar = currentBarsCombination.pop();
            if (lastBar.thick) {
                --barsCalculatedValue;
                
            }
            barsCalculatedValue = (--barsCalculatedValue) / 2;
            setBarsCombination(() => currentBarsCombination);
            // setBarsCombination(currentBarsCombination => { return currentBarsCombination.slice(0, -1) });
        }
        console.log(barsCombination);
        // console.log(barsCalculatedValue);
    };

    // to remove all bars
    function removeAllBarsHandler() {
        if (barsCombination.length > 0) {
            barsCalculatedValue = 0;
            setBarsCombination(() => []);
        }
        console.log(barsCombination);
    };

    const context = {
        codeFieldWidth: 300,
        codeFieldHeight: 150,

        // distance between bars; it's equal to thin bar width and half of thick bar width
        modul: 10,
        eachBarParams: barsCombination,
        barsValue: barsCalculatedValue,
        enterNextBar: enterNextBarHandler,
        removeLastBar: removeLastBarHandler,
        removeAllBars: removeAllBarsHandler,
    };
    return <BarGenerationCtx.Provider value={context}>{props.children}</BarGenerationCtx.Provider>;
};

export default BarGenerationCtx;