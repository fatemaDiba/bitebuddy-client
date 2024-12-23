import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { oldUser, signInWithGoogle, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    oldUser(email, password)
      .then((res) => {
        // console.log(res.user);
        toast.success("Successfully Logged in user");
        setLoading(false);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error("Something went wrong");
      });
  };

  const handleGoogleBtn = () => {
    signInWithGoogle()
      .then((res) => {
        toast.success("Successfully logged in user with google");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast.success("Something went wrong");
        setLoading(false);
      });
  };

  return (
    <div>
      <Helmet>
        <title>LogIn-BiteBuddy</title>
      </Helmet>
      <div className="container md:w-11/12 mx-auto mb-20">
        <div className="card bg-base-100 w-[70%] md:w-[50%] mx-auto shrink-0 shadow-2xl">
          <div className="card-body  dark:text-white">
            <h2 className="font-bold text-center text-base md:text-xl">
              LogIn Now
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  required
                  placeholder="password"
                  className="input input-bordered"
                />

                <label className="label">
                  <a className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6 mb-4">
                <button className="btn bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-400 text-white">
                  Login
                </button>
              </div>
            </form>
            <div>
              <p className="text-sm mb-2">LogIn with google</p>
              <button
                className="btn font-bold bg-slate-200 hover:bg-slate-400 w-full dark:text-black"
                onClick={handleGoogleBtn}
              >
                Google <FcGoogle className="text-xl" />
              </button>
            </div>
            <div className="text-sm mt-3">
              <p>
                Don't Have An Account?
                <Link to="/register" className="text-purple-800 font-bold ml-2">
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
