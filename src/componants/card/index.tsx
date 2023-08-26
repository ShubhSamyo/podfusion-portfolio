import Image from "next/image";
import React from "react";
import "./card.css";

const Card = () => {
  return (
    <article className="card-section">
      <div>
        <Image
          src="/image-5.png"
          width={374}
          height={418}
          alt="Connect Multiple Provider Together"
        />
      </div>
      <div className="text-center text-section">
        <h3>Connect multiple providers together</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur. Mauris mi etiam dignissim
          turpis integer gravida sed.
        </p>
      </div>
    </article>
  );
};

export default Card;
