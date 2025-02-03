import { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from "react-redux";
import './Projects.css'


function Projects() {

    const theme = useSelector((state) => state.theme.theme); 

  const URL = "https://api.github.com/users/sterje/repos";
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error("Något gick fel vid hämtning!")
        }
        //response.json omvandlar svaret till javascript
        const result = await response.json();
        //nu är result JS-objekt
        setData(result);
        console.log(result);
      } catch (error){
        console.error("Fel: ", error.message);
        
      }
    };

    fetchData();
    }, []); //Beroende array som bestämmer när funktionen ska köras

  return (
    <>
    <h2>Mina projekt</h2>
    <table className="repo-table">
  <thead>
    <tr>
      <th>Repository</th>
      <th>Beskrivning</th>
<<<<<<< HEAD
      <th>GH Pages</th>
=======
      <th>Pages</th>
>>>>>>> 4e0fd1805ed9f5d8d62303a932aeec027b9633e0
    </tr>
  </thead>
  <tbody>
  {data.map((repo, index) => (
    <tr key={repo.id} className={`row ${theme} ${index % 2 === 0 ? "even" : "odd"}`}>
      <td>
        <a href={repo.html_url}>{repo.name}</a>
      </td>
      <td>{repo.description}</td>
      <td>
        <a href={`https://sterje.github.io/${repo.name}`}><button className='gh-button'>Visit</button></a>
      </td>
    </tr>
  ))}
</tbody>

</table>

    
  
    </>
  );
}


export default Projects
