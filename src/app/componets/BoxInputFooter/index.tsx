import style from "./styles.module.css";
import Button from "../Button";
import { Reveal } from "../ScrollReveal";

export default function BoxInputFooter() {
  return (
    <Reveal>
      <div className={style.container}>
        <h3>Obtenha acesso antecipado hoje</h3>
        <p>
          Leva apenas um minuto para se inscrever e nosso nível inicial gratuito
          é extremamente generoso. Se você tiver alguma dúvida, nossa equipe de
          suporte ficará feliz em ajudá-lo.
        </p>
        <div>
          <input type="text" placeholder="email@example.com" />
          <Button>Comece gratuitamente</Button>
        </div>
      </div>
    </Reveal>
  );
}
