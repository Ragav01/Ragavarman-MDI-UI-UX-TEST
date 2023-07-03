import { EngagedPeople } from "./components/EngagedPeople";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Integrations } from "./components/Integrations";
import { Navbar } from "./components/Navbar";
import { Reviews } from "./components/Reviews";
import { Steps } from "./components/Steps";

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Steps/>
      <Features/>
      <EngagedPeople/>
      <Integrations/>
      <Reviews/>
      <Footer/>
    </>
  );
}

export default App;
