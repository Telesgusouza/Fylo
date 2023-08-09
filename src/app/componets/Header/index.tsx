import style from "./style.module.css";

import imgLogo from "../../../../public/assets/images/logo.svg";
import Image from "next/image";

export default function Header() {
  return (
    <header className={style.container}>
      <div className="box">
        <Image src={imgLogo} loading="lazy" alt="Logo" />

        <ul>
          <li>Features </li>
          <li>TIme</li>
          <li>entrar</li>
        </ul>
      </div>
    </header>
  );
}
