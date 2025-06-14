

/*function Header() {
    return (
        <header>
            <section>
                <div id="one">
                    <h2 id="one-head">Little Lemon</h2>
                    <h3 className="two-head">Chicago</h3>
                    <p className="two-head" id="para">
                        We are a family owned Mediterraneran restaurant,<br /> focused on
                        traditional recipes served with a modern twist.
                    </p>
                    <button id="reserve">Reserve a table</button>
                </div>
                <div id="two">
                    <img src="src/assets/restauranfood.jpg" width="200px" height="250px" alt="food" />
                </div>
            </section>
        </header>
    )
}

export default Header;*/

import React from "react";
import { Link } from "react-router-dom";
import bannerImg from "../assets/restauranfood.jpg";

const Header = () => {
  return (
    <header className="header">
      <section>
        <div className="banner">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            We are a family owned Mediterraneran restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Link to="/booking">
            <button aria-label="On Click">Reserve Table</button>
          </Link>
        </div>

        <div className="banner-img">
          <img src={bannerImg} alt="" />
        </div>
      </section>
    </header>
  );
};

export default Header;