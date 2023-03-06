import './Button.css'

const Button = (props) => {
    return <button 
            onClick={props.clickFuncion}
            className='Btn'
           > {props.textLabel}
           </button>
}

export default Button