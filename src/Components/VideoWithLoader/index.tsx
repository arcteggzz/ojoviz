import styles from "./VideoWithLoader.module.scss";
import ReactPlayer from "react-player";
import play_icon from "../../assets/images/play_icon_small.png";

const VideoWithLoader = ({
  src,
  placeHolderImgSrc,
}: {
  src: string;
  placeHolderImgSrc?: string;
}) => {
  return (
    <div className={styles.VideoWithLoader}>
      <ReactPlayer
        url={src}
        loop={true}
        controls={true}
        playing={true}
        light={
          <img
            src={placeHolderImgSrc}
            alt="Thumbnail"
            className={styles.placeHolder}
          />
        }
        // light={true}
        playIcon={
          <div className={styles.play_icon_container}>
            <img src={play_icon} alt="play Icon" className={styles.play_icon} />
          </div>
        }
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default VideoWithLoader;
