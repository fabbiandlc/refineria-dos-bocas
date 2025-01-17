
function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto max-w-screen-xl px-4 md:flex md:items-center md:justify-between">
        {/* Sección Izquierda */}
        <div className="text-center md:text-left">
          <span className="text-sm">
            © 2025 <a href="https://portfolio-fabbiandlcs-projects.vercel.app/" className="hover:underline font-semibold">Fabián Cruz</a>
          </span>
        </div>

        {/* Navegación */}
        <ul className="flex flex-wrap items-center justify-center mt-4 md:mt-0 text-sm space-x-6">
          <li>
            <a href="https://portfolio-fabbiandlcs-projects.vercel.app/" className="hover:underline">Ir al CV</a>
          </li>
          
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
