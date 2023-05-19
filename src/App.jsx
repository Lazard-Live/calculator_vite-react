import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.scss'
import Wrapper from "./components/Wrapper/Wrapper.jsx";

function App() {

    return (
        <>
            <div>
                <img src={viteLogo} className="logo" alt="Vite logo"/>
                <img src={reactLogo} className="logo react" alt="React logo"/>
            </div>
            <h1>Calculator</h1>
            <Wrapper></Wrapper>
        </>
    )
}

export default App
