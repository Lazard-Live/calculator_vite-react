import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Form from "./components/Form/Form.jsx";
import './App.scss'

function App() {

    return (
        <>
            <div>
                <img src={viteLogo} className="logo" alt="Vite logo"/>
                <img src={reactLogo} className="logo react" alt="React logo"/>
            </div>
            <h1>Calculator</h1>
            <Form/>
        </>
    )
}

export default App
