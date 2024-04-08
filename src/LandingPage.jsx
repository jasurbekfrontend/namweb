import React, { useState } from "react";
import logo from "./assets/img/logo.png";
import logo_in_dark from "./assets/img/logo_in_dark.png";
import { Link } from "react-router-dom";
import illustration from "./assets/img/illustration.png";
import portfolio1 from "./assets/img/portfolio1.png";
import portfolio2 from "./assets/img/portfolio2.png";
import portfolio3 from "./assets/img/portfolio3.png";
import phone_password from "./assets/img/phone_password.png";
import woman_opening_phone from "./assets/img/woman_opening_phone.png";
import client1 from "./assets/svg/client1.svg";
import client2 from "./assets/svg/client2.svg";
import client3 from "./assets/svg/client3.svg";
import client4 from "./assets/svg/client4.svg";
import client5 from "./assets/svg/client5.svg";
import client6 from "./assets/svg/client6.svg";
import client7 from "./assets/svg/client7.svg";
import membership from "./assets/svg/membership.svg";
import national from "./assets/svg/national.svg";
import clubs from "./assets/svg/clubs.svg";
import double_user from "./assets/svg/double_user.svg";
import three_hands from "./assets/svg/three_hands.svg";
import finger_touching from "./assets/svg/finger_touching.svg";
import payment_card from "./assets/svg/payment_card.svg";

import { FaArrowRightLong } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
const LandingPage = () => {
  const [clients, setClients] = useState([
    client1,
    client2,
    client3,
    client4,
    client5,
    client6,
    client7,
  ]);
  const [services, setServices] = useState([
    {
      id: 1,
      img: membership,
      title: "Membership Organisations",
      subtitle:
        "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      id: 2,
      img: national,
      title: "National Associations",
      subtitle:
        "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      id: 3,
      img: clubs,
      title: "Clubs And Groups",
      subtitle:
        "Our membership management software provides full automation of membership renewals and payments",
    },
  ]);
  const [result, setResult] = useState([
    { id: 1, img: double_user, amount: "2,245,341", name: "Members" },
    { id: 2, img: three_hands, amount: "46,328", name: "Clubs" },
    { id: 3, img: finger_touching, amount: "828,867", name: "Event Bookings" },
    { id: 4, img: payment_card, amount: "1,926,436", name: "Payments" },
  ]);

  const [context, setContext] = useState([
    {
      id: 1,
      img: phone_password,
      title: "The unseen of spending three years at Pixelgrade",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sitamet justo ipsum. Sed accumsan quam vitae est varius fringilla.Pellentesque placerat vestibulum lorem sed porta. Nullam mattistristique iaculis. Nullam pulvinar sit amet risus pretium auctor.Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donecelementum pulvinar odio.",
    },
    {
      id: 2,
      img: woman_opening_phone,
      title: "How to design your site footer like we did",
      subtitle:
        "Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.",
    },
  ]);
  return (
    <div className="wrapper">
      <div className="first-section">
        <nav>
          <div className="logo">
            <img src={logo} alt="" />
          </div>

          <div className="links">
            <Link>Home</Link>
            <Link>Service</Link>
            <Link>Feature</Link>
            <Link>Product</Link>
            <Link>Testimonial</Link>
            <Link>FAQ</Link>
          </div>
          <div className="nav-buttons">
            <button>Login</button>
            <button>Sign up</button>
          </div>
        </nav>
        <div className="section-body">
          <div className="section-title">
            <b>
              Lessons and insights <h5>from 8 years</h5>
            </b>
            <span>
              Where to grow your business as a photographer: site or social
              media?
            </span>
            <button>Register</button>
          </div>
          <div className="section-image">
            <img src={illustration} alt="" />
          </div>
        </div>
      </div>
      <div className="second-section">
        <b>Our Clients</b>
        <span>We have been working with some Fortune 500+ clients</span>
        <div className="client-logos">
          {clients.map((client, index) => (
            <img src={client} alt="" key={index} />
          ))}
        </div>
        <b>Manage your entire community in a single system</b>
        <span>Who is Nextcent suitable for?</span>
        <div className="services-container">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <img src={service.img} alt="" />
              <b>{service.title}</b>
              <p>{service.subtitle}</p>
            </div>
          ))}
        </div>
      </div>

      {context.slice(0, 1).map((item) => (
        <div className="third-section" key={item.id}>
          <div className="left-image">
            <img src={item.img} alt="" />
          </div>
          <div className="right-title">
            <b>{item.title}</b>
            <span>{item.subtitle}</span>
            <button>Learn More</button>
          </div>
        </div>
      ))}

      <div className="half-section">
        <div className="mini-title">
          <b>
            Helping a local <h5>business reinvent itself</h5>
          </b>
          <span>We reached here with our hard work and dedication</span>
        </div>
        <div className="mini-results">
          <div className="top-results">
            {result.slice(0, 2).map((result, index) => (
              <div className="result" key={index}>
                <img src={result.img} alt="" />
                <div className="result-title">
                  <b>{result.amount}</b>
                  <p>{result.name}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bottom-results">
            {result.slice(2, 4).map((result, index) => (
              <div className="result" key={index}>
                <img src={result.img} alt="" />
                <div className="result-title">
                  <b>{result.amount}</b>
                  <p>{result.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {context.slice(1, 2).map((item) => (
        <div className="third-section" key={item.id}>
          <div className="left-image">
            <img src={item.img} alt="" />
          </div>
          <div className="right-title">
            <b>{item.title}</b>
            <span>{item.subtitle}</span>
            <button>Learn More</button>
          </div>
        </div>
      ))}
      <div className="portfolio">
        <b>Caring is the new marketing</b>
        <span>
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who's joining the community, read about
          how our community are increasing their membership income and lot's
          more.​
        </span>
        <div className="portfolio-container">
          <div className="portfolio-card">
            <img src={portfolio1} alt="" />
            <p>Creating Streamlined Safeguarding Processes with OneRen</p>
            <a href="https://frossh.uz/">https://frossh.uz/</a>
          </div>
          <div className="portfolio-card">
            <img src={portfolio2} alt="" />
            <p>
              What are your safeguarding responsibilities and how can you manage
              them?
            </p>
            <a href="https://sanone.uz/">https://sanone.uz/</a>
          </div>
          <div className="portfolio-card">
            <img src={portfolio3} alt="" />
            <p>Revamping the Membership Model with Triathlon Australia</p>
            <a href="http://asilmedia.org/">http://asilmedia.org/</a>
          </div>
        </div>
      </div>
      <div className="ending-section">
        <p>Pellentesque suscipit fringilla libero eu.</p>
        <button>
          Get a Demo <FaArrowRightLong />
        </button>
      </div>
      <footer>
        <div className="left-footer">
          <img src={logo_in_dark} alt="" />
          <p className="footer-text">Copyright © 2020 Nexcent ltd.</p>
          <p className="footer-text">All rights reserved</p>
          <div className="footer-icons">
            <div className="icon">
              <FaInstagram />
            </div>
            <div className="icon">
              <FaTelegramPlane />
            </div>
            <div className="icon">
              <FaYoutube />
            </div>
            <div className="icon">
              <FaTwitter />
            </div>
          </div>
        </div>
        <div className="middle-footer">
          <div>
            <p>Company</p>
            <Link>About us</Link>
            <Link>Blog</Link>
            <Link>Contact us</Link>
            <Link>Pricing</Link>
            <Link>Testimonials</Link>
          </div>
          <div>
            <p>Status</p>
            <Link>Help center</Link>
            <Link>Terms of service</Link>
            <Link>Legal</Link>
            <Link>Privacy policy</Link>
            <Link>Status</Link>
          </div>
        </div>
        <div className="right-footer">
          <p>Stay up to date</p>
          <label>
            <input type="text" placeholder="Your email address" />
            <button>
              <FiSend />
            </button>
          </label>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
