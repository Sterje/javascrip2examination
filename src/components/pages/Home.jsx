import { useSelector } from 'react-redux'; // Importerar useSelector som används för redux
import './Home.css'

const Home = () => {
    const theme = useSelector((state) => state.theme.theme); // useSelector som används för att hämta aktuellt tema ur store
   
    return (
        // theme läggs till className för aktuellt tema
        <section className={`home-container ${theme}`}>
            <h1 className='h1-home'>Jesper Eriksson Stenberg</h1>
            <p className='p-home'>Front End Student</p>
        </section>
    );
};

export default Home;
