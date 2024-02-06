import styles from "../Styles/SplashBob.module.scss";
import ojoviz_logo from "../../../assets/images/ojoviz_logo.png";

const SplashBob = () => {
  return (
    <div className={styles.SplashBob}>
      <div className={styles.circle_one}></div>

      <div className={styles.logo_container}>
        <img src={ojoviz_logo} alt="" className={styles.logo_item} />
      </div>
    </div>
  );
};

export default SplashBob;
