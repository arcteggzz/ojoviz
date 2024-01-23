import styles from "./ProjectsPage.module.scss";
import { AnimatedFadeInPage, PublicPageLayout } from "../../utils";
import {
  ProjectsHeader,
  ProjectsControls,
  ProjectsListDisplay,
} from "./Components";

const ProjectsPage = () => {
  return (
    <AnimatedFadeInPage>
      <PublicPageLayout>
        <>
          <div className={styles.ProjectsPage}>
            <ProjectsHeader />
            <ProjectsControls />
            <ProjectsListDisplay />
          </div>
        </>
      </PublicPageLayout>
    </AnimatedFadeInPage>
  );
};

export default ProjectsPage;
