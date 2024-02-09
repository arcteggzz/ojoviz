import styles from "./ProjectsPage.module.scss";
import { AnimatedFadeInPage, PublicPageLayout } from "../../utils";
import { useState, useEffect } from "react";
import {
  ProjectsHeader,
  ProjectsControls,
  ProjectsListDisplay,
} from "./Components";
import scroll_to_top from "./images/scroll_to_top.png";

const ProjectsPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 1000) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AnimatedFadeInPage>
      <PublicPageLayout>
        <>
          <div className={styles.ProjectsPage}>
            <ProjectsHeader />
            <ProjectsControls />
            <ProjectsListDisplay />

            <button
              className={styles.to_top_btn}
              onClick={scrollToTop}
              style={{ display: isVisible ? "block" : "none" }}
            >
              <img
                src={scroll_to_top}
                alt=""
                className={styles.scroll_to_top_btn}
              />
            </button>
          </div>
        </>
      </PublicPageLayout>
    </AnimatedFadeInPage>
  );
};

export default ProjectsPage;
