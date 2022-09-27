import React from "react";
import "./Footer.css";

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
    </div>
  );
}

export default Footer;
