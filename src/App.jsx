import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.scss'
import Wrapper from "./components/Wrapper/Wrapper.jsx";
import Screen from "./components/Screen/Screen.jsx";
import ButtonBox from "./components/ButtonBox/ButtonBox.jsx";
import Button from "./components/Button/Button.jsx";
import {useState} from "react";

const btnValues = [
    ["C", "±", "%", "/"],
    [7, 8, 9, "X"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
];

const toLocaleString = (num) =>
    String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1");

const removeSpaces = (num) => num.toString().replace(/\s/g, "");

function App() {

    let [calc, setCalc] = useState({
        sign: "",
        num: 0,
        res: 0,
    })

    // Функция нажатия цифровых кнопок
    const numClickHandler = (e) => {
        e.preventDefault();
        const value = e.target.innerHTML;

        if (removeSpaces(calc.num).length < 16) {
            setCalc({
                ...calc,
                num:
                    calc.num === 0 && value === "0" ? "0" : calc.num % 1 === 0
                        ? toLocaleString(Number(removeSpaces(calc.num + value)))
                        : toLocaleString(calc.num + value),
                res:
                    !calc.sign ? 0 : calc.res,
            })
        }
    }

    //  Функция перехода на десятичное число
    const commaClickHandler = (e) => {
        e.preventDefault();
        const value = e.target.innerHTML;

        setCalc({
            ...calc,
            num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
        })
    }

    //Функция действий "+" , "—" , "*" или "/"
    const signClickHandler = (e) => {
        e.preventDefault();
        const value = e.target.innerHTML;

        setCalc({
            ...calc,
            sign: value,
            res: !calc.res && calc.num ? calc.num : calc.res,
            num: 0,
        })
    }

    //Функция вывода результата ('=')
    const equalsClickHandler = () => {
        if (calc.sign && calc.num) {
            const math = (a, b, sign) =>
                sign === "+"
                    ? a + b
                    : sign === "-"
                        ? a - b
                        : sign === "X"
                            ? a * b
                            : a / b;

            setCalc({
                ...calc,
                res:
                    calc.num === "0" && calc.sign === "/"
                        ? "Can't divide with 0"
                        : toLocaleString(
                            math(
                                Number(removeSpaces(calc.res)),
                                Number(removeSpaces(calc.num)),
                                calc.sign
                            )),
                sign: "",
                num: 0,
            });
        }
    };

    // Функция инвертирования
    const invertClickHandler = () => {
        setCalc({
            ...calc,
            num: calc.num ? toLocaleString(removeSpaces(calc.num) * -1) : 0,
            res: calc.res ? toLocaleString(removeSpaces(calc.res) * -1) : 0,
            sign: "",
        });
    };

    // Функция процентов ('%')
    const percentClickHandler = () => {
        let proc = calc.num / 100 * calc.res

        setCalc({
            ...calc,
            num: proc ,
        })

        console.log(calc, proc)
    };

// Функция сброса
    const resetClickHandler = () => {
        setCalc({
            ...calc,
            sign: "",
            num: 0,
            res: 0,
        });
    };

    return (
        <>
            <div>
                <img src={viteLogo} className="logo" alt="Vite logo"/>
                <img src={reactLogo} className="logo react" alt="React logo"/>
            </div>
            <h1>Calculator</h1>
            <Wrapper>
                <Screen value={calc.num ? calc.num : calc.res}/>
                <ButtonBox>
                    {
                        btnValues.flat().map((btn, i) => {
                            return (
                                <Button
                                    key={i}
                                    className={btn === "=" ? "equals" : ""}
                                    value={btn}
                                    onClick={
                                        btn === "C"
                                            ? resetClickHandler
                                            : btn === "±"
                                                ? invertClickHandler
                                                : btn === "%"
                                                    ? percentClickHandler
                                                    : btn === "="
                                                        ? equalsClickHandler
                                                        : btn === "/" || btn === "X" || btn === "-" || btn === "+" ?
                                                            signClickHandler
                                                            : btn === "."
                                                                ? commaClickHandler
                                                                : numClickHandler
                                    }
                                />
                            );
                        })
                    }
                </ButtonBox>
            </Wrapper>
        </>
    )
}

export default App
