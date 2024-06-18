import { createContext, useState } from "react";

const BarGenerationCtx = createContext({
    codeFieldWidth: 300,
    codeFieldHeight: 150,

    // distance between bars; it's equal to thin bar width and half of thick bar width
    modul: 10,

    eachBarParams: [],
    barsValue: 0,
    isValueTooHigh: false,
    enterNextBar: () => { },
    removeLastBar: () => { },
    removeAllBars: () => { },
    generateCode: () => { },
    howManyTimesTooHigh: 0,
    setPrompt: () => { },
    upperPrompt: "",
});

let barsCalculatedValue = 0;
let isBarsValueTooHigh = false;

// let howManyTimesEnteredTooHighValueHandler = 0;

export function BarGenerationCtxProvider(props) {
    const [barsCombination, setBarsCombination] = useState([]);
    const [tooHighPrompt, setTooHighPrompt] = useState("");
    const [howManyTimesTooHighValue, setHowManyTimesTooHighValue] = useState(0);


    const MAX_VALUE = 131070;

    function setPrompt(howManyTooHigh) {
        if (howManyTooHigh > 0) {
            setTooHighPrompt("too-great-number");
        }
        else {
            setTooHighPrompt("");
        }
    }

    function setNumberOfTooHigh(codeValue) {
        if (codeValue > MAX_VALUE) {
            setHowManyTimesTooHighValue(currentValue => ++currentValue);
        }
        else {
            setHowManyTimesTooHighValue(() => 0);
        }
    }

    // to add a bar
    function enterNextBarHandler(barType) {
        isBarsValueTooHigh = false;
        let newBar = setBarParams(barType);
        if (barsCombination.length < 16) {
            barsCombination.push(newBar);
        }
        else {
            isBarsValueTooHigh = true;
            let tempBarsCalculatedValue = context.barsValue * 2 + 1;
            setNumberOfTooHigh(tempBarsCalculatedValue);
            setTooHighPrompt("too-great-number");
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
        isBarsValueTooHigh = false;

        if (barsCombination.length > 0) {
            let lastBar = barsCombination.pop();
            if (lastBar.thick) {
                --barsCalculatedValue;
            }
            barsCalculatedValue = (--barsCalculatedValue) / 2;
            let generatedBarsCombination = [...barsCombination];
            setNumberOfTooHigh(barsCalculatedValue);
            setTooHighPrompt("");
            setBarsCombination(() => generatedBarsCombination);
        }
    };

    // to remove all bars
    function removeAllBarsHandler() {
        if (barsCombination.length > 0) {
            isBarsValueTooHigh = false;
            barsCalculatedValue = 0;
            setNumberOfTooHigh(barsCalculatedValue);
            setTooHighPrompt("");
            setBarsCombination(() => []);
        }
    };

    function generateCodeHandler(codeValue) {

        let generatedBarsCombination = [];

        isBarsValueTooHigh = false;
        console.log(codeValue)
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
        else {
            isBarsValueTooHigh = true;
            setNumberOfTooHigh(barsCalculatedValue);
            setTooHighPrompt("too-great-number");
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
        isValueTooHigh: isBarsValueTooHigh,
        enterNextBar: enterNextBarHandler,
        removeLastBar: removeLastBarHandler,
        removeAllBars: removeAllBarsHandler,
        generateCode: generateCodeHandler,
        howManyTimesTooHigh: howManyTimesTooHighValue,
        setPrompt: setPrompt,
        upperPrompt: tooHighPrompt,
    };
    return <BarGenerationCtx.Provider value={context}>{props.children}</BarGenerationCtx.Provider>;
};

export default BarGenerationCtx;