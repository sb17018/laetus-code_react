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
    generateCode: () => { },
});

let barsCalculatedValue = 0;

export function BarGenerationCtxProvider(props) {
    const [barsCombination, setBarsCombination] = useState([]);

    // to add a bar
    function enterNextBarHandler(barType) {
        if (barsCombination.length < 16) {
            let newBar = setBarParams(barType);
            setBarsCombination((currentBarsCombination) => { return currentBarsCombination.concat(newBar) });
        }
    };

    function setBarParams(barType) {
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
        return { value: widthValue, position: barPosition, thick: isThick };
    }

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
        }
    };

    // to remove all bars
    function removeAllBarsHandler() {
        if (barsCombination.length > 0) {
            barsCalculatedValue = 0;
            setBarsCombination(() => []);
        }
    };

    function generateCodeHandler(codeValue) {

        let generatedBarsCombination = [];
        if (codeValue > 131070) {
            generatedBarsCombination = [...barsCombination];
        }
        else {
            barsCombination.splice(0, barsCombination.length);

            let numberOfBars = parseInt(Math.log2(parseInt(codeValue) + 1));
            let summedBarsValue = Math.pow(2, numberOfBars) - 1;
            if (codeValue == "") {
                codeValue = 0;
                numberOfBars = 0;
                summedBarsValue = 0;
            }

            let valueAfterThickening = 0;
            for (let i = 0; i < numberOfBars; i++) {
                let barType = "";
                valueAfterThickening = summedBarsValue + Math.pow(2, numberOfBars - 1 - i);

                if (valueAfterThickening <= codeValue) {
                    barType = "thickButton";
                    summedBarsValue = valueAfterThickening;
                }
                let newBar = setBarParams(barType);
                barsCombination.push(newBar);
                generatedBarsCombination = [...barsCombination];
            }
        }
        barsCalculatedValue = codeValue;
        setBarsCombination((currentBarsCombination) => { return generatedBarsCombination });
    }

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
        generateCode: generateCodeHandler,
    };
    return <BarGenerationCtx.Provider value={context}>{props.children}</BarGenerationCtx.Provider>;
};

export default BarGenerationCtx;