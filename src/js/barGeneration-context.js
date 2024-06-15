import { createContext, useState } from "react";

const BarGenerationCtx = createContext({
    codeFieldWidth: 300,
    codeFieldHeight: 150,

    // distance between bars; it's equal to thin bar width and half of thick bar width
    modul: 10,

    eachBarParams: [],
    enterNextBar: () => { },
    removeLastBar: () => { },
    removeAllBars: () => { },
});

export function BarGenerationCtxProvider(props) {
    const [barsCombination, setBarsCombination] = useState([]);

    // to add a bar
    function enterNextBarHandler(barType) {
        if (barsCombination.length < 16) {

            let widthValue = context.modul;
            let barPosition = 0;

            if (barType == "thickButton") {
                widthValue *= 2;
            }

            if (barsCombination.length > 0) {
                barPosition =
                    barsCombination[barsCombination.length - 1].value +
                    barsCombination[barsCombination.length - 1].position + context.modul;
            }

            let newBar = { value: widthValue, position: barPosition };
            setBarsCombination(currentBarsCombination => { return currentBarsCombination.concat(newBar) });
            }
        console.log(barsCombination);
    };

    // to remove a last bar
    function removeLastBarHandler() {
        if (barsCombination.length > 0) {
            setBarsCombination(currentBarsCombination => { return currentBarsCombination.slice(0, -1) });
            }
        console.log(barsCombination);
    };

    // to remove all bars
    function removeAllBarsHandler() {
        if (barsCombination.length > 0) {
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
        enterNextBar: enterNextBarHandler,
        removeLastBar: removeLastBarHandler,
        removeAllBars: removeAllBarsHandler,
    };
    return <BarGenerationCtx.Provider value={context}>{props.children}</BarGenerationCtx.Provider>;
};

export default BarGenerationCtx;