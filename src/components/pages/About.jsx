import { useSelector } from 'react-redux'; // Importerar useSelector som används till Redux
import './About.css';

function About({ user }) { // Tar emot user som props
    const theme = useSelector((state) => state.theme.theme); // Hämtar det aktuella temat från store

    return (
        <section className={`about-wrapper ${theme}`}>
            <section className={`about-container ${theme}`}>
                {/* Använder user som props för att visa info */}
                <h2>{user.name}</h2>  
                <p>{user.description}</p>
            </section>
        </section>
    );
}

export default About;
