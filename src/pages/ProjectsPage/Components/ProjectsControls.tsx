import styles from "../Styles/ProjectsControls.module.scss";
import { Dropdown } from "../../../Components";
import { useState } from "react";

const ProjectsControls = () => {
  const [dropDownChoice, setDropdownChoice] = useState("All Projects");

  const dropDownOptions = [
    "All Projects",
    "Interiors",
    "Exteriors",
    "Animations",
  ];

  return (
    <section className={styles.ProjectsControls}>
      <p className={styles.project_title}>300 Projects</p>

      <div className={styles.dropdown_container}>
        <Dropdown
          defaultSelection={dropDownChoice}
          possibleOptions={dropDownOptions}
          customOnChange={setDropdownChoice}
        />
      </div>
    </section>
  );
};

export default ProjectsControls;
