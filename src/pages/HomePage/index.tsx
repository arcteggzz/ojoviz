import styles from "./HomePage.module.scss";
import { AnimatedFadeInPage, PublicPageLayout } from "../../utils";
import { useState, useEffect } from "react";
import { SplashScreen, Hero, ContactUs } from "./Components";

const HomePage = () => {
  const [spalsh, setSplash] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setSplash(false);
    }, 3000);

    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AnimatedFadeInPage>
      {spalsh ? (
        <SplashScreen />
      ) : (
        <PublicPageLayout>
          <main className={styles.HomePage}>
            <Hero />
            <ContactUs />
          </main>
        </PublicPageLayout>
      )}
    </AnimatedFadeInPage>
  );
};

export default HomePage;
