import styles from "../Styles/SelectedProjects.module.scss";

const SelectedProjects = () => {
  return (
    <header className={styles.SelectedProjects}>
      <div className={styles.contact_us_container}>
        <p className={styles.projects_text}>Selected Projects</p>
        <h3 className={styles.learn_more_text}>
          Learn more about the great works done
        </h3>
        <p className={styles.companies_text}>
          We have worked with some amazing companies across the world on
          projects such as residential buildings, commercial buildings and so
          on. Be sure to get the the best result in every form
        </p>
      </div>

      <div className={styles.slider_projects}></div>
    </header>
  );
};

export default SelectedProjects;
