import './Button.scss'

function Button(textButton) {
  return (
       <button className="button">{textButton.text}</button>
  )
}

export default Button
