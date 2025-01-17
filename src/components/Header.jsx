import Video from "../assets/Fondo.mp4";
import Logo_pemex from "../assets/Logo_pemex.png";
import Logo_mexico from "../assets/Logo_mexico.png";

function Header() {
  return (
    <main className="relative h-screen w-screen overflow-hidden">
      <header className="py-6 px-6 flex items-center absolute top-0 w-full justify-between z-40 text-white bg-transparent">
        <div className="flex items-center gap-8">
          <img src={Logo_pemex} className="w-20" />
          <img src={Logo_mexico} className="w-32" />
        </div>

        <nav>
          <ul className="flex text-sm [&>li>a]:inline-block [&>li>a]:px-2">
            <li>
              <a href="https://www.gob.mx/tramites" className="hover:text-yellow-200 transition-colors duration-300">Trámites</a>
            </li>
            <li>
              <a href="https://www.gob.mx/" className="hover:text-yellow-200 transition-colors duration-300">Gobierno</a>
            </li>
          </ul>
        </nav>
      </header>
      <section className="h-full w-full text-center relative overflow-hidden text-white">
        <header className="z-30 relative">
          <h2 className="pt-60 lg:pt-80 text-6xl font-medium">
            Refinería Olmeca Dos Bocas
          </h2>
          <p className="text-base">La energía que mueve a México</p>
        </header>
        <div className="absolute top-0 bottom-0 w-full h-full">
          <video
            src={Video}
            autoPlay
            muted
            loop
            className="filter brightness-50 w-full h-full object-cover"
          ></video>
        </div>
      </section>
    </main>
  );
}

export default Header;
