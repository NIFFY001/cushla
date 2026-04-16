import React from "react";
import ahero from "../assets/ahero.png";
import bakery from "../assets/bakery.png";
import pastry from "../assets/pastry.png";
import Footer from "../components/Footer";

function About() {
  return (
    <div className="bg-[#f8faf7] text-gray-800">
      {/* HERO SECTION */}
      <section className="px-6 lg:px-20 py-20 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="uppercase tracking-[3px] text-[#6D8A55] text-sm mb-4">
            Our Story
          </p>

          <h1 className="text-5xl lg:text-6xl font-newsreader leading-tight mb-6">
            Crafted with Passion,
            <br />
            Served with Elegance.
          </h1>

          <p className="text-lg text-gray-600 max-w-lg">
            At Cushla Bakery, every creation is a reflection of artistry,
            precision, and timeless European baking tradition. We believe that
            every bite should feel like a moment worth remembering.
          </p>
        </div>

        <div>
          <img
            src={ahero}
            alt="Bakery hero"
            className="rounded-2xl shadow-lg object-cover w-full h-[500px]"
          />
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="px-6 lg:px-20 py-20 bg-white grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src={bakery}
            alt="Bakery process"
            className="rounded-2xl shadow-md object-cover w-full h-[450px]"
          />
        </div>

        <div>
          <h2 className="text-4xl font-newsreader mb-6">
            A Legacy of Craftsmanship
          </h2>

          <p className="text-gray-600 mb-4">
            Founded with a passion for refined baking, Cushla Bakery brings
            together traditional techniques and modern creativity. Each product
            is handcrafted with care, using only the finest ingredients.
          </p>

          <p className="text-gray-600">
            From delicate pastries to bespoke cakes, our mission is to create
            experiences that delight the senses and celebrate life’s special
            moments.
          </p>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="px-6 lg:px-20 py-20">
        <h2 className="text-4xl font-newsreader text-center mb-12">
          What We Stand For
        </h2>

        <div className="grid md:grid-cols-3 gap-10 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-[#6D8A55]">
              Quality Ingredients
            </h3>
            <p className="text-gray-600">
              We source only the finest ingredients to ensure every bite meets
              the highest standards.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3 text-[#6D8A55]">
              Artisan Craft
            </h3>
            <p className="text-gray-600">
              Every product is handcrafted with precision, care, and attention
              to detail.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3 text-[#6D8A55]">
              Timeless Taste
            </h3>
            <p className="text-gray-600">
              Inspired by European traditions, we create flavors that are both
              classic and memorable.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURE IMAGE SECTION */}
      <section className="px-6 lg:px-20 pb-20">
        <div className="relative">
          <img
            src={pastry}
            alt="Pastry"
            className="rounded-2xl w-full h-[400px] object-cover"
          />

          <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-6 rounded-xl max-w-sm shadow-md">
            <h3 className="font-newsreader text-2xl mb-2">Made to Inspire</h3>
            <p className="text-gray-600 text-sm">
              Every creation is designed not just to taste exceptional, but to
              leave a lasting impression.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default About;
