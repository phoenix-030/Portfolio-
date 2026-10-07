import styles from "../styles/Sections.module.css";
import responsiveStyles from "../styles/HeroResponsive.module.css";
import Arrow from "./Arrow";
import { orbitSkills, skills } from "../data/portfolioData";
export function Hero() {
  return (
    <section className={[styles["hero"], styles["shell"]].join(" ")} id="home">
      <p className={styles["eyebrow"]}>Available for meaningful work · 2026</p>
      <div className={styles["hero-grid"]}>
        <h1>
          Building calm
          <br />
          digital <em>experiences.</em>
        </h1>
        <div className={[styles["hero-aside"], responsiveStyles["heroAside"]].join(" ")}>
          <p>
            Hi, I’m <span className={styles["name-highlight"]}>Harishkumar V</span> a
            React Native developer creating mobile products that feel natural
            from the first tap.
          </p>
          <a
            href="#work"
            className={[styles["resume-link"], responsiveStyles["cta"]].join(" ")}
          >
            Explore work <Arrow className={styles["action-arrow"]} />
          </a>
          <a
            href="/Harishkumar.V(Resume).pdf"
            className={[styles["resume-link"], responsiveStyles["cta"]].join(" ")}
            download
          >
            Download CV <Arrow className={styles["action-arrow"]} />
          </a>
        </div>
      </div>
      <div className={styles["scroll-note"]}>
        <span></span>Scroll to discover
      </div>
    </section>
  );
}
export function About() {
  return (
    <section className={[styles["about"], styles["shell"]].join(" ")} id="about">
      <p className={styles["section-number"]}>01 / ABOUT</p>
      <div className={styles["about-copy"]}>
        <h2>
          Useful software,
          <br />
          without the <em>noise.</em>
        </h2>
        <div>
          <p>
            I’m Harishkumar V, a React Native Developer who enjoys turning
            real-world needs into clear, dependable mobile experiences. I care
            about the small details that make an app feel effortless: thoughtful
            flows, responsive interfaces, and code that stays maintainable.
          </p>
          {/* <p>
            With a frontend foundation and full-stack training, I bring both
            visual care and practical engineering to every build — from a
            weather screen to an entire ERP workflow.
          </p> */}
        </div>
      </div>
    </section>
  );
}
export function Skills() {
  return (
    <section className={[styles["skills"], styles["shell"]].join(" ")} id="skills">
      <p className={styles["section-number"]}>03 / TOOLKIT</p>
      <div className={styles["skills-intro"]}>
        <h2>
          Technology in
          <br />
          <em>service of people.</em>
        </h2>
        <p>
          A frontend-led toolkit for building robust, connected experiences
          across mobile and web.
        </p>
      </div>
      <div className={styles["tech-orbit"]} aria-label="Animated technology orbit">
        <div className={[styles["orbit"], styles["orbit-one"]].join(" ")}></div>
        <div className={[styles["orbit"], styles["orbit-two"]].join(" ")}></div>
        <div className={styles["orbit-center"]}>
          HK<span>Core stack</span>
        </div>
        {orbitSkills.map(([id, label]) => (
          <span className={[styles.satellite, styles[`satellite-${id}`]].join(" ")} key={id}>
            <span className={styles["tech-chip"]}>{label}</span>
          </span>
        ))}
      </div>
      <div className={styles["tool-grid"]}>
        {skills.map((skill, index) => (
          <span key={skill}>
            <b>{String(index + 1).padStart(2, "0")}</b>
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
export function Journey() {
  const jobs = [
    [
      "Now",
      "React Native Application Developer",
      "Atomedge Pvt. Ltd.",
      "Developing mobile applications that are useful, refined, and ready for real users.",
    ],
    [
      "Earlier",
      "Frontend Developer Intern",
      "Atomedge Pvt. Ltd.",
      "Strengthened my frontend craft through hands-on product work and collaborative development.",
    ],
    [
      "Foundation",
      "Full-Stack Development Training",
      "QSpiders",
      "Completed immersive training across frontend and full-stack development fundamentals.",
    ],
  ];
  return (
    <section className={[styles["journey"], styles["shell"]].join(" ")} id="journey">
      <p className={styles["section-number"]}>04 / JOURNEY</p>
      <div className={styles["timeline"]}>
        {jobs.map(([when, role, company, text]) => (
          <article key={role}>
            <p>{when}</p>
            <div>
              <h3>{role}</h3>
              <span>{company}</span>
              <p>{text}</p>
            </div>
          </article>
        ))}
      </div>
      <div className={styles["education"]}>
        <p className={styles["section-number"]}>EDUCATION</p>
        <p>
          <b>BCA</b> — MRK College of Arts & Science
        </p>
        <p>
          I’m currently pursuing my <b>MCA</b> through distance education.
        </p>
      </div>
    </section>
  );
}
