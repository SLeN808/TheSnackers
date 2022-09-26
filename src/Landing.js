import React from "react";
import "./Landing.css";
import burger from "./assets/boorgir.png";
import chicken from "./assets/chicken.png";
import taco from "./assets/taco.png";
import fries from "./assets/fries.png";
import left from "./assets/left.png";
import right from "./assets/right.png";
import stores from "./assets/stores.png";
import time from "./assets/time.png";
import rating from "./assets/rating.png";
import tray from "./assets/tray.png";
import wave from "./assets/wave.png";
import noodle from "./assets/noodle.png";
import heart from "./assets/heart.png";
import girl1 from "./assets/girl1.jpg";
import girl2 from "./assets/girl2.jpg";
import male1 from "./assets/male1.jpg";
import male2 from "./assets/male2.jpg";

function Landing() {
  return (
    <div className="home">
      <div className="home_banner">
        <div className="banner_content">
          <div className="bc_left">
            <h1>
              Get <span className="span_bc">Delicious</span>
            </h1>
            <h1>
              Food Right <span className="span_bc">Now</span>.
            </h1>
            <p>
              hungry? get your desired foods just by a few{" "}
              <span className="span_bc">clicks</span>!
            </p>
            <div className="banner_buttons">
              <button className="banner_btn">How it Works! ✨</button>
              <button className="banner_btn2">Explore Menu 🍖</button>
            </div>
          </div>
          <div className="bc_right">
            <div className="circle2">
              <div className="circle">
                <img className="banner_img" src={burger} alt="burger" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home_menu">
        <h1>
          Combo's and <span className="span_bc">Offer's!</span>
        </h1>
        <div className="card_container">
          <button className="home_menu_btn">
            <img src={left} alt="left" />
          </button>
          <div className="home_menu_card">
            <img className="home_menu_card_img" src={taco} alt="card_img" />
            <p>Taco</p>
          </div>
          <div className="home_menu_card">
            <img className="home_menu_card_img" src={fries} alt="card_img" />
            <p>Combo Meals</p>
          </div>
          <div className="home_menu_card">
            <img className="home_menu_card_img" src={chicken} alt="card_img" />
            <p>Roasted Chicken</p>
          </div>
          <button className="home_menu_btn">
            <img src={right} alt="right" />
          </button>
        </div>
      </div>
      <div className="location">
        <div className="location_left">
          <h1>
            <span className="location_left_span_h1">
              we deliver food to your
            </span>{" "}
            <span className="span_bc">doorstep</span>!
          </h1>
          <p>
            Please select location, so that we can find all the restaurant's
            that deliver to you!
          </p>
          <div className="location_flex">
            <input
              className="restaurant_search"
              type="text"
              placeholder="  Enter Your Delivery Address ..."
            />
            <button className="restaurant_btn">
              <p>Locate Me </p>
              <span className="material-symbols-outlined">my_location</span>
            </button>
          </div>
        </div>
        {/* <div className="location_right">
          <img
            src={delivery}
            alt="pig_illustration"
            className="location_right_img"
          ></img>
        </div> */}
      </div>
      <div className="attract">
        <div className="attract_left">
          {/* cards on the lfet */}
          <div className="attract_left_top">
            <div className="attract_card">
              <img src={tray} alt="card-1" className="attract_card_img" />
              <h1>20K+ Meals</h1>
              <p>
                We have succesfully fulfilled the hunger of 20k+ people all over
                india.
              </p>
            </div>
            <div className="attract_card">
              <img src={stores} alt="card-2" className="attract_card_img" />
              <h1>18 centers</h1>
              <p>
                We now currently have 18 centers across india and we love that.
              </p>
            </div>
          </div>
          <div className="attract_left_bottom">
            <div className="attract_card">
              <img src={rating} alt="card-3" className="attract_card_img" />
              <h1>4.2 ⭐</h1>
              <p>You guys showed us true love, hence we stand at the top!</p>
            </div>
            <div className="attract_card">
              <img src={time} alt="card-4" className="attract_card_img" />
              <h1> 25 mins ..</h1>
              <p>
                We have a record of delivering under 25 minutes, that's how much
                we care for you.
              </p>
            </div>
          </div>
        </div>
        <div className="attract_right">
          {/* image on the right */}
          <h1>
            We deliver <span className="span_bc">food</span>, packed
          </h1>
          <h1>
            with <span className="span_bc">Love</span>. ❤️
          </h1>
          <p>
            Irresistible meals in easy-to-carry boxes.{" "}
            <span className="span_bc">All-in-1 meals, Biryanis,</span>
          </p>
          <p>
            <span className="span_bc">Curries, Parathas, Desserts & more</span>{" "}
            delivered piping hot.
          </p>
          <img src={noodle} alt="noodle" className="noodle" />
        </div>
      </div>
      {/* img svg wave */}
      <img src={wave} className="wave" alt="wave_svg" />
      <div className="testimonial_container">
        <div className="hero">
          <h1>
            <span className="span_bc">Glimpse</span> of love.
            <img src={heart} alt="heart" />
          </h1>
          <br />
          <br />
          <div className="testimonial_wrapper">
            <div className="slide-row">
              {/* card 1 */}
              <div className="slide-col">
                <div className="slide-text">
                  <h1>
                    Enjoying my meal from TheSnackers! Totally in love with
                    TheSnackers.
                  </h1>
                  <h1>~ Tirion.</h1>
                </div>
                <div className="slide-img">
                  <img src={male2} alt="person" />
                </div>
              </div>
              {/* card 2 */}
              <div className="slide-col">
                <div className="slide-text">
                  <h1>
                    Enjoying my meal from TheSnackers! Totally in love with
                    TheSnackers.
                  </h1>
                  <h1>~ Jessica.</h1>
                </div>
                <div className="slide-img">
                  <img src={girl2} alt="person" />
                </div>
              </div>
            </div>
            <div className="slide-row">
              {/* card 3 */}
              <div className="slide-col">
                <div className="slide-text">
                  <h1>
                    Enjoying my meal from TheSnackers! Totally in love with
                    TheSnackers.
                  </h1>
                  <h1>~ Micheal.</h1>
                </div>
                <div className="slide-img">
                  <img src={male1} alt="person" />
                </div>
              </div>
              {/* card 4 */}
              <div className="slide-col">
                <div className="slide-text">
                  <h1>
                    Enjoying my meal from TheSnackers! Totally in love with
                    TheSnackers.
                  </h1>
                  <h1>~ Samantha.</h1>
                </div>
                <div className="slide-img">
                  <img src={girl1} alt="person" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
}

export default Landing;
