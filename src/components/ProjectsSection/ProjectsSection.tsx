import styles from "./ProjectsSection.module.scss"
import projectsData from "../../data/projects/projects.json"
import Project from "../Project/Project.tsx";
const ProjectsSection = () => (
    <div className={styles.container}>
        <div className={styles.box}>
            <header>
                <h3>MEANWHILE...</h3>
                <p>CHECK MY OTHER PROJECTS</p>
            </header>
            <div className={styles.projectsContainer}>
                {projectsData.projects.map((project: Project) => (
                    <Project data={project}/>
                ))}
            </div>
        </div>
    </div>
)
export default ProjectsSection