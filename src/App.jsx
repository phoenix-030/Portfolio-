import { useEffect, useState } from "react";
import { Header, Footer, BackToTop } from "./components/Layout";
import { Hero, About, Skills, Journey } from "./components/Sections";
import Work from "./components/Work";
import Contact from "./components/Contact";
import decorationStyles from "./styles/BackgroundDecoration.module.css";

function getInitialTheme() {
  let theme = "dark";

  try {
    theme = window.localStorage.getItem("portfolio-theme") === "light" ? "light" : "dark";
  } catch (error) {
    console.error("Unable to read the saved theme preference.", error);
  }

  document.documentElement.dataset.theme = theme;
  return theme;
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;

    try {
      window.localStorage.setItem("portfolio-theme", theme);
    } catch (error) {
      console.error("Unable to save the theme preference.", error);
    }
  }, [theme]);

  return (
    <>
      <div className={decorationStyles["pumpkin"]} aria-hidden="true" />
      <Header
        theme={theme}
        onToggleTheme={() => setTheme((currentTheme) => currentTheme === "dark" ? "light" : "dark")}
      />
      <main>
        <Hero />
        <About />
        <Work />
        <Skills />
        <Journey />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
