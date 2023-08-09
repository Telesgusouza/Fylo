import style from "./styles.module.css";

import Image from "next/image";

import imgAcessAnywhere from "../../../../public/assets/images/icon-access-anywhere.svg";
import imgSecurity from "../../../../public/assets/images/icon-security.svg";
import imgCollaboration from "../../../../public/assets/images/icon-collaboration.svg";

import imgAnyFile from "../../../../public/assets/images/icon-any-file.svg";
import { Reveal } from "../ScrollReveal";

export default function SectionInfo() {
  return (
    <section className={style.container}>
      <div className={style.containerInfo + " box"}>
        <Reveal>
          <article>
            <Image src={imgAcessAnywhere} loading="lazy" alt="icon acesso" />
            <strong>Acesse seus arquivos, em qualquer lugar</strong>
            <p>
              A capacidade de usar um smartphone, tablet ou computador para
              acessar sua conta significa que seus arquivos o seguem em todos os
              lugares.
            </p>
          </article>
        </Reveal>

        <Reveal>
          <article>
            <Image src={imgSecurity} loading="lazy" alt="icon acesso" />
            <strong>Segurança em que você pode confiar</strong>
            <p>
              A autenticação de dois fatores e a criptografia controlada pelo
              usuário são apenas alguns dos recursos de segurança que permitimos
              para ajudar a proteger seus arquivos.
            </p>
          </article>
        </Reveal>
        <Reveal>
          <article>
            <Image src={imgCollaboration} loading="lazy" alt="icon acesso" />
            <strong>Colaboração em tempo real</strong>
            <p>
              Compartilhe arquivos e pastas com segurança com amigos, familiares
              e colegas para colaboração ao vivo. Não são necessários anexos de
              e-mail.
            </p>
          </article>
        </Reveal>
        <Reveal>
          <article>
            <Image src={imgAnyFile} loading="lazy" alt="icon acesso" />
            <strong>Armazene qualquer tipo de arquivo</strong>
            <p>
              Esteja você compartilhando fotos de férias ou documentos de
              trabalho, o Fylo o cobre, permitindo que todos os tipos de arquivo
              sejam armazenados e compartilhados com segurança.
            </p>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
