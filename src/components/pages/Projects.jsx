
import { FetchGitHubApi } from '../fetchGitHubApi';
import { useSelector } from "react-redux"; // Importerar useSelector som används för redux

import './Projects.css'

function Projects() {
  const theme = useSelector((state) => state.theme.theme); // useSelector som används för att hämta aktuellt tema i store

 
  return (
    <FetchGitHubApi /> // Hämtar och renderar komponenten FetchGitHubApi
  )

}

export default Projects
