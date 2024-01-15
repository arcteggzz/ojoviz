import styles from "../Styles/ContactUs.module.scss";
import { sendEmail } from "../../../utils";

const ContactUs = () => {
  return (
    <section className={styles.ContactUs}>
      <p className={styles.contact_us_text}>Contact Us</p>

      <h3 className={styles.build_text}>
        Let’s build a great work relationship
      </h3>

      <p className={styles.deliver_text}>Trust us to deliver the very best</p>

      <button className={styles.send_btn} onClick={() => sendEmail()}>
        Send a Message
      </button>
    </section>
  );
};

export default ContactUs;
