import style from "./styles.module.css";

import imgMain from "../../../../public/assets/images/illustration-intro.png";

import Image from "next/image";
import Button from "../Button";
import { Reveal } from "../ScrollReveal";

export default function Main() {
  return (
    <main className={style.container + " headline"}>
      <div className={style.containerContent + " box"}>
        <Reveal>
          <Image src={imgMain} loading="lazy" alt="Imagem principal" />
        {/* </Reveal> */}

        {/* <Reveal> */}
          <h1>
            Todos os seus arquivos em um local seguro, acessível em qualquer
            lugar.
          </h1>
        {/* </Reveal> */}

        {/* <Reveal> */}
          <p>
            O Fylo armazena todos os seus arquivos mais importantes em um local
            seguro. Acesse-os sempre que precisar, compartilhe e colabore com
            amigos, família e colegas de trabalho.
          </p>
        {/* </Reveal> */}
        {/* <Reveal> */}
          <Button>Iniciar</Button>
        </Reveal>
      </div>
    </main>
  );
}
