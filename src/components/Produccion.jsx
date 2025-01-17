import produccion1 from "../assets/produccion1.avif";

function Produccion() {
  return (
    <section className="lg:px-40 px-10">
      <h1 className="title-font text-3xl sm:text-4xl font-semibold text-green-950 mb-4 text-center mt-20">
        Producción y avances
      </h1>
      <div className="lg:flex items-center">
        <p className="text-left">
          • En agosto, la refinería Dos Bocas inició la producción de gasolina,
          con 1,144 barriles diarios de Pemex Magna, marcando un hito en su
          operación.
          <br />
          <br />
          • Procesó 84,128 barriles diarios de petróleo, un incremento del 29%
          respecto al mes anterior.
          <br />
          <br />• Producción de petrolíferos: 28,364 barriles diarios de diésel
          (30% más que en julio). 9,506 barriles diarios de coque, utilizado en
          empresas fundidoras y acereras.
        </p>
        <img
          src={produccion1}
          alt="Producción de gasolina"
          className="w-[600px] lg:p-20 pt-10"
        />
      </div>
    </section>
  );
}

export default Produccion;
