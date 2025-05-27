import { Link } from "react-router-dom";
import Button from "../Button/Button";
const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between items-center bg-blue-700 text-white py-4 px-[60px]">
      <ul>
        <li>
          <Link className="font-bold text-2xl">Todo-Apps</Link>
        </li>
      </ul>
      <ul className="flex flex-row gap-4 justify-between items-center font-semibold">
        <li>
          <Link className="hover:underline" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="hover:underline" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="hover:underline" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
      <ul className="flex flex-row gap-4 justify-between items-center font-semibold">
        <li>
          <Button>Login</Button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
