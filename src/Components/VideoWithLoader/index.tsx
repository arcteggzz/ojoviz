import styles from "./VideoWithLoader.module.scss";
import ReactPlayer from "react-player";

const VideoWithLoader = ({
  src,
}: // placeHolderImgSrc,
{
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
        // light={
        //   <img
        //     src={placeHolderImgSrc}
        //     alt="Thumbnail"
        //     className={styles.placeHolder}
        //   />
        // }
        light={true}
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default VideoWithLoader;
