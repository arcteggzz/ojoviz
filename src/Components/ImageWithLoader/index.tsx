import styles from "./ImageWithLoader.module.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useState, useEffect } from "react";

const ImageWithLoader = ({
  src,
  alt,
  thumbnailSrc,
}: {
  src: string;
  alt: string;
  thumbnailSrc: string;
}) => {
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobileScreen = window.innerWidth <= 720;
      setIsMobileScreen(mobileScreen);
    };

    // Initial check on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.ImageWithLoader}>
      {/* <img src={src} alt={alt} className={styles.image_item} /> */}

      <div className={styles.image_item}>
        <LazyLoadImage
          alt={alt}
          src={src}
          effect="blur"
          placeholderSrc={thumbnailSrc}
          style={{
            maxWidth: isMobileScreen ? "80vw" : "60vw",
            maxHeight: "80vh",
          }}
        />
      </div>
    </div>
  );
};

export default ImageWithLoader;
