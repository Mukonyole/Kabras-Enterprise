import React from "react";
import "../../App.css";

function Footer() {
  return (
    <footer>
      <div className="wrapper"></div>
      <div className="footer">
        <div className="footer-content">
          <div className="footer-section about">
            <p className="footer-para">
              Developer: <span className="my-name"> Evans Mukonyole</span>
            </p>

            <div className="contact"></div>
            <div className="socials">
            
              <a
                href="https://www.linkedin.com/in/evansmukonyole52415b191/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://x.com/EvansMukonyole/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://github.com/Mukonyole"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
            
            <br />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
