import styles from "./HomePage.module.scss";
import { AnimatedFadeInPage, PublicPageLayout } from "../../utils";
import { useState, useEffect, useRef } from "react";
import {
  SplashScreen,
  Hero,
  ContactUs,
  AboutUs,
  Testimonials,
  SelectedProjects,
} from "./Components";
import { useLocation } from "react-router-dom";
import useApp from "../../hooks/useApp";

const HomePage = () => {
  const contactUsSectionRef = useRef<HTMLDivElement>(null);
  const aboutUsSectionRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const { setMobileNavbarOpen } = useApp();

  const [spalsh, setSplash] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setSplash(false);
    }, 1000);

    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (window.location.hash === "#contactUs" && contactUsSectionRef.current) {
      contactUsSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    if (window.location.hash === "#aboutUs" && aboutUsSectionRef.current) {
      aboutUsSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    if (window.location.hash === "#contactUs" && contactUsSectionRef.current) {
      contactUsSectionRef.current.scrollIntoView({ behavior: "smooth" });
      setMobileNavbarOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location, spalsh]);

  useEffect(() => {
    if (window.location.hash === "#aboutUs" && aboutUsSectionRef.current) {
      aboutUsSectionRef.current.scrollIntoView({ behavior: "smooth" });
      setMobileNavbarOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location, spalsh]);

  useEffect(() => {
    if (
      window.location.hash === "#aboutUs" ||
      window.location.hash === "#contactUs"
    ) {
      setSplash(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <AnimatedFadeInPage>
      {spalsh ? (
        <SplashScreen />
      ) : (
        <PublicPageLayout>
          <main className={styles.HomePage}>
            <Hero />
            <div id="aboutUs" ref={aboutUsSectionRef}>
              <AboutUs />
            </div>
            <SelectedProjects />
            <Testimonials />
            <div id="contactUs" ref={contactUsSectionRef}>
              <ContactUs />
            </div>
          </main>
        </PublicPageLayout>
      )}
    </AnimatedFadeInPage>
  );
};

export default HomePage;
