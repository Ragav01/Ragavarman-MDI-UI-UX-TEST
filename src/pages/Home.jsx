import { EngagedPeople } from "../components/EngagedPeople";
import { Features } from "../components/Features";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Integrations } from "../components/Integrations";
import { Reviews } from "../components/Reviews";
import { Steps } from "../components/Steps";

export const Home = () => {
  return (
    <>
    <Hero/>
    <Steps/>
    <Features/>
    <EngagedPeople/>
    <Integrations/>
    <Reviews/>
    <Footer/>
    </>
  )
}
