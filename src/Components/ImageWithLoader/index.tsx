import styles from "./ImageWithLoader.module.scss";
// import { useEffect, useState, useRef } from "react";
// import MoonLoader from "react-spinners/MoonLoader";

const ImageWithLoader = ({ src, alt }: { src: string; alt: string }) => {
  // const [isLoading, setIsLoading] = useState(true);

  // const imageRef = useRef<HTMLImageElement>(null);

  // useEffect(() => {
  //   const handleLoad = () => {
  //     setIsLoading(false);
  //   };

  //   imageRef?.current?.addEventListener("load", handleLoad);

  //   return () => {
  //     if (imageRef.current) {
  //       // eslint-disable-next-line react-hooks/exhaustive-deps
  //       imageRef.current?.removeEventListener("load", handleLoad);
  //     }
  //   };
  // }, [imageRef]);

  return (
    // <div className={styles.ImageWithLoader}>
    //   {isLoading ? (
    //     <div className={styles.loading_container}>
    //       <MoonLoader color="#ffffff" />
    //     </div>
    //   ) : (
    //     <></>
    //   )}

    //   <img
    //     src={src}
    //     alt={alt}
    //     className={isLoading ? styles.image_loading : styles.image_loaded}
    //     ref={imageRef}
    //   />
    // </div>

    <div className={styles.ImageWithLoader}>
      <img src={src} alt={alt} className={styles.image_item} />
    </div>
  );
};

export default ImageWithLoader;
