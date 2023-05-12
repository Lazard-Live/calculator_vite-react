import Button from "../Button/Button.jsx";
import './Form.scss'

function Form() {
    return (
        <div className="form">
            <div className="">
                <input/>
            </div>
            <div>

            </div>
            <div>
                <div>
                    <Button text="1"></Button>
                    <Button text="2"></Button>
                    <Button text="3"></Button>
                    <Button text="+"></Button>
                </div>
                <div>
                    <Button text="4"></Button>
                    <Button text="5"></Button>
                    <Button text="6"></Button>
                    <Button text="-"></Button>
                </div>
                <div>
                    <Button text="7"></Button>
                    <Button text="8"></Button>
                    <Button text="9"></Button>
                    <Button text="*"></Button>
                </div>
                <div>
                    <Button text="0"></Button>
                    <Button text="."></Button>
                    <Button text="/"></Button>
                </div>
                <Button text="="></Button>
            </div>
        </div>
    )
}

export default Form
