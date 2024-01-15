import styles from "./ProjectsPage.module.scss";
import { AnimatedFadeInPage, PublicPageLayout } from "../../utils";
import { ProjectsHeader, ProjectsControls } from "./Components";

const ProjectsPage = () => {
  return (
    <AnimatedFadeInPage>
      <PublicPageLayout>
        <main className={styles.ProjectsPage}>
          <ProjectsHeader />
          <ProjectsControls />
        </main>
      </PublicPageLayout>
    </AnimatedFadeInPage>
  );
};

export default ProjectsPage;
