import { useSelector } from 'react-redux';
import { IoIosMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa"; // Importerar ikoner
import { CiLinkedin } from "react-icons/ci"; // Importerar ikoner
import './Contact.css';

const Contact = () => {
    const theme = useSelector((state) => state.theme.theme); // Hämtar aktuellt tema från Redux store
    
    return (
        // Sätter aktuellt tema till className
        <section className={`contact-wrapper ${theme}`}>
            <section className={`contact-container ${theme}`}>
                <section className={`h2-container ${theme}`}>
                    <h2>Contact me here:</h2>
                </section>
                <section className='img-container'>
                    <a href="mailto:jespermail@gmail.com"><IoIosMail className='icon' color='red' /></a>  
                    <a href="https://www.linkedin.com/in/jesper-eriksson-stenberg-a13022326/" target="_blank"><CiLinkedin className='icon' color='blue'/></a>
                    <a href="https://github.com/Sterje" target="_blank"><FaGithub className='icon' color='white'/></a>
                </section>
            </section>
        </section>
    );
};

export default Contact;
