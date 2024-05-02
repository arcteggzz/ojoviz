import styles from "./HomePage.module.scss";
import { AnimatedFadeInPage, PublicPageLayout } from "../../utils";
import { useState, useEffect, useRef } from "react";
import {
  // SplashScreen,
  SplashBob,
  // Hero,
  ContactUs,
  AboutUs,
  Testimonials,
  SelectedProjects,
  Hero2,
} from "./Components";
import { useLocation } from "react-router-dom";
import useApp from "../../hooks/useApp";
import { routePaths } from "../../utils";

const HomePage = () => {
  const contactUsSectionRef = useRef<HTMLDivElement>(null);
  const aboutUsSectionRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const { setMobileNavbarOpen } = useApp();

  const [splash, setSplash] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setSplash(false);
    }, 1200);

    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (
      window.location.hash === routePaths.HASH_ID.contact_us &&
      contactUsSectionRef.current
    ) {
      contactUsSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    if (
      window.location.hash === routePaths.HASH_ID.about_us &&
      aboutUsSectionRef.current
    ) {
      aboutUsSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    if (
      window.location.hash === routePaths.HASH_ID.contact_us &&
      contactUsSectionRef.current
    ) {
      contactUsSectionRef.current.scrollIntoView({ behavior: "smooth" });
      setMobileNavbarOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location, splash]);

  useEffect(() => {
    if (
      window.location.hash === routePaths.HASH_ID.about_us &&
      aboutUsSectionRef.current
    ) {
      aboutUsSectionRef.current.scrollIntoView({ behavior: "smooth" });
      setMobileNavbarOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location, splash]);

  useEffect(() => {
    if (
      window.location.hash === routePaths.HASH_ID.about_us ||
      window.location.hash === routePaths.HASH_ID.contact_us
    ) {
      setSplash(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <AnimatedFadeInPage>
      {splash ? (
        <SplashBob />
      ) : (
        <PublicPageLayout>
          <main className={styles.HomePage}>
            <Hero2 />
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
