import React from "react";

import Telegram from "src/assets/images/telegram.svg";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-seo">Все права защищены. srok.net 2023</div>
          <a className="footer-mail" href="mailto:info@srok.net">
            info@srok.net
          </a>
          <div className="footer-media">
            <a className="footer-media-links" href="https://t.me/srok_net">
              <img src={Telegram} alt="Telegram" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
