import styles from "./SingleProjectDisplay.module.scss";
import { Link } from "react-router-dom";
import { singleProjectType } from "../../types";
import play_icon from "../../assets/images/play_icon.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const SingleProjectDisplay = ({ project }: { project: singleProjectType }) => {
  return (
    <Link
      to={`/projects/${project.id}`}
      className={styles.SingleProjectDisplay}
    >
      <div className={styles.proj_image}>
        <LazyLoadImage
          alt={""}
          height={"auto"}
          width={"100%"}
          src={
            project.type === "image"
              ? project.imageUrl?.small
              : project.videoUrl?.placeholder
          }
          effect="blur"
          placeholderSrc={
            project.type === "image"
              ? project.imageUrl?.thumbnailSrc
              : project.videoUrl?.thumbnailSrc
          }
        />
      </div>

      <h5 className={styles.project_tag_header}>{project.name}</h5>
      <h6 className={styles.project_tag_body}>{project.client}</h6>

      {project.type === "video" && (
        <div className={styles.play_icon_container}>
          <img src={play_icon} alt="play Icon" className={styles.play_icon} />
        </div>
      )}
    </Link>
  );
};

export default SingleProjectDisplay;
