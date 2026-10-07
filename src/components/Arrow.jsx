import styles from "../styles/shared.module.css";
export default function Arrow({ className }) {
  return <span className={[styles.arrow, className].filter(Boolean).join(" ")} aria-hidden="true">↗</span>
}
