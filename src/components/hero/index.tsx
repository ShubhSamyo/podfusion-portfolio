import React from "react";
import Header from "@/components/header";
import "./hero.css";

const HeroSection = () => {
  return (
    <section className="container-fluid back-image">
      <div className="container">
        <Header />
        <div className="row">
          <div className="hero_left_section col-7">
            <div className="banner-content">
              <h2>
                Make your <span>own</span> signature <span>style</span>
              </h2>
              <p className="common-content">
                Lorem ipsum dolor sit amet consectetur. Id rhoncus a curabitur
                massa aliquet ipsum velit convallis lacus. Orci magna enim arcu
                orci amet.
              </p>
              <button className="banner-btn">Try Now</button>
            </div>
          </div>
          <div className="hero_right_section col-5">
            <div className="banner-image">
              <img src="/banner.png" alt="banner-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
