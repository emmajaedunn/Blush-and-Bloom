import About from "./components/About";
import Booking from "./components/Booking";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import PriceList from "./components/PriceList";
import Services from "./components/Services";
import Visit from "./components/Visit";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <PriceList />
        <Booking />
        <About />
      </main>
      <Visit />
    </>
  );
}
