import Head from "next/head";


import Footer from "./componets/Footer";
import Header from "./componets/Header";
import Main from "./componets/Main";
import SectionComments from "./componets/SectionComments";
import SectionInfo from "./componets/SectionInfo";
import SectionMoreInfo from "./componets/SectionMoreInfo";

export default function Home() {

  /*
  
  proj

  Fylo quardara todos os seus arquivos em um serviço na nuvem,
  acesse e compartilhe seus arquivos de qualquer, Fylo usa criptografia e autenticação de
  dois fatores.




  linkeding 
  
  Site Fylo (empresa ficticia) é um projeto leading page feito com Next e Sass,
  fylo oferece um serviço de armazenamento na nuvem com criptografia e autenticação de3
  dois fatores
  
  github: https://github.com/Telesgusouza/Fylo
  demo: 

  
  */

  return (
    <div>
      <head>
        <link rel="icon" type="image/png" sizes="any" href="/icon1.png" />
      </head>

      <Header />
      <Main />
      <SectionInfo />
      <SectionMoreInfo />
      <SectionComments />
      <Footer />
    </div>
  );
}
