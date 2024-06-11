import { Link, useNavigate } from "react-router-dom";
import useUser from "./hooks/useUser";
import { getAuth, signOut } from "firebase/auth";
import logo from "./assets/logo.png";
const NavBar = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  return (
    <nav className="flex justify-between items-center py-0 px-8 bg-transparent backdrop-filter backdrop-blur-md text-black mb-8">
      <div className="flex items-center space-x-4">


        {/* Logo and website name */}


        <Link to="/" className="flex items-center">
          <img src={logo} alt="Website Logo" className="h-11 w-13 mr-1 hover:text-gray-200" />
          <span className="text-xl font-bold">Bloggy</span>
        </Link>
      </div>
      <ul className="flex justify-center space-x-4">
        <li>
          <Link to="/" className="text-black hover:text-gray-200">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-black hover:text-gray-200">
            About
          </Link>
        </li>
        <li>
          <Link to="/articles" className="text-black hover:text-gray-200">
            Articles
          </Link>
        </li>
      </ul>

      <div className="flex items-center space-x-4">
        {user ? (
          <button
            type="button"
            className="text-sm bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded"
            onClick={() => {
              signOut(getAuth());
            }}
          >
            Logout
          </button>
        ) : (
          <button
            className="text-sm bg-teal-400 hover:bg-teal-300 text-black px-4 py-2 rounded"
            onClick={() => {
              navigate("/login");
            }}
          >
            Log In
          </button>
        )}
      </div>
    </nav>
  );
};
export default NavBar;
