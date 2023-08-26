import React from "react";
import "./index.css";

type footerProps = {
  email: any;
  icon: {
    src: string;
    alt: string;
    className: string;
  }[];
  links: string[];
};

const iconsData: footerProps["icon"] = [
  {
    src: "/linkedin.svg",
    alt: "linkedin-icon",
    className: "footer-social-icons-img",
  },
  {
    src: "/facebook.svg",
    alt: "facebook-icon",
    className: "footer-social-icons-img",
  },
  {
    src: "/twitter.svg",
    alt: "twitter-icon",
    className: "footer-social-icons-img",
  },
];
export default function Footer() {
  return (
    <footer className="footer_section">
      <div className="container-fluid bg-image">
        <div className="container ">
          <div className="row  d-flex align-items-center">
            <div className="col-5 left_section">
              <img src="logo.svg" />
            </div>
            <div className="col-7 right_sectioin d-flex align-items-center justify-content-between">
              <div className="quick-links">
                <span> Quick Links</span>
              </div>
              <div className="footer-stay">
                <span> Stay updated</span>
              </div>
              <div className="footer-icons d-flex">
                {iconsData &&
                  iconsData.map((item: any) => {
                    return (
                      <img
                        key={item.className}
                        src={item.src}
                        alt={item.alt}
                        className={item.className}
                      />
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
