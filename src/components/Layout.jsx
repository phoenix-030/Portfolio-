import styles from "../styles/Layout.module.css";
import { useEffect, useState } from "react";
export function Header({ theme, onToggleTheme }) {
  return (
    <header className={[styles["nav"], styles["shell"]].join(" ")}>
      <a className={styles["brand"]} href="#home">
       [HK<span>]</span>
      </a>
      <nav aria-label="Primary navigation">
        <a href="#about">About</a>
        <a href="#work">Work</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
      <button
        className={styles["theme-toggle"]}
        type="button"
        onClick={onToggleTheme}
        role="switch"
        aria-label="Light mode"
        aria-checked={theme === "light"}
      >
        <span className={styles["theme-switch"]} aria-hidden="true">
          <span className={styles["theme-switch-thumb"]}>
            <svg viewBox="0 0 20 20" focusable="false">
              {theme === "light" ? (
                <path d="M17.2 12.8A7.3 7.3 0 0 1 7.2 2.8 7.5 7.5 0 1 0 17.2 12.8Z" />
              ) : (
                <>
                  <circle cx="10" cy="10" r="3.5" />
                  <path d="M10 1.5v2M10 16.5v2M18.5 10h-2M3.5 10h-2m14.5-6-1.4 1.4M5.4 14.6 4 16m12 0-1.4-1.4M5.4 5.4 4 4" />
                </>
              )}
            </svg>
          </span>
        </span>
      </button>
    </header>
  );
}
export function Footer() {
  return (
    <footer className={[styles["shell"], styles["footer"]].join(" ")}>
      <div className={styles["footer-content"]}>
        <span>© 2026 Harishkumar V</span>
        <span>Designed with intention.</span>
      </div>
    </footer>
  );
}

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setIsVisible(window.scrollY > 400);
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });

    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <button
      className={styles["back-to-top"]}
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
        <path d="M12 19V5m-7 7 7-7 7 7" />
      </svg>
    </button>
  );
}
