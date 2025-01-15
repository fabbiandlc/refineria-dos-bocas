import Logo from "../assets/Logo_refineria.png";
import Carrusel from "./Carrusel";

function HeroSection() {
  return (
    <section className="text-gray-600 body-font px-4 sm:px-10 lg:px-40 bg-slate-50">
      <div className="flex flex-col lg:flex-row justify-between pt-10 lg:pt-20">
        {/* Text Section */}
        <div className="lg:pl-64 lg:pr-64 text-center">
          <h1 className="title-font text-3xl sm:text-4xl font-semibold text-green-950 mb-4">
            Bienvenidos a la web de la Refinería Olmeca Dos Bocas
          </h1>
          <p className="mb-6 text-sm text-lg text-black lg:px-5d">
            La Refinería Olmeca, anteriormente llamada refinería de Dos Bocas,​
            es una refinería de petróleo ubicada en el puerto de Dos Bocas en el
            estado mexicano de Tabasco. Junto a otras seis, forma parte del
            Sistema Nacional de Refinación (SNR), propiedad de la empresa
            Petróleos Mexicanos (PEMEX). Su construcción inició el 1 de agosto
            de 2019 y se inauguró el 1 de julio de 2022. Actualmente se
            encuentra en periodo de prueba.
          </p>
        </div>

        
      </div>

      {/* Carrusel */}
      <div className="mt-6">
        <Carrusel />
      </div>
    </section>
  );
}

export default HeroSection;
