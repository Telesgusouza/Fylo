"use client";

import style from "./style.module.css";
import Image from "next/image";

import img from "../../../../public/assets/images/bg-quotes.png";
import imgProfile1 from "../../../../public/assets/images/profile-1.jpg";
import imgProfile2 from "../../../../public/assets/images/profile-2.jpg";
import imgProfile3 from "../../../../public/assets/images/profile-3.jpg";

import { Reveal } from "../ScrollReveal";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function SectionComments() {
  return (
    <section className={style.container}>
      <div className={style.containerContent + " box"}>
        <Image
          src={img}
          loading="lazy"
          alt="foto aspas"
          className={style.Img}
        />

        <div className={style.containerComments}>
          <Reveal>
            <article>
              <p>
                A Fylo melhorou a produtividade de nossa equipe em uma ordem de
                magnitude. Desde a mudança, nossa equipe se tornou uma máquina
                de colaboração bem lubrificada.
              </p>

              <div className={style.infoUser}>
                <Image src={imgProfile1} loading="lazy" alt="foto do usuario" />
                <div>
                  <strong>Satish Patel</strong>
                  <span>Fundador e CEO, Huddle</span>
                </div>
              </div>
            </article>
          </Reveal>
          <Reveal>
            <article>
              <p>
                A Fylo melhorou a produtividade de nossa equipe em uma ordem de
                magnitude. Desde a mudança, nossa equipe se tornou uma máquina
                de colaboração bem lubrificada.
              </p>

              <div className={style.infoUser}>
                <Image src={imgProfile2} loading="lazy" alt="foto do usuario" />
                <div>
                  <strong>Bruce McKenzie</strong>
                  <span>Fundador e CEO, Huddle</span>
                </div>
              </div>
            </article>
          </Reveal>
          <Reveal>
            <article>
              <p>
                A Fylo melhorou a produtividade de nossa equipe em uma ordem de
                magnitude. Desde a mudança, nossa equipe se tornou uma máquina
                de colaboração bem lubrificada.
              </p>

              <div className={style.infoUser}>
                <Image src={imgProfile3} loading="lazy" alt="foto do usuario" />
                <div>
                  <strong>Iva Boyd</strong>
                  <span>Fundador e CEO, Huddle</span>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
