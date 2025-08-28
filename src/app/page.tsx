"use client";
import Image from "next/image";
const news = [
  {
    title: "Armoury Crate vs MyASUS vs GPU Tweak III: What's the difference between ASUS software?",
    image: "/image/gaming.webp",
  },
  {
    title: "The ROG Strix Helios II is the gaming PC case for ambitious DIY builders and hardcore gamers alike",
    image: "/image/table.webp",
  },
  {
    title: "How a custom gaming keyboard elevates your gaming rig",
    image: "/image/player.jpg",
  },
  {
    title: "The ROG Strix GeForce RTX 5070 Ti brings next-gen style and power to PC gamers everywhere",
    image: "/image/rog.webp",
  },
  {
    title: "The complete list of GeForce GPU power specifications for 2025 ROG and TUF Gaming laptops",
    image: "/image/syruh.webp",
  },
];

export default function Home() {
  return (
    <div className=" text-white">
      {/* Hero Section */}
      <section className="relative">
        <div className="w-full h-[450px] relative">
          <img
            src="/image/banner.webp" // fixed path for public directory
            alt="ROG Strix OLED"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center">
            <h1 className="text-5xl font-bold text-purple-400">
              ROG STRIX OLED XG32UCMG
            </h1>
            <p className="text-xl text-white mt-3">ONE FOR ALL</p>
          </div>
        </div>
      </section>

      {/* Explore Products */}
      <div className="flex-grow container mx-auto px-4">
        <section className="py-16  ">
          <h2 className="text-3xl font-bold text-center mb-8 text-red-500">
            EXPLORE OUR PRODUCTS
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 px-6">
            {[
              { name: "Laptop", img: "/image/laptop.webp" },
              { name: "Motherboard", img: "/image/motherboards.webp" },
              { name: "case", img: "/image/caeses.webp" },
              { name: "power", img: "/image/power.webp" },
              { name: "headsets", img: "/image/headsets.webp" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center bg-gray-900 rounded-xl shadow-md p-4 hover:scale-105 hover:shadow-xl transition-transform duration-200 group"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  width={200}
                  height={200}
                  className="mb-2 rounded-lg group-hover:brightness-110"
                />
                <p className="font-semibold text-lg tracking-wide text-white group-hover:text-red-400">{item.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Brands Section */}
        <section className=" py-12">
          <h2 className="text-2xl font-semibold text-center mb-6 text-red-400">
            BRANDS US
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 px-6">
            {["dell", "aser", "msi", "lenovo", "rog"].map((brand, i) => (
              <img
                key={i}
                src={`/logo/${brand}.png`}
                alt={brand}
                width={150}
                height={150}
                className="hover:opacity-80 rounded-full"
              />
            ))}
          </div>
        </section>  

        {/* Featured Products */}
        <section className="py-12 px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                img: "/image/rog.webp",
                title: "Gaming Headsets",
                desc: "Amazing sound experience with ROG headsets."
              },
              {
                img: "/image/syruh.webp",
                title: "Gaming PC",
                desc: "The best ROG builds for high-end gaming performance."
              },
              {
                img: "/image/rog.webp",
                title: "Gaming Keyboards",
                desc: "Mechanical excellence designed for pro gamers."
              }
            ].map((item, i) => (
              <div key={i} className="relative rounded-xl overflow-hidden group shadow-lg">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[250px] object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-6 opacity-100 group-hover:bg-black/60 transition-colors duration-300">
                  <h3 className="font-bold text-lg text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-200">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="bg-black text-white px-6 md:px-12 lg:px-20 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* First 3 articles */}
            {news.slice(0, 3).map((item, i) => (
              <div key={i} className="relative group overflow-hidden rounded-lg shadow-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 text-sm">
                  <p className="font-medium">{item.title}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom row (2 wide cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {news.slice(3).map((item, i) => (
              <div key={i} className="relative group overflow-hidden rounded-lg shadow-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  width={800}
                  height={400}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 text-sm">
                  <p className="font-medium">{item.title}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Learn more */}
          <div className="text-center mt-6">
            <a
              href="#"
              className="text-red-600 font-semibold uppercase tracking-wide hover:underline"
            >
              Learn More &gt;
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
