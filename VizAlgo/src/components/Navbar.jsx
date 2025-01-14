import { Link } from "react-router-dom";
import { FaHome, FaCode } from "react-icons/fa"; // Importing icons for Home and Algorithm

export default function Navbar() {
  return (
    <header className="w-full bg-[#0D7C66] p-4 shadow-md">
      <div className="container mx-auto flex justify-around items-center">
        {/* Logo Section */}
        <Link
          to="/"
          className="text-2xl font-extrabold flex items-center gap-3 text-white hover:text-[#D7C3F1] transition-colors duration-300"
        >
          <img
            src="../public/Logo.png" // Path to your logo
            alt="Logo"
            width={140}
            height={30}
            className="object-contain rounded-lg "
          />
        </Link>

        {/* Navigation Menu */}
        <nav>
          <ul className="flex space-x-8 text-lg">
            {/* Home Link */}
            <li>
              <Link
                to="/"
                className="flex items-center gap-8 text-white font-medium py-2 px-4 rounded-full hover:bg-white hover:text-[#0D7C66] transition-all duration-300 transform hover:scale-110 shadow-md"
              >
                <FaHome size={22} />
                Home
              </Link>
            </li>

            {/* Algorithm Link */}
            <li>
              <Link
                to="/algorithm"
                className="flex items-center gap-8 text-white font-medium py-2 px-4 rounded-full hover:bg-white hover:text-[#0D7C66] transition-all duration-300 transform hover:scale-110 shadow-md"
              >
                <FaCode size={22} />
                Algorithm
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
