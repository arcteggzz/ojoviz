import styles from "../Styles/Hero.module.scss";
import { heroVideoUrl } from "../../../utils";

const Hero = () => {
  return (
    <header className={styles.Hero}>
      <div
        className={styles.left_side_container}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className={styles.main_text_container}>
          <span className={styles.span}>ojo</span>
          <span className={styles.span_viz}>viz</span>
        </div>

        <p className={styles.design_text}>Design & Visualization Studio</p>

        <button className={styles.desktop_start_btn}>Start Your Project</button>
      </div>
      {/* <div className={styles.video_container}>
        <ReactPlayer
          url={`https://res.cloudinary.com/dhf9w2zpm/video/upload/v1705987331/Ojoviz%20Assets/Telos_2_2_edqnvp.mp4`}
          loop={true}
          // controls={true}
          playing={true}
          style={videoStyle}
          width="400px"
          height="400px"
        />
      </div> */}

      <div className={styles.main_video_container}>
        <video
          className={styles.video_element}
          autoPlay={true}
          loop
          muted
          src={heroVideoUrl}
        ></video>
      </div>

      <div className={styles.mobile_start_btn}>Start Your Project</div>
    </header>
  );
};

export default Hero;
