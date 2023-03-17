import './Button.css'
import { Link } from 'react-router-dom'

const Button = (props) => {
    return <Link 
            to={`./item/${props.nroId}`}
            className='Btn'
           > {props.textLabel}
           </Link>
}

export default Button