import styles from "../Styles/SelectedProjects.module.scss";
import { Link } from "react-router-dom";
import right_side_arrow from "../../../assets/images/arrow-up-right.png";
import { routePaths } from "../../../utils";
// import image from "../../HomePage/images/details_desktop.png";
import { generateSelectedProjects } from "../../../utils";

const SelectedProjects = () => {
  const selectedProjects = generateSelectedProjects();

  return (
    <section className={styles.SelectedProjects}>
      <div className={styles.contact_us_container}>
        <p className={styles.projects_text}>Selected Projects</p>
        <h3 className={styles.learn_more_text}>
          Learn more about the great works done
        </h3>
        <p className={styles.companies_text}>
          We have worked with some amazing companies across the world on
          projects such as residential buildings, commercial buildings and so
          on. Be sure to get the the best result in every form.
        </p>
      </div>

      <div className={styles.slider_projects_container}>
        <div className={styles.selected_projs_scroll_container}>
          <div className={styles.intro_div_content}>
            <h3 className={styles.recent_projs_text}>
              Check out recent projects
            </h3>

            <Link to={routePaths.PROJECTS} className={styles.link_container}>
              <p className={styles.link_text_item}>View All Projects</p>
              <img
                src={right_side_arrow}
                alt="hyperlink arrow"
                className={styles.right_side_arrow}
              />
            </Link>

            <Link
              to={`${routePaths.HOME}${routePaths.HASH_ID.contact_us}`}
              className={styles.link_container}
            >
              <p className={styles.link_text_item}>Contact Us</p>
              <img
                src={right_side_arrow}
                alt="hyperlink arrow"
                className={styles.right_side_arrow}
              />
            </Link>
          </div>

          {selectedProjects.map((project) => {
            return (
              <Link
                to={`/projects/${project.id}`}
                className={styles.project_link_item}
                key={project.id}
              >
                <img
                  src={
                    project.type === "image"
                      ? project.imageUrl?.small
                      : project.videoUrl?.placeholder
                  }
                  alt=""
                  className={styles.proj_image}
                />
                <h5 className={styles.project_tag_header}>{project.name}</h5>
                <h6 className={styles.project_tag_body}>{project.client}</h6>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SelectedProjects;
