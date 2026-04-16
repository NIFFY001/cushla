import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Icons
import sugar from "../assets/sugar.png";
import glutton from "../assets/glutton.png";
import nutrient from "../assets/nutrient.png";
import plant from "../assets/plant.png";
import nut from "../assets/nut.png";

// Images
import onboard3 from "../assets/onboard3.png";

function Onboarding() {
  const [selected, setSelected] = useState([]);
  const navigate = useNavigate();

  const options = [
    { label: "Low Sugar", icon: sugar },
    { label: "Gluten-Free", icon: glutton },
    { label: "Nutrient-Dense", icon: nutrient },
    { label: "Plant-Based", icon: plant },
    { label: "Nut-Free", icon: nut },
  ];

  const toggleOption = (option) => {
    if (selected.includes(option)) {
      setSelected(selected.filter((item) => item !== option));
    } else {
      setSelected([...selected, option]);
    }
  };

  return (
    <div className="min-h-screen bg-[#FDF8EF] flex items-center justify-center px-4">
      {/* Main Card */}
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl grid md:grid-cols-2 overflow-hidden">
        {/* LEFT IMAGE (Desktop only) */}
        <div className="relative hidden md:block">
          <img
            src={onboard3}
            alt="Onboarding"
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20" />

          {/* Badge */}
          <div className="absolute top-4 left-4 bg-yellow-400 text-xs px-3 py-1 rounded-full font-semibold">
            New Cushla
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="p-6 md:p-10 flex flex-col justify-between">
          {/* MOBILE IMAGE */}
          <div className="md:hidden mb-6 relative rounded-xl overflow-hidden">
            <img
              src={onboard3}
              alt="Onboarding"
              className="w-full h-[200px] object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20" />

            {/* Text */}
            <div className="absolute bottom-3 left-4 text-white text-sm font-newsreader">
              Crafted for your taste
            </div>
          </div>

          {/* Top */}
          <div>
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-newsreader text-[#6D8A55] text-lg">
                Cushla Bakery
              </h2>

              <button
                onClick={() => navigate("/")}
                className="text-gray-400 hover:text-gray-600 text-xl"
              >
                ×
              </button>
            </div>

            {/* Step */}
            <p className="text-xs text-gray-400 uppercase mb-2">Step 1 of 3</p>

            {/* Title */}
            <h1 className="font-newsreader text-3xl mb-3">
              Your Taste Profile
            </h1>

            <p className="text-gray-500 mb-6 text-sm">
              Tell us your taste, and we’ll curate our collection of artisanal
              treats specifically for you.
            </p>

            {/* OPTIONS */}
            <div className="grid grid-cols-2 gap-3">
              {options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => toggleOption(option.label)}
                  className={`flex items-center gap-3 text-sm px-4 py-3 rounded-xl border transition ${
                    selected.includes(option.label)
                      ? "bg-[#6D8A55]/10 border-[#6D8A55] text-[#6D8A55]"
                      : "bg-[#f8faf7] border-gray-200 text-gray-600 hover:border-[#6D8A55]"
                  }`}
                >
                  <img
                    src={option.icon}
                    alt=""
                    className="w-5 h-5 object-contain opacity-80"
                  />
                  <span>{option.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={() => navigate("/")}
              className="text-sm text-gray-400 hover:text-gray-600"
            >
              Skip for now
            </button>

            <button className="bg-[#6D8A55] text-white px-6 py-2 rounded-full hover:bg-[#5a7348] transition">
              Save Preferences
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Onboarding;
