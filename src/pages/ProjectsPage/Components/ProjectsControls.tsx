import styles from "../Styles/ProjectsControls.module.scss";
import { Dropdown } from "../../../Components";
import useApp from "../../../hooks/useApp";

const ProjectsControls = () => {
  const { dropDownChoice, setDropDownChoice } = useApp();

  const dropDownOptions = [
    "All Projects",
    "Interiors",
    "Exteriors",
    "Animations",
  ];

  return (
    <section className={styles.ProjectsControls}>
      <div className={styles.dropdown_container}>
        <Dropdown
          defaultSelection={dropDownChoice}
          possibleOptions={dropDownOptions}
          customOnChange={setDropDownChoice}
        />
      </div>
    </section>
  );
};

export default ProjectsControls;
