// Images
import adidas from "./assets/adidas.webp";
import slp from "./assets/slp.webp";
import armani from "./assets/armani.webp";
import aytao from "./assets/aytao.webp";
import puma from "./assets/puma.webp";
import fakoshima from "./assets/fakoshima.webp";
import vk from "./assets/vk.webp";
import tombogo from "./assets/tombogo.webp";
import givenchy from "./assets/givenchy.webp";

// Videos
import mugler from "./assets/video/Mugler Fall Winter 2021 Film.webm";
import dior from "./assets/video/dior hc 25.webm";
import freshRawColdTechnoVibe from "./assets/video/Screen Recording 2025-02-16 at 8.11.41 PM_2.webm";
import fakoshimaSimplexityObjects from "./assets/video/fakoshima_simplexity_objects (720p).webm";
import tombogoInTheWild from "./assets/video/tombogo_in_the_wild (720p).webm";
import privateClub from "./assets/video/Private Club Malbec.webm";
import vkFable from "./assets/video/vk_fable_emi4ka_MM_v2 (1).webm";
import amazing from "./assets/video/amazing_red (720p).webm";

import { TEXT } from "./constants";

function App() {
  return (
    <>
      <header className="p-10">
        <h1 className="font-script text-9xl text-center">{TEXT.TITLE}</h1>
      </header>

      <main>
        <section>
          <h2 className="text-3xl p-10">{TEXT.SECTIONS.BRANDS.TITLE}</h2>
          <div className="overflow-hidden w-full relative">
            <ul className="flex w-max marquee py-4">
              <li>
                <img src={adidas} className="h-32" />
              </li>
              <li>
                <img src={slp} className="h-32" />
              </li>
              <li>
                <img src={armani} className="h-32" />
              </li>
              <li>
                <img src={aytao} className="h-32" />
              </li>
              <li>
                <img src={puma} className="h-32" />
              </li>
              <li>
                <img src={fakoshima} className="h-32" />
              </li>
              <li>
                <img src={vk} className="h-32 grayscale" />
              </li>
              <li>
                <img src={tombogo} className="h-32" />
              </li>
              <li>
                <img src={givenchy} className="h-32" />
              </li>
              <li>
                <img src={adidas} className="h-32" />
              </li>
              <li>
                <img src={slp} className="h-32" />
              </li>
              <li>
                <img src={armani} className="h-32" />
              </li>
              <li>
                <img src={aytao} className="h-32" />
              </li>
              <li>
                <img src={puma} className="h-32" />
              </li>
              <li>
                <img src={fakoshima} className="h-32" />
              </li>
              <li>
                <img src={vk} className="h-32 grayscale" />
              </li>
              <li>
                <img src={tombogo} className="h-32" />
              </li>
              <li>
                <img src={givenchy} className="h-32" />
              </li>
            </ul>
          </div>
        </section>

        <section className="p-10">
          <h2 className="text-3xl">{TEXT.SECTIONS.SHOWS.TITLE}</h2>
          <ol className="list-decimal">
            <li>
              <h3>{TEXT.SECTIONS.SHOWS.ITEMS[0]}</h3>
              <video autoPlay muted loop playsInline controls>
                <source src={mugler} type="video/webm" />
              </video>
            </li>
            <li>
              <h3>{TEXT.SECTIONS.SHOWS.ITEMS[1]}</h3>
              <video autoPlay muted loop playsInline controls>
                <source src={dior} type="video/webm" />
              </video>
            </li>
            <li>
              <h3>{TEXT.SECTIONS.SHOWS.ITEMS[2]}</h3>
              <video autoPlay muted loop playsInline controls>
                <source src={freshRawColdTechnoVibe} type="video/webm" />
              </video>
            </li>
          </ol>
        </section>

        <section className="p-10">
          <h2 className="text-3xl">{TEXT.SECTIONS.COMMERCIALS.TITLE}</h2>
          <ul className="grid grid-cols-3">
            <li>
              <video autoPlay muted loop playsInline controls>
                <source src={fakoshimaSimplexityObjects} type="video/webm" />
              </video>
            </li>
            <li>
              <video autoPlay muted loop playsInline controls>
                <source src={tombogoInTheWild} type="video/webm" />
              </video>
            </li>
            <li>
              <video autoPlay muted loop playsInline controls>
                <source src={privateClub} type="video/webm" />
              </video>
            </li>
            <li className="col-span-3">
              <video autoPlay muted loop playsInline controls>
                <source src={vkFable} type="video/webm" />
              </video>
            </li>
            <li className="col-span-3">
              <video autoPlay muted loop playsInline controls>
                <source src={amazing} type="video/webm" />
              </video>
            </li>
          </ul>
        </section>
      </main>

      <footer className="text-2xl p-10">
        <ul>
          <li>
            inst:{" "}
            <a href="http://instagram.com/vac1o" target="_blank">
              vac1o
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default App;
