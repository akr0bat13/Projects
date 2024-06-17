import React from "react";

import Telegram from "src/assets/images/telegram.svg";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-seo">
            Вся представленная информация носит информационный характер и ни при
            каких условиях не является публичной офертой. Все права защищены.
            Использование информации разрешено только с письменного согласия
            интернет-ресурса. srok.net {new Date().getFullYear()}
          </div>
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
