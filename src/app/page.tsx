import Head from "next/head";


import Footer from "./componets/Footer";
import Header from "./componets/Header";
import Main from "./componets/Main";
import SectionComments from "./componets/SectionComments";
import SectionInfo from "./componets/SectionInfo";
import SectionMoreInfo from "./componets/SectionMoreInfo";

export default function Home() {

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
