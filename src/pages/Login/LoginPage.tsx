import medicine from "../../assets/medicine.png";
import doctors from "../../assets/doctors.png";
import { loginSchema } from "../../validators/auth.validator";
import { AuthApi } from "../../api/auth";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async () => {
    setLoading(true);
    const result = loginSchema.safeParse({ email, password });

    if (!result.success) {
      toast.error(result.error.issues[0].message);
      setLoading(false);
      return;
    }

    try {
      const response = await AuthApi.Login(result.data);

      if (response.success) {
        toast.success("Login successful", { duration: 8000 });
        navigate("/dashboard", { replace: true });
      } else {
        toast.error(response.message || "Login failed", { duration: 8000 });
      }
    } catch (error: any) {
      console.error("Login failed ", error);
      const message = error.response?.data?.message || "Login failed";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="bg-primary/20 h-screen w-screen flex flex-row justify-center items-center">
        <div
          className="bg-white/70 backdrop-blur-lg shadow-xl w-[400px] p-10 pb-2 rounded-xl "
          data-aos="flip-left"
        >
          {/* logo and title  */}
          <div className="flex gap-2 mb-6 items-center justify-center">
            <img src={medicine} alt="logo" width={28} height={28} />
            <h1 className="text-3xl font-ui">Pharmacy</h1>
          </div>
          <div className="flex flex-col justify-center items-center text-center mb-5">
            <h1 className="text-2xl font-ui">Welcome back</h1>
            <p className="font-body font-light">
              Enter your credentials to access your pharmacy dashboard
            </p>
          </div>
          {/* email password fields  */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}
            className="flex flex-col "
          >
            <div className="flex flex-col gap-1.5 ">
              <label className="font-ui">Email</label>
              <input
                type="email"
                value={email}
                placeholder="Enter your email"
                className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/60 transition-all"
                onChange={(e) => setEmail(e.target.value)}
              />

              <label className="font-ui">Password</label>
              <input
                type="password"
                value={password}
                placeholder="Enter your password"
                className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/60 transition-all"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* remember me btn   */}
            <div className="flex items-center justify-between mt-3 text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-primary font-body" />
                Remember me
              </label>
            </div>

            {/* sign in btn   */}
            <div className="">
              <button
                className="font-ui text-white font-bold
              flex w-full h-9 rounded-md bg-primary/80 hover:bg-primary transition-all  mt-2.5 items-center justify-center
              "
                disabled={loading}
              >
                {loading ? (
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                  </svg>
                ) : (
                  "Sign In"
                )}
              </button>
            </div>
          </form>

          <div className="flex justify-center gap-1 mt-5 ">
            <p className="font-body">Don't remember password?</p>
            <button className="text-primary/80 hover:text-primary cursor-pointer font-ui">
              Reset
            </button>
          </div>
        </div>
        <img
          src={doctors}
          alt="Doctors"
          className="max-h-screen"
          data-aos="fade-left"
          data-aos-duration="3000"
        />
      </div>
    </>
  );
};

export default LoginPage;
