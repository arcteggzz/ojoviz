import styles from "../Styles/Display.module.scss";
import { projectsList } from "../../../utils";
import { SingleProjectDisplay } from "../../../Components";
import useApp from "../../../hooks/useApp";
import { useEffect, useState } from "react";
import { singleProjectType } from "../../../types";

const Display = () => {
  const { dropDownChoice } = useApp();

  const [chosenProjects, setChosenProjects] =
    useState<singleProjectType[]>(projectsList);

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
    <section className={styles.Display}>
      <div className={styles.main_container}>
        {chosenProjects.map((project) => {
          return (
            <div className={styles.project_single_container}>
              <SingleProjectDisplay project={project} key={project.id} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Display;
