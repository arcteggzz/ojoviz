import styles from "../Styles/AboutUs.module.scss";
import { aboutUsItems } from "../../../utils";
import details_desktop from "../images/details_desktop.png";
import details_mobile from "../images/details_mobile.png";

const AboutUs = () => {
  return (
    <section className={styles.AboutUs}>
      <div className={styles.statistics_container}>
        {aboutUsItems.map((item) => {
          return (
            <div className={styles.single_item}>
              <h4 className={styles.head_text}>{item.head}</h4>
              <p className={styles.body_text}>{item.body}</p>
            </div>
          );
        })}
      </div>

      <div className={styles.about_us_content}>
        <div className={styles.about_us_content_header}>
          <p className={styles.about_us_text}>About Us</p>

          <h3 className={styles.focused_text}>
            Focused on high-end realistic Visualization
          </h3>

          <p className={styles.team_text}>
            Ojoviz is a team of dedicated architectural designers led by Jordan
            Omoleye. His experience in architectural design and visualization
            spans half a decade in which he has executed projects in different
            countries.
          </p>
        </div>

        <div className={styles.about_us_content_details_desktop}>
          <img
            src={details_desktop}
            alt="services offered"
            className={styles.details_desktop}
          />
        </div>

        <div className={styles.about_us_content_details_mobile}>
          <img
            src={details_mobile}
            alt="services offered"
            className={styles.details_mobile}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
