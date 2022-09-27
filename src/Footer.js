import React from "react";
import "./Footer.css";
import logo from "./assets/logo.png";
import fb from "./assets/facebook.png";
import insta from "./assets/instagram.png";
import tweet from "./assets/twitter.png";
import wa from "./assets/whatsapp.png";

function Footer() {
  return (
    <div className="footer_main">
      <div className="footer_section_1">
        <div className="footer_section_1_1">
          <span className="material-symbols-outlined location_icon">
            location_on
          </span>
          <div className="footer_sec1_txt">
            <h2>Find Us</h2>
            <p>Avenue Street, America.</p>
          </div>
        </div>
        <div className="footer_section_1_1">
          <span class="material-symbols-outlined call_icon">phone_in_talk</span>
          <div className="footer_sec1_txt">
            <h2>Dial</h2>
            <p>+91 9989345599</p>
          </div>
        </div>
        <div className="footer_section_1_1">
          <span class="material-symbols-outlined mail_icon">mail</span>
          <div className="footer_sec1_txt">
            <h2>Mail Us</h2>
            <p>devsid08@gmail.com</p>
          </div>
        </div>
      </div>
      <br />
      <hr />
      <div className="footer_section_2">
        <div className="footer_section_2_1">
          <h1>
            <span className="span_footer">The</span>
            <span className="span_bc">Snackers</span>
          </h1>
          <p>TheSnackers is a place made for foodies,</p>
          <p>
            {" "}
            we craft food made out of love ❤️, which will make you crave more.
          </p>
          <p>Browse through the varieties of food that you may like.</p>
          <h2>Follow Us</h2>
          <div className="footer_logos">
            <img src={fb} alt="facebook" />
            <img src={tweet} alt="twitter" />
            <img src={wa} alt="whatsapp" />
            <img src={insta} alt="instagram" />
          </div>
        </div>
        <div className="footer_section_2_2">
          <h2>Useful Links</h2>
          <ul>
            <li className="footer_link">FAQ's</li>
            <li className="footer_link">About Us</li>
            <li className="footer_link">Contact Us</li>
            <li className="footer_link"> Browse Menu</li>
          </ul>
        </div>
        <div className="footer_section_2_3">
          <h2>Subscribe</h2>
          <p>Don’t miss to subscribe to our new feeds,</p>
          <p> kindly fill the form below.</p>
          <div className="footer_subscribe_form">
            <input
              type="text"
              placeholder="Email Address"
              className="footer_input"
            />
            <button className="footer_button">
              <span class="material-symbols-outlined footer_snd_btn">send</span>
            </button>
          </div>
        </div>
      </div>
      <div className="footer_end">
        <p>
          Copyright &copy; <span className="span_bc">1985</span>, All Right
          Reserved The
          <span className="span_bc">Snackers</span>
        </p>
      </div>
    </div>
  );
}

export default Footer;
