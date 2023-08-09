import Image from "next/image";
import style from "./styles.module.css";

import BoxInputFooter from "../BoxInputFooter";

import imgLogo from "../../../../public/assets/images/logo.svg";
import imgLocation from "../../../../public/assets/images/icon-location.svg";
import imgPhone from "../../../../public/assets/images/icon-phone.svg";
import imgEmail from "../../../../public/assets/images/icon-email.svg";

import imgFacebook from '../../../../public/assets/images/icon-facebook.svg';
import imgTwitter from "../../../../public/assets/images/icon-twitter.svg";
import imgInstagram from '../../../../public/assets/images/icon-instagram.svg';

export default function Footer() {
  return (
    <footer className={style.container}>
      <div className={style.containerContent + " box"}>
        <BoxInputFooter />

        <Image
          src={imgLogo}
          loading="lazy"
          alt="Logo do site"
          className={style.imgLogo}
        />

        <div className={style.listContent}>
          <div>
            <Image src={imgLocation} loading="lazy" alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>

          <ul>
            <li>
              <Image src={imgPhone} loading="lazy" alt="logo phone" />{" "}
              +1-543-123-4567
            </li>
            <li>
              <Image src={imgEmail} loading="lazy" alt="logo email" />
              example@fylo.com
            </li>
          </ul>

          <ul>
            <li>Sobre nós</li>

            <li>Empregos</li>

            <li>Imprensa</li>

            <li>Blog</li>
          </ul>

          <ul>
            <li>Contate-nos</li>
            <li>Termos</li>
            <li>Privacidade</li>
          </ul>

          <div className={style.containerSocial} >
            <div className={style.social} >
              <Image src={imgFacebook} loading="lazy" alt="Facebook" />
            </div>

            <div className={style.social} >
              <Image src={imgTwitter} loading="lazy" alt="Twitter" />
            </div>

            <div className={style.social} >
              <Image src={imgInstagram} loading="lazy" alt="Instagram" />
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
