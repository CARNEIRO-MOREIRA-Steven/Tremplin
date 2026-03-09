import Image from "next/image";
import styles from "./page.module.css";
import Banner from "./components/Banner/Banner";
import Quizz from "./components/Quizz/Quizz";
import IntroAgence from "./components/IntroAgence/IntroAgence";
import Offre from "./components/Offre/Offre";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import ListServices from "./components/ListServices/ListServices";
import Reviews from "./components/Reviews/Reviews";
import AboutAgence from "./components/AtoutTremplin/AtoutTremplin";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LoaderVideo from "./components/LoaderVideo/LoaderVideo";
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
      <Reviews />
      <AboutAgence />
      <Footer /> 
   </section>
   </LoaderVideo>
  );
}
