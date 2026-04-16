import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, User } from "lucide-react";

function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      // 👉 Simulate login success
      navigate("/onboarding");
    } else {
      // 👉 Go to onboarding
      navigate("/onboarding");
    }
  };

  return (
    <div className="min-h-screen bg-[#f5efe9] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="font-newsreader text-2xl text-[#6D8A55]">
            Cushla Bakery
          </h2>

          <h1 className="text-2xl font-newsreader mt-2">
            {isLogin ? "Welcome Back" : "Create Account"}
          </h1>

          <p className="text-gray-500 text-sm mt-2">
            {isLogin
              ? "Sign in to continue your experience"
              : "Start your personalized bakery journey"}
          </p>
        </div>

        {/* Google Button */}
        <button
          type="button"
          className="w-full border border-gray-300 rounded-full py-2 flex items-center justify-center gap-2 hover:bg-gray-50 transition mb-4"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="google"
            className="w-5 h-5"
          />
          <span className="text-sm">Continue with Google</span>
        </button>

        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="flex-1 h-px bg-gray-200"></div>
          <span className="px-3 text-gray-400 text-sm">or</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name (signup only) */}
          {!isLogin && (
            <div className="flex items-center border rounded-full px-4 py-2">
              <User className="w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Full Name"
                className="w-full ml-2 outline-none text-sm"
              />
            </div>
          )}

          {/* Email */}
          <div className="flex items-center border rounded-full px-4 py-2">
            <Mail className="w-4 h-4 text-gray-400" />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full ml-2 outline-none text-sm"
            />
          </div>

          {/* Password */}
          <div className="flex items-center border rounded-full px-4 py-2">
            <Lock className="w-4 h-4 text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              className="w-full ml-2 outline-none text-sm"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#6D8A55] text-white py-2 rounded-full hover:bg-[#5a7348] transition"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        {/* Toggle */}
        <div className="text-center mt-6 text-sm">
          {isLogin ? (
            <>
              Don’t have an account?{" "}
              <button
                type="button"
                onClick={() => setIsLogin(false)}
                className="text-[#6D8A55] font-medium"
              >
                Sign up
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => setIsLogin(true)}
                className="text-[#6D8A55] font-medium"
              >
                Login
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Auth;
