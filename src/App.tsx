/// <reference types="vite-plugin-svgr/client" />

import styles from "./App.module.scss"
import WelcomePageLoadingBar from "./components/WelcomePageLoadingBar/WelcomePageLoadingBar.tsx";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection.tsx";
import Blobs from "./components/Blobs/Blobs.tsx";
import Navigation from "./components/Navigation/Navigation.tsx";

function App() {
  return (
    <>
      <main className={styles.main}>
          <Navigation />
          <ProjectsSection />
          <WelcomePageLoadingBar />
          <Blobs />
      </main>
    </>
  )
}

export default App
