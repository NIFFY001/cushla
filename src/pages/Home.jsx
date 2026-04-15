import React from "react";
import { Link } from "react-router-dom";
import cake from "../assets/cake.png";
import cupcake1 from "../assets/cupcake1.png";
import donut1 from "../assets/donut1.png";
import main from "../assets/main.png";
import small from "../assets/small.png";
import macaron from "../assets/macaron.png";
import flour from "../assets/flour.png";

function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Background Cake Image */}
        <img src={cake} alt="Cake" className="w-full h-full object-cover" />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Hero Text */}
        <div className="absolute inset-0 flex items-center">
          <div className="w-full md:w-1/2 px-8 md:px-16 lg:px-24 text-left">
            <h4 className="font-newsreader text-[#6D8A55] uppercase tracking-[3px] text-sm mb-4">
              Artisanal Patisserie
            </h4>

            <h1 className="font-newsreader text-[48px] md:text-[80px] leading-tight text-black">
              Poetry <br />
              in every <br />
              Crumb.
            </h1>

            <div className="flex gap-4 mt-8 flex-wrap">
              <Link
                to="/order"
                className="bg-[#6D8A55] text-white px-6 py-3 rounded-full uppercase text-sm hover:opacity-90 transition font-jakarta"
              >
                Order Bespoke
              </Link>

              <Link
                to="/menu"
                className="bg-white text-black px-6 py-3 rounded-full uppercase text-sm hover:opacity-90 transition font-jakarta"
              >
                View Menu
              </Link>
            </div>
          </div>
        </div>

        {/* Yellow Badge */}
        <div className="absolute bottom-12 right-12 md:bottom-16 md:right-16">
          <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-yellow-300 flex items-center justify-center shadow-lg rotate-12">
            <p className="font-newsreader text-black text-center text-sm leading-tight italic">
              Handcrafted
              <br />
              Daily
            </p>
          </div>
        </div>
      </section>

      {/* SIGNATURE COLLECTIONS SECTION */}
      <section className="bg-[#f8f6f3] py-20 px-6 md:px-16 lg:px-24">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
          <div>
            <h2 className="font-newsreader text-[42px] md:text-[56px] italic text-black leading-tight">
              Signature Collections
            </h2>
            <p className="font-jakarta text-gray-600 mt-4 max-w-xl text-sm md:text-base leading-relaxed">
              Our seasonal highlights represent the pinnacle of Cushla’s
              craftsmanship, blending heritage techniques with contemporary
              flavors.
            </p>
          </div>

          <Link
            to="/shop"
            className="font-jakarta uppercase text-sm tracking-wide text-[#6D8A55] border-b border-[#6D8A55] pb-1 hover:opacity-70 transition"
          >
            Explore All Treats
          </Link>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Large Left Card */}
          <div className="lg:col-span-2 bg-white rounded-2xl overflow-hidden shadow-sm">
            <img
              src={cupcake1}
              alt="Velvet Collection"
              className="w-full h-[350px] object-cover"
            />

            <div className="p-8">
              <div className="flex justify-between items-center mb-4 flex-wrap gap-3">
                <h3 className="font-newsreader text-3xl italic text-black">
                  The Velvet Collection
                </h3>

                <span className="bg-yellow-300 text-black text-xs px-3 py-1 rounded-full font-jakarta uppercase">
                  Limited Edition
                </span>
              </div>

              <p className="font-jakarta text-gray-600 text-sm leading-relaxed max-w-lg">
                A curated selection of our six most-loved cupcake recipes,
                featuring Madagascan Vanilla and Sicilian Lemon.
              </p>

              <Link
                to="/shop"
                className="inline-block mt-6 font-jakarta uppercase text-sm text-[#6D8A55] hover:underline"
              >
                Quick Add →
              </Link>
            </div>
          </div>

          {/* Right Side Card */}
          <div className="bg-[#dfe4d3] rounded-2xl overflow-hidden shadow-sm">
            <img
              src={donut1}
              alt="Morning Bakes"
              className="w-full h-[250px] object-cover"
            />

            <div className="p-6">
              <h3 className="font-newsreader text-2xl italic text-black mb-3">
                Morning Bakes
              </h3>

              <p className="font-jakarta text-gray-600 text-sm leading-relaxed mb-4">
                Traditional sourdough doughnuts and flaky croissants.
              </p>

              <p className="font-jakarta text-[#6D8A55] font-semibold text-sm">
                $12.00
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* OUR STORY SECTION TEMPLATE */}
      {/* FEATURED PRODUCTS + CTA SECTION */}
      <section className="bg-[#FFFAF2] py-20 px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT PRODUCT CARD */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
            <img
              src={macaron}
              alt="Petite Macarons"
              className="w-full h-[420px] object-cover"
            />

            <div className="p-8">
              <h3 className="font-newsreader text-4xl text-[#3d2d2d] mb-4">
                Petite Macarons
              </h3>

              <p className="font-jakarta text-[#564145] text-lg leading-relaxed mb-8">
                Delicate almond shells filled with infused ganache.
              </p>

              <p className="font-jakarta text-[#6D8A55] text-2xl font-medium">
                $24.00 / Box of 12
              </p>
            </div>
          </div>

          {/* RIGHT CTA LARGE CARD */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden shadow-sm min-h-[720px]">
            {/* LEFT TEXT SIDE */}
            <div className="bg-[#78945E] flex flex-col justify-center px-10 md:px-16 py-12 text-white">
              <h2 className="font-newsreader italic text-[52px] leading-tight mb-8">
                Mastering the Art <br />
                of Celebration
              </h2>

              <p className="font-jakarta text-lg leading-relaxed mb-10 text-white/90 max-w-md">
                Book a consultation for your special day. From intimate
                gatherings to grand galas, we create edible masterpieces.
              </p>

              <button className="bg-white text-[#78945E] font-jakarta uppercase tracking-wide text-sm px-8 py-5 rounded-full w-fit hover:opacity-90 transition">
                Book Consultation
              </button>
            </div>

            {/* RIGHT IMAGE SIDE */}
            <div>
              <div className="bg-[#6D8A55] w-full h-full">
                <img
                  src={flour}
                  alt="Celebration Craft"
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#F4EDDD] py-24 px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT IMAGE SIDE */}
          <div className="relative flex justify-center">
            {/* Main Large Image */}
            <div className="w-[85%] rounded-2xl overflow-hidden shadow-lg rotate-[-2deg] relative z-10">
              <img
                src={main}
                alt="Bakery Craftsmanship"
                className="w-full h-[500px] object-cover"
              />
            </div>

            {/* Small Floating Bottom Image */}
            <div className="absolute bottom-[-30px] right-[10%] w-[180px] rounded-2xl overflow-hidden shadow-xl rotate-[6deg] z-20">
              <img
                src={small}
                alt="Bakery Detail"
                className="w-full h-[220px] object-cover"
              />
            </div>
          </div>

          {/* RIGHT TEXT CONTENT */}
          <div className="max-w-xl">
            {/* Small Label */}
            <p className="font-jakarta uppercase tracking-[3px] text-[#6D8A55] text-xs mb-6">
              The Craftsmanship
            </p>

            {/* Heading */}
            <h2 className="font-newsreader text-[42px] md:text-[64px] italic leading-tight text-[#564145] mb-6">
              Born from soul, <br />
              baked with grace.
            </h2>

            {/* Quote */}
            <p className="font-newsreader italic text-[#564145] text-lg mb-8">
              “We believe that a bakery should be more than just a place to buy
              sweets—it should be a sanctuary for the senses.”
            </p>

            {/* Description Paragraph 1 */}
            <p className="font-jakarta text-[#564145] text-sm leading-relaxed mb-6">
              Founded in a small kitchen with a singular focus on the integrity
              of ingredients, Cushla Bakery has grown into a destination for
              those who appreciate the slower, finer things. Every crumb tells a
              story of organic flour, seasonal fruits, and the patient hands of
              our master bakers.
            </p>

            {/* Description Paragraph 2 */}
            <p className="font-jakarta text-[#564145] text-sm leading-relaxed mb-10">
              We don’t just follow recipes; we listen to the ingredients,
              ensuring every bite is a balanced harmony of texture and tone.
            </p>

            {/* Stats */}
            <div className="flex gap-12">
              <div>
                <h3 className="font-newsreader text-3xl text-[#6D8A55]">15+</h3>
                <p className="font-jakarta uppercase text-xs tracking-wide text-[#6D8A55] mt-2">
                  Years of Mastery
                </p>
              </div>

              <div>
                <h3 className="font-newsreader text-3xl text-[#6D8A55]">
                  100%
                </h3>
                <p className="font-jakarta uppercase text-xs tracking-wide text-[#6D8A55] mt-2">
                  Organic Sourcing
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
