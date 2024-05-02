import styles from "../Styles/Hero.module.scss";
// import { useEffect, useState, useRef } from "react";
// import interior01 from "../images/interior_01.png";
// import interior02 from "../images/interior_02.png";
// import exterior01 from "../images/exterior_01.png";
// import exterior02 from "../images/exterior_02.png";

const Hero = () => {
  // const exteriorImages = [
  //   "https://res.cloudinary.com/dhf9w2zpm/image/upload/c_thumb,w_800,g_face/v1705171891/Ojoviz%20Assets/Test_3_x_4_g2xdft.png",
  //   "https://res.cloudinary.com/dhf9w2zpm/image/upload/c_thumb,w_800,g_face/v1705176699/Ojoviz%20Assets/DT_1_2_poam0x.png",
  // ];

  // const interiorImages = [
  //   "https://res.cloudinary.com/dhf9w2zpm/image/upload/c_thumb,w_800,g_face/v1705174025/Ojoviz%20Assets/PKN_10_1_v3a1ls.png",
  //   "https://res.cloudinary.com/dhf9w2zpm/image/upload/c_thumb,w_800,g_face/v1706443601/Ojoviz%20Assets/FR_2_awb1yn.png",
  // ];

  // const exteriorImages = [exterior01, exterior02];

  // const interiorImages = [interior01, interior02];

  // const [curExteriorImage, setCurExteriorImage] = useState(0);
  // const [curInteriorImage, setCurInteriorImage] = useState(0);

  // const exteriorTimerRef = useRef<number | null | undefined>(null);
  // const interiorTimerRef = useRef<number | null | undefined>(null);

  // const exteriorStyles = {
  //   backgroundImage: `url(${exteriorImages[curExteriorImage]})`,
  // };

  // const interiorStyles = {
  //   backgroundImage: `url(${interiorImages[curInteriorImage]})`,
  // };

  // const goToNextExterior = () => {
  //   const isLastSlide = curExteriorImage === exteriorImages.length - 1;
  //   const newIndex = isLastSlide ? 0 : curExteriorImage + 1;
  //   setCurExteriorImage(newIndex);
  // };

  // const goToNextInterior = () => {
  //   const isLastSlide = curInteriorImage === interiorImages.length - 1;
  //   const newIndex = isLastSlide ? 0 : curInteriorImage + 1;
  //   setCurInteriorImage(newIndex);
  // };

  //exterior
  // useEffect(() => {
  //   if (exteriorTimerRef.current) clearTimeout(exteriorTimerRef.current);

  //   exteriorTimerRef.current = setTimeout(() => {
  //     goToNextExterior();
  //   }, 4000);

  //   return () => clearTimeout(exteriorTimerRef.current as number | undefined);
  // });

  // //interior
  // useEffect(() => {
  //   if (interiorTimerRef.current) clearTimeout(interiorTimerRef.current);

  //   interiorTimerRef.current = setTimeout(() => {
  //     goToNextInterior();
  //   }, 4000);

  //   return () => clearTimeout(interiorTimerRef.current as number | undefined);
  // });

  return (
    <header className={styles.Hero}>
      {/* <div className={styles.image_container_hero} style={exteriorStyles}>
        <h1
          className={styles.design_text}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Architecture & Design
        </h1>
      </div>

      <div className={styles.image_container_hero} style={interiorStyles}>
        <h1
          className={styles.design_text}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Exterior & Interior Visualization
        </h1>
      </div> */}
    </header>
  );
};

export default Hero;
