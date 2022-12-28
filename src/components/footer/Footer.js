import React from "react";
import Style from "./Style";

const Footer = () => {
  const classes = Style();
  return (
    <div className={classes.footer}>
      <div className={classes.footer__links}>
        {footerTopLinks.map(({ title, link }, i) => (
          <a href={link} target="_black" key={`top-link-${i}`}>
            {title}
          </a>
        ))}
      </div>
      <div className={classes.footer__links}>
        {footerMiddleLinks.map((link, i) => (
          <p key={`middle-link-${i}`}>{link}</p>
        ))}
      </div>
    </div>
  );
};

export default Footer;

// Array of Instagram footer link texts
const footerMiddleLinks = [
  "About",
  "Blog",
  "Jobs",
  "Help",
  "API",
  "Privary",
  "Terms",
  "Top Accounts",
  "Hashtags",
  "Locations",
];

const footerTopLinks = [
  { title: "Github", link: "https://github.com/Nazar-Xan" },
  { title: "Instagram", link: "https://www.instagram.com/nazar____bek/" },
];


