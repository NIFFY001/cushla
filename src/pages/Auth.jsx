import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, User } from "lucide-react";
import { motion } from "framer-motion";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";

// 🎂 DESKTOP CAKE (UNCHANGED)
function Cake({ mouse }) {
  const ref = useRef();

  useFrame(() => {
    if (!ref.current) return;

    ref.current.rotation.y += (mouse.x * 0.5 - ref.current.rotation.y) * 0.05;
    ref.current.rotation.x += (-mouse.y * 0.3 - ref.current.rotation.x) * 0.05;
  });

  return (
    <Float speed={2} floatIntensity={2}>
      <group ref={ref}>
        <mesh position={[0, -0.5, 0]}>
          <cylinderGeometry args={[1.6, 1.6, 1, 64]} />
          <meshStandardMaterial color="#6D8A55" />
        </mesh>

        <mesh position={[0, 0.4, 0]}>
          <cylinderGeometry args={[1.3, 1.3, 0.8, 64]} />
          <meshStandardMaterial color="#a3b18a" />
        </mesh>

        <mesh position={[0, 1, 0]}>
          <sphereGeometry args={[1.1, 64, 64]} />
          <meshStandardMaterial color="#e9f0e3" />
        </mesh>
      </group>
    </Float>
  );
}

function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/onboarding");
  };

  // 🍰 BEAUTIFUL CAKES (replace later if you want)
  const cakes = [
    {
      img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
      title: "Chocolate Elegance",
    },
    {
      img: "https://images.unsplash.com/photo-1601972599720-36938d4ecd31",
      title: "Strawberry Delight",
    },
    {
      img: "https://images.unsplash.com/photo-1621303837174-89787a7d4729",
      title: "Minimal Cream Cake",
    },
    {
      img: "https://images.unsplash.com/photo-1607478900766-efe13248b125?auto=format&fit=crop&w=1200&q=80",
      title: "Cup Cake",
    },
  ];

  return (
    <div
      onMouseMove={(e) => {
        if (isMobile) return;
        const x = (e.clientX / window.innerWidth) * 2 - 1;
        const y = (e.clientY / window.innerHeight) * 2 - 1;
        setMouse({ x, y });
      }}
      className="relative min-h-screen flex items-center justify-center bg-[#f5efe9] overflow-hidden"
    >
      {/* ================= MOBILE CAKE SCROLLER ================= */}
      {isMobile && (
        <div className="absolute top-10 w-full overflow-x-auto flex gap-6 px-6 snap-x snap-mandatory">
          {cakes.map((cake, index) => (
            <motion.div
              key={index}
              className="min-w-[220px] h-[280px] rounded-2xl overflow-hidden relative snap-center shadow-xl"
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={cake.img}
                alt=""
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20" />

              {/* Text */}
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-newsreader text-lg">{cake.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* ================= DESKTOP (UNCHANGED) ================= */}
      {!isMobile && (
        <div className="absolute inset-0 opacity-80">
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={1} />
            <directionalLight position={[2, 2, 5]} />
            <Cake mouse={mouse} />
          </Canvas>
        </div>
      )}

      {/* ================= FORM ================= */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className={`relative w-full max-w-md bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl p-8 z-10 ${
          isMobile ? "mt-[320px]" : ""
        }`}
      >
        <div className="text-center mb-6">
          <h2 className="font-newsreader text-2xl text-[#6D8A55]">
            Cushla Bakery
          </h2>

          <h1 className="text-2xl font-newsreader mt-2">
            {isLogin ? "Welcome Back" : "Create Account"}
          </h1>
        </div>

        <button className="w-full border border-gray-300 rounded-full py-2 flex items-center justify-center gap-2 mb-4">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            className="w-5 h-5"
          />
          <span className="text-sm">Continue with Google</span>
        </button>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div className="flex items-center border rounded-full px-4 py-2">
              <User className="w-4 h-4 text-gray-400" />
              <input
                className="ml-2 w-full outline-none text-sm"
                placeholder="Full Name"
              />
            </div>
          )}

          <div className="flex items-center border rounded-full px-4 py-2">
            <Mail className="w-4 h-4 text-gray-400" />
            <input
              className="ml-2 w-full outline-none text-sm"
              placeholder="Email"
            />
          </div>

          <div className="flex items-center border rounded-full px-4 py-2">
            <Lock className="w-4 h-4 text-gray-400" />
            <input
              type="password"
              className="ml-2 w-full outline-none text-sm"
              placeholder="Password"
            />
          </div>

          <motion.button
            whileTap={{ scale: 0.9 }}
            className="w-full bg-[#6D8A55] text-white py-2 rounded-full"
          >
            {isLogin ? "Login" : "Sign Up"}
          </motion.button>
        </form>

        <div className="text-center mt-6 text-sm">
          {isLogin ? (
            <>
              Don’t have an account?{" "}
              <button onClick={() => setIsLogin(false)}>Sign up</button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button onClick={() => setIsLogin(true)}>Login</button>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default Auth;
