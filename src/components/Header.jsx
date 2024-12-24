import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";

const Header = () => {
  const [showUserName, setShowUserName] = useState(false);
  const { user, logOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleShowUserName = () => {
    setShowUserName(true);
  };
  const handleRemoveUserName = () => {
    setShowUserName(false);
  };

  const handleLogOutBtn = (e) => {
    e.preventDefault();
    logOutUser()
      .then((res) => {
        console.log("User Successfully Logged Out");
        navigate("/");
      })
      .catch((error) => {
        console.log(first)("Something went wrong!");
      });
  };

  const navList = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/available-foods">Available Foods</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/add-food">Add Food</NavLink>
        </li>
      )}
      {user && (
        <li>
          <NavLink to="/manage-myfoods">Manage My Foods</NavLink>
        </li>
      )}
      {user && (
        <li>
          <NavLink to="/request-myfood">My Food Request</NavLink>
        </li>
      )}
    </>
  );

  return (
    <div>
      <div className="container mx-auto md:w-11/12 py-5">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
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
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu-sm dropdown-content bg-base-100 rounded-box z-[30] mt-3 w-52 p-2 shadow "
              >
                {navList}
              </ul>
            </div>
            <a className="text-xl dark:text-white md:text-3xl font-bold ml-3">
              BiteBuddy
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu-horizontal dark:text-white px-1 gap-6 text-sm">
              {navList}
            </ul>
          </div>

          <div className="navbar-end">
            {user && (
              <div className="flex gap-4 ">
                <div
                  className={`text-sm dark:text-white ${
                    showUserName ? "block" : "hidden"
                  }`}
                >
                  {user?.displayName}
                </div>
                <div
                  onMouseEnter={handleShowUserName}
                  onMouseLeave={handleRemoveUserName}
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost dark:border-white/70 btn-circle avatar"
                >
                  <div className="w-10 rounded-full relative">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src={user?.photoURL}
                    />
                  </div>
                </div>
              </div>
            )}

            {user ? (
              <button
                onClick={handleLogOutBtn}
                className="btn bg-slate-200 dark:text-black hover:bg-slate-400 ml-3"
              >
                Log Out
              </button>
            ) : (
              <div>
                <Link
                  to="/login"
                  className="btn bg-slate-200 dark:text-black hover:bg-slate-400 ml-3"
                >
                  LogIn
                </Link>
                <Link
                  to="/register"
                  className="btn bg-slate-200 dark:text-black hover:bg-slate-400 ml-3"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
