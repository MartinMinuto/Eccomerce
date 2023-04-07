import './Footer.css'
import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai'

const Footer = () => {

    return(
        <div className='Footer'>
           <a href='https://github.com/MartinMinuto'><AiOutlineGithub className='GitHub'/></a>
           <a href='https://www.linkedin.com/in/martin-minuto/'><AiFillLinkedin className='Linkedin'/></a>
        </div>
    )
}

export default Footer