/*function Footer() {
    return (
        <footer>
            <section className="footer-sec">
                <div className="footer-sec three">
                    <img src="src/assets/Logo.svg" width="150px"/>
                </div>
                <div className="four">
                    <h3>Important Links</h3>
                    <ul id="imp-links">
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Reservations</a></li>
                        <li><a href="/">Order Online</a></li>
                        <li><a href="/">Login</a></li>
                    </ul>
                </div>
                <div className="footer-sec four">
                    <ul id="imp-links">
                        <li>Address: 123 Towncity, USA</li>
                        <li>Phone: 1234564790</li>
                        <li>Email: littlelemon@gmail.com</li>
                    </ul>
                </div>
            </section>
        </footer>
    );
}

export default Footer;*/

import React from "react";
import logo from "../assets/Logo.svg";

const Footer = () => {
  return (
    <footer>
      <section>
        <div className="company-info">
          <img src={logo} alt="little lemon" />
          <p>
            We are a family owned Mediterraneran restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
        </div>
        <div>
          <h3>Important Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Menu</a>
            </li>
            <li>
              <a href="/">Reservations</a>
            </li>
            <li>
              <a href="/">Order Online</a>
            </li>
            <li>
              <a href="/">Login</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Contact</h3>
          <ul>
            <li>
              Address: <br /> 123 Towncity, USA
            </li>
            <li>
              Phone: <br /> ++ 0123 456 789
            </li>
            <li>
              Email: <br /> little@lemon.com
            </li>
          </ul>
        </div>
        <div>
          <h3>Social Media Links</h3>
          <ul>
            <li>
              <a href="/">Facebook</a>
            </li>
            <li>
              <a href="/">Instagram</a>
            </li>
            <li>
              <a href="/">Twitter</a>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;