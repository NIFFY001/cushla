import React from "react";
import { Link } from "react-router-dom";

import heroCake from "../assets/hero-cake.png";
import heroCroissant from "../assets/hero-croissant.png";
import heroMacaron from "../assets/hero-macaron.png";
import Footer from "../components/Footer";

import cake from "../assets/cake.png";
import cupcake1 from "../assets/cupcake1.png";
import donut1 from "../assets/donut1.png";
import main from "../assets/main.png";
import small from "../assets/small.png";
import macaron from "../assets/macaron.png";
import flour from "../assets/flour.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

function Home() {
  return (
    <div className="w-full overflow-x-hidden bg-white">
      {/* ================= PREMIUM CINEMATIC HERO ================= */}
      <section className="relative h-screen bg-[#F8F3EB] overflow-hidden">
        {/* Luxury layered background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#efe5d7_0%,transparent_35%)] opacity-70"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,#e5d8c5_0%,transparent_30%)] opacity-60"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#f8f3eb]/40 to-[#f8f3eb]"></div>

        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          loop={true}
          speed={1200}
          slidesPerView={1}
          className="w-full h-full"
        >
          {/* ================= SLIDE 1 ================= */}
          <SwiperSlide className="!h-screen">
            <div className="min-h-screen lg:h-screen grid lg:grid-cols-2 items-center px-6 md:px-12 lg:px-24 py-16 gap-12">
              {/* LEFT CONTENT */}
              <div className="z-20 text-center lg:text-left order-2 lg:order-1">
                <p className="uppercase tracking-[6px] text-[#6D8A55] text-xs md:text-sm font-jakarta mb-6">
                  Artisanal Luxury Bakery
                </p>

                <h1 className="font-newsreader text-[42px] sm:text-[58px] md:text-[88px] lg:text-[120px] leading-[0.95] text-[#2E2A27]">
                  Poetry
                  <br />
                  in Every
                  <br />
                  Crumb.
                </h1>

                <p className="mt-6 md:mt-8 text-sm sm:text-base md:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 font-jakarta leading-relaxed">
                  Handcrafted pastries created with elegance, emotion, and
                  timeless European technique.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-8 md:mt-10 justify-center lg:justify-start">
                  <Link
                    to="/shop"
                    className="bg-[#6D8A55] text-white px-8 py-4 rounded-full uppercase text-sm font-jakarta hover:scale-105 transition duration-300 text-center shadow-lg"
                  >
                    Explore Collection
                  </Link>

                  <Link
                    to="/about"
                    className="border border-[#2E2A27] px-8 py-4 rounded-full uppercase text-sm font-jakarta hover:bg-[#2E2A27] hover:text-white transition duration-300 text-center"
                  >
                    Our Story
                  </Link>
                </div>
              </div>

              {/* RIGHT HERO IMAGE — NEW MOBILE DESIGN */}
              <div className="relative flex justify-center items-center order-1 lg:order-2">
                {/* Background soft oval instead of shrinking ring */}
                <div className="absolute w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] md:w-[560px] md:h-[560px] bg-[#ECE1D0] rounded-full blur-2xl opacity-70"></div>

                {/* Decorative frame behind image */}
                <div className="absolute w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] md:w-[460px] md:h-[460px] border border-[#d8c8af] rounded-[45%] rotate-6"></div>

                {/* Bigger cake image preserved */}
                <img
                  src={heroCake}
                  alt="Luxury Cake"
                  className="relative z-10 w-[260px] sm:w-[340px] md:w-[480px] lg:w-[560px] object-contain drop-shadow-2xl hover:scale-105 transition duration-700"
                />

                {/* Floating card moved BELOW image on mobile */}
                <div
                  className="
      absolute 
      -bottom-10 sm:-bottom-8 md:bottom-8 
      left-1/2 lg:left-auto lg:right-0
      -translate-x-1/2 lg:translate-x-0
      bg-white/95 backdrop-blur-md
      p-4 md:p-6
      rounded-3xl shadow-2xl
      w-[85%] max-w-[280px] md:max-w-[260px]
      z-20
    "
                >
                  <p className="font-newsreader text-lg md:text-2xl italic text-[#2E2A27] leading-tight">
                    Signature Velvet Cake
                  </p>
                  <p className="text-xs md:text-sm text-gray-500 mt-2 md:mt-3 font-jakarta leading-relaxed">
                    Silk cream frosting & Madagascan vanilla layers.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* ================= SLIDE 2 ================= */}
          <SwiperSlide className="!h-screen">
            <div className="h-screen grid lg:grid-cols-2 items-center px-6 md:px-12 lg:px-24 py-12 gap-10">
              <div className="z-20 text-center lg:text-left order-2 lg:order-1">
                <p className="uppercase tracking-[6px] text-[#6D8A55] text-xs md:text-sm font-jakarta mb-6">
                  Morning Indulgence
                </p>

                <h1 className="font-newsreader text-[48px] sm:text-[64px] md:text-[88px] lg:text-[120px] leading-[0.9] text-[#2E2A27]">
                  Golden
                  <br />
                  Layers.
                </h1>

                <p className="mt-8 text-base md:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 font-jakarta leading-relaxed">
                  Freshly baked croissants layered with butter-rich perfection,
                  crisp edges, and Parisian soul.
                </p>

                <div className="mt-10">
                  <Link
                    to="/menu"
                    className="bg-[#6D8A55] text-white px-8 py-4 rounded-full uppercase text-sm font-jakarta hover:scale-105 transition duration-300 inline-block shadow-lg"
                  >
                    View Menu
                  </Link>
                </div>
              </div>

              <div className="relative flex justify-center items-center order-1 lg:order-2">
                <div className="absolute w-[250px] sm:w-[350px] md:w-[450px] h-[250px] sm:h-[350px] md:h-[450px] bg-white rounded-full shadow-2xl"></div>

                <img
                  src={heroCroissant}
                  alt="Croissant"
                  className="relative w-[220px] sm:w-[300px] md:w-[420px] object-contain drop-shadow-2xl hover:rotate-2 transition duration-700"
                />

                <div className="absolute top-6 right-0 bg-[#6D8A55] text-white rounded-[2rem] p-6 shadow-2xl max-w-[200px]">
                  <p className="font-newsreader text-2xl italic leading-tight">
                    Freshly
                    <br />
                    Baked
                    <br />
                    Daily
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* ================= SLIDE 3 ================= */}
          <SwiperSlide className="!h-screen">
            <div className="h-screen grid lg:grid-cols-2 items-center px-6 md:px-12 lg:px-24 py-12 gap-10">
              <div className="z-20 text-center lg:text-left order-2 lg:order-1">
                <p className="uppercase tracking-[6px] text-[#6D8A55] text-xs md:text-sm font-jakarta mb-6">
                  Parisian Delicacies
                </p>

                <h1 className="font-newsreader text-[48px] sm:text-[64px] md:text-[88px] lg:text-[120px] leading-[0.9] text-[#2E2A27]">
                  Delicate
                  <br />
                  Luxury.
                </h1>

                <p className="mt-8 text-base md:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 font-jakarta leading-relaxed">
                  Floral macarons crafted with elegant fillings for
                  unforgettable refined indulgence.
                </p>

                <div className="mt-10">
                  <Link
                    to="/shop"
                    className="bg-[#6D8A55] text-white px-8 py-4 rounded-full uppercase text-sm font-jakarta hover:scale-105 transition duration-300 inline-block shadow-lg"
                  >
                    Shop Macarons
                  </Link>
                </div>
              </div>

              <div className="relative flex justify-center items-center order-1 lg:order-2">
                <div className="absolute w-[250px] sm:w-[340px] md:w-[420px] h-[250px] sm:h-[340px] md:h-[420px] bg-[#E9DFD1] rounded-[3rem] rotate-6"></div>
                <div className="absolute w-[250px] sm:w-[340px] md:w-[420px] h-[250px] sm:h-[340px] md:h-[420px] bg-white rounded-[3rem] -rotate-6 shadow-xl"></div>

                <img
                  src={heroMacaron}
                  alt="Macaron"
                  className="relative w-[220px] sm:w-[300px] md:w-[400px] object-contain drop-shadow-2xl hover:scale-105 transition duration-700"
                />

                <div className="absolute bottom-4 left-0 space-y-4">
                  <div className="bg-white p-5 rounded-2xl shadow-xl">
                    <p className="font-newsreader text-xl italic text-[#2E2A27]">
                      Rose Vanilla
                    </p>
                  </div>

                  <div className="bg-[#2E2A27] text-white p-5 rounded-2xl shadow-xl">
                    <p className="font-newsreader text-xl italic">
                      Pistachio Silk
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 hidden md:flex flex-col items-center">
          <div className="w-[1px] h-12 bg-[#6D8A55]/40"></div>
          <p className="text-[10px] tracking-[4px] uppercase text-[#6D8A55] mt-2 font-jakarta">
            Scroll
          </p>
        </div>
      </section>

      {/* SIGNATURE COLLECTIONS SECTION */}
      <section className="bg-[#f8f6f3] py-20 px-6 md:px-16 lg:px-24">
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-2xl overflow-hidden shadow-sm">
            <img
              src={cupcake1}
              alt="Velvet Collection"
              className="w-full h-[350px] object-cover hover:scale-105 transition duration-300"
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

          <div className="bg-[#dfe4d3] rounded-2xl overflow-hidden shadow-sm">
            <img
              src={donut1}
              alt="Morning Bakes"
              className="w-full h-[250px] object-cover hover:scale-105 transition duration-300"
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

      {/* FEATURED PRODUCTS + CTA SECTION */}
      <section className="bg-[#FFFAF2] py-20 px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
            <img
              src={macaron}
              alt="Petite Macarons"
              className="w-full h-[420px] object-cover hover:scale-105 transition duration-300"
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

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden shadow-sm min-h-[720px]">
            <div className="bg-[#78945E] flex flex-col justify-center px-10 md:px-16 py-12 text-white">
              <h2 className="font-newsreader italic text-[52px] leading-tight mb-8">
                Mastering the Art <br /> of Celebration
              </h2>
              <p className="font-jakarta text-lg leading-relaxed mb-10 text-white/90 max-w-md">
                Book a consultation for your special day. From intimate
                gatherings to grand galas, we create edible masterpieces.
              </p>
              <button className="bg-white text-[#78945E] font-jakarta uppercase tracking-wide text-sm px-8 py-5 rounded-full w-fit hover:opacity-90 transition">
                Book Consultation
              </button>
            </div>

            <div className="bg-[#6D8A55] w-full h-full">
              <img
                src={flour}
                alt="Celebration Craft"
                className="w-full h-full object-cover opacity-90 hover:scale-105 transition duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* OUR STORY SECTION */}
      <section className="bg-[#F4EDDD] py-24 px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative flex justify-center">
            <div className="w-[85%] rounded-2xl overflow-hidden shadow-lg rotate-[-2deg] relative z-10">
              <img
                src={main}
                alt="Bakery Craftsmanship"
                className="w-full h-[500px] object-cover"
              />
            </div>

            <div className="absolute bottom-[-30px] right-[10%] w-[180px] rounded-2xl overflow-hidden shadow-xl rotate-[6deg] z-20">
              <img
                src={small}
                alt="Bakery Detail"
                className="w-full h-[220px] object-cover"
              />
            </div>
          </div>

          <div className="max-w-xl">
            <p className="font-jakarta uppercase tracking-[3px] text-[#6D8A55] text-xs mb-6">
              The Craftsmanship
            </p>

            <h2 className="font-newsreader text-[42px] md:text-[64px] italic leading-tight text-[#564145] mb-6">
              Born from soul, <br /> baked with grace.
            </h2>

            <p className="font-newsreader italic text-[#564145] text-lg mb-8">
              “We believe that a bakery should be more than just a place to buy
              sweets—it should be a sanctuary for the senses.”
            </p>

            <p className="font-jakarta text-[#564145] text-sm leading-relaxed mb-6">
              Founded in a small kitchen with a singular focus on the integrity
              of ingredients, Cushla Bakery has grown into a destination for
              those who appreciate the slower, finer things.
            </p>

            <p className="font-jakarta text-[#564145] text-sm leading-relaxed mb-10">
              We don’t just follow recipes; we listen to the ingredients,
              ensuring every bite is a balanced harmony of texture and tone.
            </p>

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
      {/* SUBSCRIBE */}
      <section className="bg-[#F6F2EA] py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto bg-[#F8F7F5] rounded-[2.5rem] px-8 md:px-16 py-16 md:py-24 text-center shadow-sm">
          {/* Heading */}
          <h2 className="font-newsreader italic text-[42px] md:text-[68px] leading-tight text-[#1F1A17]">
            Join our Inner Circle
          </h2>

          {/* Subtext */}
          <p className="mt-6 max-w-2xl mx-auto font-jakarta text-[#6F625D] text-base md:text-xl leading-relaxed">
            Receive exclusive access to seasonal drops, secret recipes, and
            artisanal workshops directly in your inbox.
          </p>

          {/* Subscription Form */}
          <div className="mt-12 max-w-3xl mx-auto">
            {/* Desktop / Tablet Layout */}
            <form className="hidden sm:flex items-center justify-center bg-[#F2EEE8] rounded-full p-3 shadow-inner">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-transparent px-6 py-4 text-[#6F625D] font-jakarta text-base outline-none rounded-full"
              />

              <button
                type="submit"
                className="bg-[#788B57] hover:bg-[#6D8050] text-white font-jakarta uppercase tracking-[2px] text-sm px-10 py-4 rounded-full transition duration-300"
              >
                Subscribe
              </button>
            </form>

            {/* Mobile Layout */}
            <form className="flex sm:hidden flex-col gap-4 bg-[#F2EEE8] rounded-[2rem] p-5 shadow-inner">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-white px-5 py-4 text-[#6F625D] font-jakarta text-base outline-none rounded-full w-full"
              />

              <button
                type="submit"
                className="bg-[#788B57] hover:bg-[#6D8050] text-white font-jakarta uppercase tracking-[2px] text-sm px-8 py-4 rounded-full transition duration-300 w-full"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Footer note */}
          <p className="mt-10 text-[11px] md:text-xs tracking-[3px] uppercase font-jakarta text-[#B5B8A6]">
            We respect your privacy as much as our ingredients.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
