import styles from "../Styles/SplashScreen.module.scss";
import ojoviz_splash_1 from "../../../assets/images/ojoviz_splash_1.png";
import ojoviz_splash_2 from "../../../assets/images/ojoviz_splash_2.png";
import ojoviz_splash_3 from "../../../assets/images/ojoviz_splash_3.png";
import ojoviz_splash_4 from "../../../assets/images/ojoviz_splash_4.png";
import ojoviz_splash_5 from "../../../assets/images/ojoviz_splash_5.png";
import ojoviz_splash_6 from "../../../assets/images/ojoviz_splash_6.png";
import { useEffect, useState } from "react";

const SplashScreen = () => {
  const [counter, setCounter] = useState(0);
  const images = [
    ojoviz_splash_1,
    ojoviz_splash_2,
    ojoviz_splash_3,
    ojoviz_splash_4,
    ojoviz_splash_5,
    ojoviz_splash_6,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the counter
      setCounter((prevCounter) => prevCounter + 1);

      // Check if the counter reaches 5 and clear the interval
      if (counter === 5) {
        clearInterval(interval);
        setCounter(5);
      }
    }, 100); // Adjust the interval as needed (here, it's set to 1000 milliseconds or 1 second)

    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval);
  }, [counter]);

  return (
    <div className={styles.SplashScreen}>
      <div className={styles.image_container}>
        <img src={images[counter]} alt="" className={styles.image_style} />
      </div>
    </div>
  );
};

export default SplashScreen;
