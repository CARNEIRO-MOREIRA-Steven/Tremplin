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
import Modal from "./components/Modal/Modal";
import AboutAgence from "./components/AtoutTremplin/AtoutTremplin";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LoaderVideo from "./components/LoaderVideo/LoaderVideo";

export default function Home() {
  return (
    // <LoaderVideo>
    <section>
      <Header />
      <Banner />
      <Quizz />
      <IntroAgence />
      <Offre />
      <Services />
      <About />
      <ListServices />
      <Modal 
      title = {<> <h2 className='neon-title' data-neon>Ils ont travaillés avec nous</h2> <br /><h3 className="modal-subtitle">100% de nos clients satisfaits</h3> </>}
      />
      <ReviewsClient 
      title = 'Tu peux te projeter, ou lire ceux qui sont déjà passés par la.'
      subtitle = {
      <>
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
  //  </LoaderVideo>
  );
}
