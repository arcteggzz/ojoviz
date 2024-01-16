export { default as PublicPageLayout } from "./PublicPageLayout";
export { default as AnimatedFadeInPage } from "./AnimatedFadeInPage";
export { default as routePaths } from "./routePaths";
export { projectsList } from "./projectsList";

export const emailAddress = "arcteggzz@gmail.com";

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
