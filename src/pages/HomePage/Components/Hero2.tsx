import styles from "../Styles/Hero2.module.scss";
import { useEffect, useState, useRef } from "react";
// import interior01 from "../images/interior_01.png";
// import interior02 from "../images/interior_02.png";
// import exterior01 from "../images/exterior_01.png";
// import exterior02 from "../images/exterior_02.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Hero2 = () => {
  const imageExtraStyles = {
    transition: "all 0.5s ease-in-out",
  };

  const exteriorImages = [
    {
      id: 0,
      main: `https://res.cloudinary.com/dhf9w2zpm/image/upload/c_thumb,w_1200,g_face/v1714681012/Ojoviz%20Assets/hero_section_images/exterior_01_zz3wdm.png`,
      placeHolder: `https://res.cloudinary.com/dhf9w2zpm/image/upload/c_thumb,w_100,g_face/v1714681012/Ojoviz%20Assets/hero_section_images/exterior_01_zz3wdm.png`,
    },
    {
      id: 0,
      main: `https://res.cloudinary.com/dhf9w2zpm/image/upload/c_thumb,w_1200,g_face/v1714681010/Ojoviz%20Assets/hero_section_images/exterior_02_eb3hyh.png`,
      placeHolder: `https://res.cloudinary.com/dhf9w2zpm/image/upload/c_thumb,w_100,g_face/v1714681010/Ojoviz%20Assets/hero_section_images/exterior_02_eb3hyh.png`,
    },
  ];

  const interiorImages = [
    {
      id: 0,
      main: `https://res.cloudinary.com/dhf9w2zpm/image/upload/c_thumb,w_1200,g_face/v1714681013/Ojoviz%20Assets/hero_section_images/interior_01_pojw9e.png`,
      placeHolder: `https://res.cloudinary.com/dhf9w2zpm/image/upload/c_thumb,w_100,g_face/v1714681013/Ojoviz%20Assets/hero_section_images/interior_01_pojw9e.png`,
    },
    {
      id: 0,
      main: `https://res.cloudinary.com/dhf9w2zpm/image/upload/c_thumb,w_1200,g_face/v1714681013/Ojoviz%20Assets/hero_section_images/interior_02_jiwmns.png`,
      placeHolder: `https://res.cloudinary.com/dhf9w2zpm/image/upload/c_thumb,w_100,g_face/v1714681013/Ojoviz%20Assets/hero_section_images/interior_02_jiwmns.png`,
    },
  ];

  const [curExteriorImage, setCurExteriorImage] = useState(0);
  const [curInteriorImage, setCurInteriorImage] = useState(0);

  const exteriorTimerRef = useRef<number | null | undefined>(null);
  const interiorTimerRef = useRef<number | null | undefined>(null);

  const goToNextExterior = () => {
    const isLastSlide = curExteriorImage === exteriorImages.length - 1;
    const newIndex = isLastSlide ? 0 : curExteriorImage + 1;
    setCurExteriorImage(newIndex);
  };

  const goToNextInterior = () => {
    const isLastSlide = curInteriorImage === interiorImages.length - 1;
    const newIndex = isLastSlide ? 0 : curInteriorImage + 1;
    setCurInteriorImage(newIndex);
  };

  //exterior
  useEffect(() => {
    if (exteriorTimerRef.current) clearTimeout(exteriorTimerRef.current);

    exteriorTimerRef.current = setTimeout(() => {
      goToNextExterior();
    }, 4000);

    return () => clearTimeout(exteriorTimerRef.current as number | undefined);
  });

  //interior
  useEffect(() => {
    if (interiorTimerRef.current) clearTimeout(interiorTimerRef.current);

    interiorTimerRef.current = setTimeout(() => {
      goToNextInterior();
    }, 4000);

    return () => clearTimeout(interiorTimerRef.current as number | undefined);
  });

  return (
    <header className={styles.Hero}>
      <div className={styles.text_container_hero}>
        <h1
          className={styles.design_text}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Architecture & Design
        </h1>
      </div>

      <div className={styles.text_container_hero}>
        <h1
          className={styles.design_text}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Exterior & Interior Visualization
        </h1>
      </div>

      <div className={styles.background_images_container}>
        <div className={styles.exterior_screen}>
          <LazyLoadImage
            alt={""}
            height={"auto"}
            width={"100%"}
            src={exteriorImages[curExteriorImage].main}
            effect="blur"
            style={imageExtraStyles}
            placeholderSrc={exteriorImages[curExteriorImage].placeHolder}
          />
        </div>
        <div className={styles.interior_screen}>
          <LazyLoadImage
            alt={""}
            height={"auto"}
            width={"100%"}
            src={interiorImages[curInteriorImage].main}
            effect="blur"
            style={imageExtraStyles}
            placeholderSrc={interiorImages[curInteriorImage].placeHolder}
          />
        </div>
      </div>

      <div className={styles.screen_opacity}></div>
    </header>
  );
};

export default Hero2;
