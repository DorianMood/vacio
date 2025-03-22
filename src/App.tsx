import adidas from "./assets/adidas.webp";
import slp from "./assets/slp.webp";
import armani from "./assets/armani.webp";
import aytao from "./assets/aytao.webp";
import puma from "./assets/puma.webp";
import fakoshima from "./assets/fakoshima.webp";
import vk from "./assets/vk.webp";
import tombogo from "./assets/tombogo.webp";
import givenchy from "./assets/givenchy.webp";

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
            <li>{TEXT.SECTIONS.SHOWS.ITEMS[0]}</li>
            <li>{TEXT.SECTIONS.SHOWS.ITEMS[1]}</li>
            <li>{TEXT.SECTIONS.SHOWS.ITEMS[2]}</li>
          </ol>
        </section>

        <section className="p-10">
          <h2 className="text-3xl">{TEXT.SECTIONS.COMMERCIALS.TITLE}</h2>
          <ul></ul>
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
