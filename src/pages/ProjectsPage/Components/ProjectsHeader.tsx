import styles from "../Styles/ProjectsHeader.module.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ProjectsHeader = () => {
  return (
    <section className={styles.ProjectsHeader}>
      <div className={styles.background_image}>
        <LazyLoadImage
          alt={""}
          height={"auto"}
          width={"100%"}
          src={`https://res.cloudinary.com/dhf9w2zpm/image/upload/v1707095788/Ojoviz%20Assets/projects_header_bg_sbj63a.png`}
          effect="blur"
          placeholderSrc={`https://res.cloudinary.com/dhf9w2zpm/image/upload/c_thumb,w_100,g_face/v1707095788/Ojoviz%20Assets/projects_header_bg_sbj63a.png`}
        />
      </div>

      <h1 className={styles.project_header}>All Projects</h1>
    </section>
  );
};

export default ProjectsHeader;
