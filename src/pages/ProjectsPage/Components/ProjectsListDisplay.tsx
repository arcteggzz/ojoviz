import styles from "../Styles/ProjectsListDisplay.module.scss";

const ProjectsListDisplay = () => {
  return (
    <section className={styles.ProjectsListDisplay}>
      <div className={styles.grid_containers}></div>
      <div className={styles.grid_containers}></div>
      <div className={styles.grid_containers}></div>
    </section>
  );
};

export default ProjectsListDisplay;
