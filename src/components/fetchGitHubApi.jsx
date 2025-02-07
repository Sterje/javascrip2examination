import { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from "react-redux";

export function FetchGitHubApi() {

    const theme = useSelector((state) => state.theme.theme); // Hämtar aktuellt tema från Redux store

    const URL = "https://api.github.com/users/sterje/repos"; // API Url
    const [data, setData] = useState([]); // För att lagra datan

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(URL); //Hämtar datan
                if (!response.ok) {
                    throw new Error("Något gick fel vid hämtning!") //Felhantering
                }
                //response.json omvandlar svaret till javascript
                const result = await response.json();
                //nu är result JS-objekt
                setData(result); // Sparar datan genom useState
                console.log(result);
            } catch (error){
                console.error("Fel: ", error.message);
            }
        };
    
        fetchData();
    }, []); //Beroende array som är tom, betyder att den bara körs en gång vid montering

    return (
        <>
            {/* theme läggs till className för beroende på dark eller light */}
            <section className={`repo-container ${theme}`}> 
                <h2>GitHub repos</h2>
                <table className="repo-table">
                    <thead>
                        <tr>
                            <th>Repository</th>
                            <th>Description</th>
                            <th>Pages</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((repo, index) => ( //Mappar igenom data från API
                            // Tema för varannan rad. Ojämn och jämn.
                            <tr key={repo.id} className={`row ${theme} ${index % 2 === 0 ? "even" : "odd"}`}> 
                                <td>
                                    {/* URL till Repo hos GitHub */}
                                    <a href={repo.html_url}>{repo.name}</a> 
                                </td>
                                {/* Beskrivning av repo hos GitHub */}
                                <td>{repo.description}</td>
                                <td>
                                    {/* Länk till GitHub pages för aktuellt repo */}
                                    <a href={`https://sterje.github.io/${repo.name}`} target='_blank'><button className='gh-button'>Visit</button></a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </>
    );
}

export default FetchGitHubApi