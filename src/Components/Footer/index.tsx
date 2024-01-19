import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";
import { routePaths, socialLinks1, socialLinks2 } from "../../utils";
import ojoviz_logo from "../../assets/images/ojoviz_logo.png";

const Footer = () => {
  const getYear = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    return `© ${currentYear} ojoviz. All rights reserved.`;
  };

  return (
    <>
      <footer className={styles.Footer}>
        <div className={styles.top_footer}>
          <div className={styles.slogan_container}>
            <Link to={routePaths.HOME} className={styles.logo_icon}>
              <img src={ojoviz_logo} alt="Ojoviz home logo" />
            </Link>
            <p className={styles.slogan_text}>
              We listen, understand and churn out the best visuals
            </p>
          </div>

          <div className={styles.links_and_socials}>
            <div className={styles.footer_links}>
              <Link
                to={`${routePaths.HOME}#aboutUs`}
                className={styles.single_footer_Link}
              >
                About Us
              </Link>
              <Link
                to={routePaths.PROJECTS}
                className={styles.single_footer_Link}
              >
                Projects
              </Link>
              <Link
                to={`${routePaths.HOME}#contactUs`}
                className={styles.single_footer_Link}
              >
                Contact Us
              </Link>
            </div>

            <div className={styles.socials_container}>
              {socialLinks1.map((item) => {
                return (
                  <Link
                    to={item.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.single_social_link}
                  >
                    <img
                      src={item.image}
                      alt={item.alt}
                      className={styles.socials_icon}
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className={styles.bottom_footer}>
          <p className={styles.restricted_text}>{getYear()}</p>

          <div className={styles.external_links}>
            {socialLinks2.map((item) => {
              return (
                <Link
                  to={item.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.single_external_social_link}
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    className={styles.external_socials_icon}
                  />

                  <p className={styles.external_link_text}>{item.text}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
