import styles from "../Styles/AboutUs.module.scss";

import { aboutUsItems } from "../../../utils";

const AboutUs = () => {
  return (
    <section className={styles.AboutUs}>
      <div className={styles.about_us_top}>
        {aboutUsItems.map((item) => {
          return (
            <div className={styles.top_item}>
              <h4 className={styles.head_text}>{item.head}</h4>
              <p className={styles.body_text}>{item.body}</p>
            </div>
          );
        })}
      </div>

      <div></div>
    </section>
  );
};

export default AboutUs;
