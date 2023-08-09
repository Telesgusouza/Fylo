import style from "./styles.module.css";

import Image from "next/image";

import imgStayProductive from "../../../../public/assets/images/illustration-stay-productive.png";
import imgArrow from "../../../../public/assets/images/icon-arrow.svg";
import { Reveal } from "../ScrollReveal";

export default function SectionMoreInfo() {
  return (
    <section className={style.container}>
      <div className={style.containerContent + " box"}>
        <Reveal>
          <Image
            src={imgStayProductive}
            loading="lazy"
            alt="foto compania"
            className={style.imgMain}
          />
        </Reveal>
        <Reveal>
          <article>
            <h2>Mantenha-se produtivo, onde quer que esteja</h2>
            <p>
              Nunca deixe que a localização seja um problema ao acessar seus
              arquivos. A Fylo atende a todas as suas necessidades de
              armazenamento de arquivos.
            </p>
            <p>
              Compartilhe arquivos e pastas com segurança com amigos, familiares
              e colegas para colaboração ao vivo. Não são necessários anexos de
              e-mail.
            </p>
            <span>
              Veja como o Fylo funciona{" "}
              <Image src={imgArrow} loading="lazy" alt="seta" />{" "}
            </span>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
