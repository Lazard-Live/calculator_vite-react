import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.scss'
import Wrapper from "./components/Wrapper/Wrapper.jsx";
import Screen from "./components/Screen/Screen.jsx";
import ButtonBox from "./components/ButtonBox/ButtonBox.jsx";
import Button from "./components/Button/Button.jsx";

const btnValues = [
    ["C", "±", "%", "/"],
    [7, 8, 9, "X"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
];

function App() {

    return (
        <>
            <div>
                <img src={viteLogo} className="logo" alt="Vite logo"/>
                <img src={reactLogo} className="logo react" alt="React logo"/>
            </div>
            <h1>Calculator</h1>
            <Wrapper>
                <Screen value="0" />
                <ButtonBox>
                    {
                        btnValues.flat().map((btn, i) => {
                            return (
                                <Button
                                    key={i}
                                    className={btn === "=" ? "equals" : ""}
                                    value={btn}
                                    onClick={() => {
                                        console.log(`${btn} clicked!`);
                                    }}
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
