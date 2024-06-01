import styles from "./App.module.scss"
import WelcomePageLoadingBar from "./components/WelcomePageLoadingBar/WelcomePageLoadingBar.tsx";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection.tsx";
import Blobs from "./components/Blobs/Blobs.tsx";

function App() {
  return (
    <>
      <main className={styles.main}>
          <ProjectsSection />
          <WelcomePageLoadingBar />
          <Blobs />
      </main>
    </>
  )
}

export default App
