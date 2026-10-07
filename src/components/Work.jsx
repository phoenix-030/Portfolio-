import styles from "../styles/Work.module.css";
import { useState } from 'react'
import Arrow from './Arrow'
import ProjectModal from './ProjectModal'
import { projects } from '../data/portfolioData'

export default function Work() {
  const [activeProject, setActiveProject] = useState(null)
  return <section className={styles["work"]} id="work"><div className={[styles["shell"], styles["work-header"]].join(" ")}><p className={styles["section-number"]}>02 / SELECTED WORK</p><p>Products designed to make everyday tasks feel lighter.</p></div><div className={[styles["project-list"], styles["shell"]].join(" ")}>{projects.map((project) => <button className={styles["project"]} type="button" key={project.title} onClick={() => setActiveProject(project)}><span className={styles["project-mark"]}>{project.mark}</span><div><p className={styles["project-type"]}>{project.type}</p><h3>{project.title}</h3></div><p className={styles["project-text"]}>{project.text}</p><Arrow className={styles["project-arrow"]} /></button>)}</div>{activeProject && <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />}</section>
}
