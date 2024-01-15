export { default as PublicPageLayout } from "./PublicPageLayout";
export { default as AnimatedFadeInPage } from "./AnimatedFadeInPage";
export { default as routePaths } from "./routePaths";
export { projectsList } from "./projectsList";

export const emailAddress = "arcteggzz@gmail.com";

export const sendEmail = () => {
  const mailtoLink = "mailto:" + emailAddress;

  window.open(mailtoLink, "_blank");
};
