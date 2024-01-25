import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";
import {
  routePaths,
  socialLinks1,
  emailAddress,
  footerPhoneNUmbers,
} from "../../utils";
import ojoviz_logo from "../../assets/images/ojoviz_logo.png";
import website_logo from "../../assets/images/website_logo.png";
import mail_logo from "../../assets/images/mail_logo.png";
import contact_logo from "../../assets/images/contact_logo.png";

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
                to={`${routePaths.HOME}${routePaths.HASH_ID.about_us}`}
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
                to={`${routePaths.HOME}${routePaths.HASH_ID.contact_us}`}
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
                    key={item.externalLink}
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
            <Link
              to={`https://x.com/jordan_rvt?s=11`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.single_external_social_link}
            >
              <img
                src={website_logo}
                alt="Website Icon"
                className={styles.external_socials_icon}
              />
              <p className={styles.external_link_text}>Jordan.rvt</p>
            </Link>

            <div className={styles.number_contact_container}>
              <img
                src={contact_logo}
                alt="Website Icon"
                className={styles.external_socials_icon}
              />

              <div className={styles.numbers_container}>
                <p className={styles.number_text}>{footerPhoneNUmbers[1]}</p>
                <p className={styles.number_text}>{footerPhoneNUmbers[0]}</p>
              </div>
            </div>

            <Link
              to={`mailto:${emailAddress}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.single_external_social_link}
            >
              <img
                src={mail_logo}
                alt="Mail Icon"
                className={styles.external_socials_icon}
              />
              <p className={styles.external_link_text}>
                Jordan_leye@outlook.com
              </p>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
