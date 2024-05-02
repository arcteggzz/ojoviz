import styles from "./PublicPageLayout.module.scss";
import { Navbar, Footer } from "../../Components";
import { useLocation } from "react-router-dom";
import useApp from "../../hooks/useApp";
import { useEffect } from "react";

type LayoutType = {
  children: React.ReactNode;
};

const PublicPageLayout = ({ children }: LayoutType) => {
  const { setMobileNavbarOpen, navBarActive, setNavbarActive } = useApp();
  const location = useLocation();

  const changeBackgroundNavbarHandler = () => {
    if (window.scrollY >= 80) {
      setNavbarActive(true);
    } else {
      setNavbarActive(false);
    }
  };

  window.addEventListener("scroll", changeBackgroundNavbarHandler);

  useEffect(() => {
    setMobileNavbarOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.hash]);

  useEffect(() => {
    setMobileNavbarOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.PublicPageLayout}>
          <div className={styles.main_container}>
            <div
              className={
                navBarActive
                  ? `${styles.main_Navbar_container} ${styles.main_Navbar_active}`
                  : styles.main_Navbar_container
              }
            >
              <div
                className={
                  navBarActive
                    ? `${styles.main_Navbar_Child_Container} ${styles.main_Navbar_Child_active}`
                    : styles.main_Navbar_Child_Container
                }
              >
                <Navbar />
              </div>
            </div>
            <div className={styles.Outlet_container}>
              <div className={styles.Outlet_Child_Container}>{children}</div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default PublicPageLayout;
