import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Highlight from "./ui/Highlight";

const Highlights = () => {
  return (
    <section id="highlights">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            why choose <span className="purple">Libary</span>
          </h2>
          <div className="highlight__wrapper">
            <Highlight
              icon={<FontAwesomeIcon icon={"bolt"} />}
              title="Easy and Quick"
              para="get access to the book you purchase online instatly"
            />
            <Highlight
              icon={<FontAwesomeIcon icon={"book-open"} />}
              title="10,000+ Books"
              para="Libary has books in all your favoirite categories"
            />
            <Highlight
              icon={<FontAwesomeIcon icon={"tags"} />}
              title="Easy and Quick"
              para="Get your hands on popular books for as little as 10$"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
