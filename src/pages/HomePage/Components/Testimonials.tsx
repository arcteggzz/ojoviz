import styles from "../Styles/Testimonials.module.scss";
import stars_icon from "../../../assets/images/stars_icon.png";
import { testimonials } from "../../../utils";

type SingleTestimonialProps = {
  name: string;
  comment: string;
  backgroundColor: string;
};

const SingleTestimonial = ({
  comment,
  name,
  backgroundColor,
}: SingleTestimonialProps) => {
  return (
    <div className={styles.SingleTestimonial}>
      <img src={stars_icon} alt="stars ratings" className={styles.stars_icon} />
      <p className={styles.comment_text}>{comment}</p>
      <div className={styles.bottom_container}>
        <div className={styles.profile_image} style={{ backgroundColor }}></div>
        <p className={styles.name_text}>{name}</p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className={styles.Testimonials}>
      <h2 className={styles.testimonials_header}>
        What our clients are saying
      </h2>

      <div className={styles.carousel_slider_container}>
        <div className={styles.top_carousel}>
          {testimonials?.map((review) => {
            return (
              <>
                <SingleTestimonial
                  key={`${review.name}`}
                  comment={review.comment}
                  name={review.name}
                  backgroundColor={review.backgroundColor}
                />
              </>
            );
          })}
          {testimonials?.map((review) => {
            return (
              <>
                <SingleTestimonial
                  key={`${review.name}`}
                  comment={review.comment}
                  name={review.name}
                  backgroundColor={review.backgroundColor}
                />
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
