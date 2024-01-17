import styles from "./Navbar.module.scss";
import { Link, NavLink } from "react-router-dom";
import ojoviz_logo from "../../assets/images/ojoviz_logo.png";
import { routePaths } from "../../utils";
import useApp from "../../hooks/useApp";
import open_hamburger_icon from "../../assets/images/open_hamburger_icon.png";
import close_hamburger_icon from "../../assets/images/close_hamburger_icon.png";

const Navbar = () => {
  const { mobileNavbarOpen, toggleMobileNavbar } = useApp();

  return (
    <>
      <nav className={styles.Navbar}>
        <div className={styles.Navbar_container}>
          <Link to={routePaths.HOME} className={styles.logo_icon}>
            <img src={ojoviz_logo} alt="Ojoviz home logo" />
          </Link>

          {/* desktop right hand side */}
          <div className={styles.desktop_right}>
            {/* desktop navlinks  */}
            <div className={styles.navLinks_Desktop}>
              <NavLink
                to={`${routePaths.HOME}#aboutUs`}
                className={styles.inactive_NavLink}
              >
                About Us
              </NavLink>
              <NavLink
                to={routePaths.PROJECTS}
                className={({ isActive }) =>
                  isActive ? styles.active_NavLink : styles.inactive_NavLink
                }
              >
                Projects
              </NavLink>
            </div>

            <Link
              to={`${routePaths.HOME}#contactUs`}
              className={styles.contact_us_btn}
            >
              Contact Us
            </Link>

            {/* mobile hamburger controller */}
            <button
              onClick={() => toggleMobileNavbar()}
              className={styles.hamburger}
            >
              <img
                src={
                  mobileNavbarOpen ? close_hamburger_icon : open_hamburger_icon
                }
                alt={
                  mobileNavbarOpen
                    ? "Close Hamburger Icon"
                    : "Open Hamburger Icon"
                }
              />
            </button>
          </div>
        </div>

        {/* add the mobile navbar that slides in here */}
        <div
          className={
            mobileNavbarOpen ? styles.mobile_Nav_Open : styles.mobile_Nav_Closed
          }
        >
          <section className={styles.Navlinks_Mobile}>
            <NavLink
              to={`${routePaths.HOME}#aboutUs`}
              className={styles.mobile_single_NavLink}
            >
              About Us
            </NavLink>
            <NavLink
              to={routePaths.PROJECTS}
              className={styles.mobile_single_NavLink}
            >
              Projects
            </NavLink>
          </section>

          <div className={styles.contact_us_container}>
            <Link
              to={`${routePaths.HOME}#contactUs`}
              className={styles.contact_us_btn_mobile}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
