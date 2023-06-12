import React from "react";
import UndrawBooks from "../assets/Undraw_Books.svg";

const Landing = () => {
  return (
    <section id="landing">
      <header>
        <div className="header__container">
          <div className="header__description">
            <h1>Americas Most Awarded Online libary platform</h1>
            <h2>Find Your Dream book with <span className="purple">libary</span></h2>
            <a href="#features">
              <button className="btn">Browse books</button>
            </a>
          </div>
          <figure className="header__img--wrapper">
            <img src={UndrawBooks} alt="" />
          </figure>
        </div>
      </header>

    </section>

  )
}

export default Landing