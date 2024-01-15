import styles from "./ProjectsDetailsPage.module.scss";
import { useParams, useNavigate } from "react-router-dom";
import { ImageWithLoader, VideoWithLoader, Icons } from "../../Components";
import { AnimatedFadeInPage, projectsList, routePaths } from "../../utils";
import close_icon from "./close_icon.png";

const ProjectsDetailsPage = () => {
  const navigate = useNavigate();
  const { projectId } = useParams();

  const finalProjectId = projectId === undefined ? 1 : +projectId;

  const currentProject = projectsList.find(
    (item) => item.id === `${finalProjectId}`
  );

  const goToNextProject = () => {
    const newId =
      finalProjectId < projectsList.length
        ? finalProjectId + 1
        : finalProjectId;
    const newRoute = `/projects/${newId}`;
    navigate(newRoute);
  };

  const goToPreviousProject = () => {
    const newId = finalProjectId > 1 ? finalProjectId - 1 : finalProjectId;
    const newRoute = `/projects/${newId}`;
    navigate(newRoute);
  };

  const closePage = () => {
    navigate(`${routePaths.PROJECTS}`);
  };

  return (
    <AnimatedFadeInPage>
      <main className={styles.ProjectsDetailsPage}>
        <div className={styles.close_btn_container}>
          <button className={styles.close_btn} onClick={() => closePage()}>
            <img src={close_icon} alt="" className={styles.close_icon} />
          </button>
        </div>

        <div className={styles.middle_screen}>
          <button
            className={styles.previous_btn}
            onClick={() => goToPreviousProject()}
          >
            <Icons height="24" width="24" id="previous_icon" />
          </button>

          {currentProject?.type === "image" ? (
            <div className={styles.image_container}>
              <ImageWithLoader
                src={currentProject.imageUrl?.large as string}
                alt="Project Image"
              />
            </div>
          ) : (
            <div className={styles.image_container}>
              <VideoWithLoader
                src={currentProject?.videoUrl?.mainUrl as string}
                placeHolderImgSrc={
                  currentProject?.videoUrl?.placeholder as string
                }
              />
            </div>
          )}

          <button className={styles.next_btn} onClick={() => goToNextProject()}>
            <Icons height="24" width="24" id="next_icon" />
          </button>
        </div>
      </main>
    </AnimatedFadeInPage>
  );
};

export default ProjectsDetailsPage;
