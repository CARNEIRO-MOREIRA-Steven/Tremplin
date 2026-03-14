import Image from "next/image";
import styles from "./page.module.css";
import Banner from "./components/Banner/Banner";
import Quizz from "./components/Quizz/Quizz";
import IntroAgence from "./components/IntroAgence/IntroAgence";
import Offre from "./components/Offre/Offre";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import ListServices from "./components/ListServices/ListServices";
import ReviewsClient from "./components/Reviews/ReviewsClient";
import AboutAgence from "./components/AtoutTremplin/AtoutTremplin";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LoaderVideo from "./components/LoaderVideo/LoaderVideo";

import SmileIcon from '../../public/smile-icon.png'

export default function Home() {
  return (
    <LoaderVideo>
    <section>
      <Header />
      <Banner />
      <Quizz />
      <IntroAgence />
      <Offre />
      <Services />
      <About />
      <ListServices />
      <ReviewsClient 
      title = 'Tu peux te projeter, ou écouter ce qui sont déjà passé par la.'
      subtitle = {
      <>
        Voici ce qu&apos;ils ont vécu, <img className="icon-smile" src={SmileIcon.src} /> et ce que <br /> tremplin a changé pour eux
      </>
      } 
      details = '100% des clients sont conquis'
      link = {
        <a>Lire + d&apos;avis vérifiés</a>
      }
      />      
      <AboutAgence />
      <Footer /> 
   </section>
   </LoaderVideo>
  );
}
