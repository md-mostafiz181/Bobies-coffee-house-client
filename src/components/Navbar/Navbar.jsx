import { Link } from "react-router-dom";
import Container from "../Container/Container";

const Navbar = () => {
  const navInfo = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/products">Products</Link>
      </li>
    </>
  );

  return (
 
      <div className="bg-blue-300 ">
        <Container>
        <nav className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <button
                tabIndex={0}
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </button>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 w-52 rounded-box bg-base-100 p-2 shadow z-[1]"
              >
                {navInfo}
              </ul>
            </div>
            <a className="text-xl font-bold">Coffee House</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navInfo}</ul>
          </div>
          <div className="navbar-end">
            <button className="btn btn-sm">Login</button>
          </div>
        </nav>
        </Container>
      </div>

  );
};

export default Navbar;
