import styles from "./SingleProjectDisplay.module.scss";
import { Link } from "react-router-dom";
import { singleProjectType } from "../../types";
import play_icon from "../../assets/images/play_icon_small.png";

const SingleProjectDisplay = ({ project }: { project: singleProjectType }) => {
  return (
    <Link
      to={`/projects/${project.id}`}
      className={styles.SingleProjectDisplay}
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

      {project.type === "video" && (
        <div className={styles.play_icon_container}>
          <img src={play_icon} alt="play Icon" className={styles.play_icon} />
        </div>
      )}

      {/* <div className={styles.blinds_cover}></div> */}
    </Link>
  );
};

export default SingleProjectDisplay;
