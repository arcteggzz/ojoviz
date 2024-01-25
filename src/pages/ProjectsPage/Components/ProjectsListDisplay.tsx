import styles from "../Styles/ProjectsListDisplay.module.scss";
import { projectsList, splitNumber } from "../../../utils";
import { SingleProjectDisplay } from "../../../Components";
import useApp from "../../../hooks/useApp";
import { useEffect, useState } from "react";
import { singleProjectType } from "../../../types";

const ProjectsListDisplay = () => {
  const { dropDownChoice } = useApp();

  const [chosenProjects, setChosenProjects] =
    useState<singleProjectType[]>(projectsList);

  const splits = splitNumber(chosenProjects.length);

  useEffect(() => {
    if (dropDownChoice === "All Projects") {
      setChosenProjects(projectsList);
    } else {
      const filteredProjects = projectsList.filter(
        (project) => project.category === dropDownChoice.toLocaleLowerCase()
      );

      setChosenProjects(filteredProjects);
    }
  }, [dropDownChoice]);

  return (
    <section className={styles.ProjectsListDisplay}>
      <div className={styles.grid_containers}>
        {chosenProjects.slice(0, splits[0]).map((project) => {
          return <SingleProjectDisplay project={project} key={project.id} />;
        })}
      </div>

      <div className={styles.grid_containers}>
        {chosenProjects
          .slice(splits[0], splits[0] + splits[1])
          .map((project) => {
            return <SingleProjectDisplay project={project} key={project.id} />;
          })}
      </div>

      <div className={styles.grid_containers}>
        {chosenProjects
          .slice(splits[0] + splits[1], projectsList.length)
          .map((project) => {
            return <SingleProjectDisplay project={project} key={project.id} />;
          })}
      </div>
    </section>
  );
};

export default ProjectsListDisplay;
