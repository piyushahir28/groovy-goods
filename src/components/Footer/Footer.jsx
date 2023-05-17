import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

import "./Footer.css";

export const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="copyright">Copyright @Groovy Goods</div>
        <div className="footer-icons">
          <TwitterIcon className="icon" />
          <GitHubIcon className="icon" />
          <LinkedInIcon className="icon" />
        </div>
      </div>
    </>
  );
};
