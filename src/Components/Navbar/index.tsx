import styles from "./Navbar.module.scss";
import { Link, NavLink } from "react-router-dom";
import ojoviz_logo from "../../assets/images/ojoviz_logo.png";
import { routePaths } from "../../utils";
import useApp from "../../hooks/useApp";
import open_hamburger_icon from "../../assets/images/open_hamburger_icon.png";
import close_hamburger_icon from "../../assets/images/close_hamburger_icon.png";
import mute_icon from "../../assets/images/mute_icon.png";
import unmute_icon from "../../assets/images/unmute_icon.png";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const {
    mobileNavbarOpen,
    toggleMobileNavbar,
    setHeroVideoMuted,
    heroVideoMuted,
  } = useApp();
  const { pathname } = useLocation();

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

            {pathname === "/" && (
              <button
                className={styles.mute_btn}
                onClick={() => setHeroVideoMuted(!heroVideoMuted)}
              >
                <img
                  src={heroVideoMuted ? unmute_icon : mute_icon}
                  alt={heroVideoMuted ? "unmute icon" : "muted icon"}
                  className={styles.mute_icon}
                />
              </button>
            )}

            <div className={styles.navLinks_Desktop}>
              <NavLink
                to={`${routePaths.HOME}${routePaths.HASH_ID.about_us}`}
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
              to={`${routePaths.HOME}${routePaths.HASH_ID.contact_us}`}
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
              to={`${routePaths.HOME}${routePaths.HASH_ID.about_us}`}
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
              to={`${routePaths.HOME}${routePaths.HASH_ID.contact_us}`}
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
