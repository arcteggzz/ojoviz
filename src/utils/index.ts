export { default as PublicPageLayout } from "./PublicPageLayout";
export { default as AnimatedFadeInPage } from "./AnimatedFadeInPage";
export { default as routePaths } from "./routePaths";
export { projectsList } from "./projectsList";
import website_logo from "../assets/images/website_logo.png";
import contact_logo from "../assets/images/contact_logo.png";
// import facebook_logo from "../assets/images/facebook_logo.png";
import instagram_logo from "../assets/images/instagram_logo.png";
import linkedin_logo from "../assets/images/linkedin_logo.png";
import mail_logo from "../assets/images/mail_logo.png";
import twitter_logo from "../assets/images/twitter_logo.png";

export const emailAddress = "jordanomoleye@gmail.com";
export const phoneNumber = "+2348178296321";

export const sendEmail = () => {
  const mailtoLink = "mailto:" + emailAddress;

  window.open(mailtoLink, "_blank");
};

export const aboutUsItems = [
  {
    head: "5+",
    body: "Countries",
  },
  {
    head: "100+",
    body: "Projects Completed",
  },
  {
    head: "400+",
    body: "Happy Customers",
  },
  {
    head: "6000+",
    body: "Hours worked",
  },
];

export const socialLinks1 = [
  // {
  //   image: facebook_logo,
  //   alt: "Facebook Icon",
  //   externalLink: "",
  // },
  {
    image: twitter_logo,
    alt: "Twitter Icon",
    externalLink: "https://x.com/jordan_rvt?s=11",
  },
  {
    image: instagram_logo,
    alt: "Instagram Icon",
    externalLink:
      "https://www.instagram.com/ojoviz?igsh=MW94a3VwMTBwdWxjeA%3D%3D&utm_source=qr",
  },
  {
    image: linkedin_logo,
    alt: "Linkedin Icon",
    externalLink:
      "https://www.linkedin.com/in/jordanomoleye?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
];

export const socialLinks2 = [
  {
    image: website_logo,
    alt: "Website Icon",
    externalLink: "https://x.com/jordan_rvt?s=11",
    text: "Jordan.rvt",
  },
  {
    image: contact_logo,
    alt: "Contact Icon",
    externalLink: "tel" + phoneNumber,
    text: "+2348178296321",
  },
  {
    image: mail_logo,
    alt: "Mail Icon",
    externalLink: "mailto:" + emailAddress,
    text: "Jordan_leye@outlook.com",
  },
];
