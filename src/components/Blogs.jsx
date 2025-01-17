const blogsData = [
  {
    id: 1,
    title:
      "La Refinería Olmeca en Dos Bocas hoy hace historia y se suma al Sistema Nacional de Refinación para asegurar la autosuficiencia energética",
    description:
      "1 de julio de 2022: En el marco de la inauguración de la Primera Etapa Constructiva de la Refinería Olmeca en Dos Bocas, Paraíso, Tabasco, la Secretaría de Energía, Rocío Nahle García, recordó que el compromiso número 71 del presidente Andrés Manuel López Obrador fue construir la nueva refinería para asegurar la autosuficiencia energética, y por ello dio el encargo de trabajar para concretar este gran proyecto para tener una nueva infraestructura que hoy se suma al Sistema Nacional de Refinación.",
    category: "Noticias",
    categoryColor: "text-green-950",
    imageUrl:
      "https://dosbocas.energia.gob.mx/images/BoletinImg%2020220715_01.png",
    link: "https://dosbocas.energia.gob.mx/Documentos/11%20Bolet%C3%ADn%20de%20Prensa%20SENER%2020220701.pdf",
  },
  {
    id: 2,
    title:
      "La construcción de la refinería Olmeca en Dos Bocas presenta un avance físico del 69.2% y un avance financiero de 65.6%",
    description:
      "06 de diciembre de 2021: Con motivo de la Glosa del Tercer Informe de Labores del Gobierno de México, la secretaria de Energía, Rocío Nahle García compareció este lunes ante la Comisión de Energía de la Cámara de Senadores, donde detalló que la construcción de la refinería Olmeca en Dos Bocas, presenta un avance físico del 69.2% y un avance financiero de 65.6%. Asimismo, destacó que hasta el momento se han generado en México 130,922 empleos directos e indirectos.",
    category: "Noticias",
    categoryColor: "text-green-950",
    imageUrl:
      "https://dosbocas.energia.gob.mx/images/boletin_011221.png",
    link: "https://dosbocas.energia.gob.mx/Documentos/Bolet%C3%ADn%2006122021.pdf",
  },
  {
    id: 3,
    title: "La construcción de Dos Bocas tiene un avance del 24 por ciento",
    description:
      "18 de octubre de 2020: En gira de trabajo para supervisar la construcción de la nueva refinería de Dos Bocas, Tabasco, la secretaria de Energía, Rocío Nahle, señaló que la obra lleva un avance general del 24 %, el cual corresponde a la preparación del sitio de relleno, compactación, vialidades, compra temprana, diseño de ingeniería, licitaciones, cimentaciones, trabajo en áreas de servicios externos, estudios diversos y construcción de edificios.",
    category: "Noticias",
    categoryColor: "text-green-950",
    imageUrl:
      "https://dosbocas.energia.gob.mx/images/BoletinImg%2020201207_02.png",
    link: "https://dosbocas.energia.gob.mx/Documentos/11%20BOLETIN%20DE%20PRENSA%20SENER%2018102020.pdf",
  },
  {
    id: 4,
    title:
      "Firma Sener y Unidad de Inteligencia Financiera convenio de colaboración",
    description:
      "11 de junio de 2020: La Secretaría de Energía (SENER) y la Unidad de Inteligencia Financiera (UIF) firmaron un Convenio de Colaboración para el intercambio de información con el objetivo de cumplir con el mandato del Presidente de México, Andrés Manuel López Obrador, de acabar con la impunidad y corrupción.",
    category: "Noticias",
    categoryColor: "text-green-950",
    imageUrl:
      "https://dosbocas.energia.gob.mx/images/BoletinImg%2020200611_02.png",
    link: "https://dosbocas.energia.gob.mx/Documentos/10%20BOLETIN%20DE%20PRENSA%20SENER%2011062020.pdf",
  },
];

const Blogs = () => {
  return (
    <section className="lg:px-20">
        <h1 className="title-font text-3xl sm:text-4xl font-semibold text-green-950 mb-4 text-center mt-20">
            Noticias
          </h1>
    <ul className="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start p-10 lg:px-24 py-10">
      {blogsData.map((blog) => (
        <li
          key={blog.id}
          className="relative flex flex-col sm:flex-row xl:flex-col items-start"
        >
          {/* Content Section */}
          <div className="order-1 sm:ml-6 xl:ml-0">
            <h3 className="mb-1 text-slate-900 font-semibold">
              <span
                className={`mb-1 block text-sm leading-6 ${blog.categoryColor}`}
              >
                {blog.category}
              </span>
              {blog.title}
            </h3>
            <a
              className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 mt-6"
              href={blog.link}
            >
              Leer más
              <span className="sr-only">, {blog.title}</span>
              <svg
                className="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400"
                width="3"
                height="6"
                viewBox="0 0 3 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M0 0L3 3L0 6" />
              </svg>
            </a>
          </div>
          {/* Image Section */}
          <img
            src={blog.imageUrl}
            alt={blog.title}
            className="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full"
          />
        </li>
      ))}
    </ul>
    </section>
  );
};

export default Blogs;
