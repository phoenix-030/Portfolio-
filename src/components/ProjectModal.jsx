import styles from "../styles/ProjectModal.module.css";
import { useEffect } from 'react'
import Arrow from './Arrow'

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const closeOnEscape = (event) => event.key === 'Escape' && onClose()
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [onClose])

  return <div className={styles["modal-backdrop"]} role="presentation" onMouseDown={onClose}>
    <section className={styles["project-modal"]} role="dialog" aria-modal="true" aria-labelledby="project-title" onMouseDown={(event) => event.stopPropagation()}>
      <button className={styles["modal-close"]} onClick={onClose} aria-label="Close project details">×</button>
      <p className={styles["section-number"]}>{project.mark} / PROJECT DETAILS</p>
      <p className={styles["project-type"]}>{project.type}</p>
      <h2 id="project-title">{project.title}</h2>
      <p className={styles["modal-description"]}>{project.details}</p>
      <div className={styles["modal-stack"]}><span>Stack</span>{project.technologies.map((technology) => <b key={technology}>{technology}</b>)}</div>
      <a className={styles["visit-project"]} href={project.visitUrl} target="_blank" rel="noreferrer">Visit project <Arrow /></a>
    </section>
  </div>
}
