import styles from "./Project.module.scss"

interface ProjectProps{
 data: Project;
}

const projectTypes: ProjectTypes = {
 commercial: "commercial project",
 nonCommercial: "non-commercial project"
}

const Project = ({data}: ProjectProps) => {
 return (
     <div className={styles.project}>
      <h2 className={styles.name}>{data.displayedName}</h2>
      <p className={styles.type}>{projectTypes[data.type]}</p>
      <p className={styles.description}>{data.description}</p>
      {data.demos?.map((demo: ProjectDemo) => (
          <div className={styles.demo}>
            <span className={styles.demoName}>{demo.name}</span>
            {demo.github && (
                 <span> / <a className={styles.demoGithub} href={demo.github} target={"_blank"}>GitHub</a></span>
           )}
           <p className={styles.demoUrl}>
            <a href={demo.url} target={"_blank"}>{demo.url}</a>
           </p>
          </div>
      ))}
     </div>
 )
}

export default Project