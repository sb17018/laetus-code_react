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
    setPrompt: () => { },
    prompt: false,
});

let barsCalculatedValue = 0;

export function BarGenerationCtxProvider(props) {
    const [barsCombination, setBarsCombination] = useState([]);
    const [upperPrompt, setUpperPrompt] = useState(false);

    const MAX_VALUE = 131070;

    function setPromptHandler(codeValue){
        if(codeValue > MAX_VALUE){
            setUpperPrompt(true);
        }
        else{
            setUpperPrompt(false);
        }
    }

    // to add a bar
    function enterNextBarHandler(barType) {
        if (barsCombination.length < 16) {
            let newBar = setBarParams(barType);
            barsCombination.push(newBar);
        }
        let generatedBarsCombination = [...barsCombination];
        setBarsCombination(() => { return generatedBarsCombination });
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
            let lastBar = barsCombination.pop();
            if (lastBar.thick) {
                --barsCalculatedValue;
            }
            barsCalculatedValue = (--barsCalculatedValue) / 2;
            let generatedBarsCombination = [...barsCombination];
            setBarsCombination(() => generatedBarsCombination);
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
        if (codeValue <= MAX_VALUE) {
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
            }
            barsCalculatedValue = codeValue;
        }
        generatedBarsCombination = [...barsCombination];
        setBarsCombination(() => { return generatedBarsCombination });
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
        setPrompt: setPromptHandler,
        prompt: upperPrompt,
    };
    return <BarGenerationCtx.Provider value={context}>{props.children}</BarGenerationCtx.Provider>;
};

export default BarGenerationCtx;