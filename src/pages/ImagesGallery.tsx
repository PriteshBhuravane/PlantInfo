import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import neemImage from "../assets/neem_3.avif";

// Example placeholder data, replace with real images and names later
const plants = [
  { name: "Neem", image: neemImage },
  // Add more plant objects here as you add images
];

const ImagesGallery: React.FC = () => {
  return (
    <>
      <Header />
      <main className="min-h-[70vh] bg-gradient-to-br from-green-50 via-lime-100 to-emerald-50 py-10">
        <div className="container mx-auto">
          <h1 className="text-4xl font-extrabold mb-10 text-center text-green-800 drop-shadow-lg tracking-tight">Images Gallery</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {plants.map((plant, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-xl shadow-lg p-5 flex flex-col items-center border border-green-100 hover:border-green-400 hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer relative overflow-hidden"
              >
                <div className="relative w-44 h-44 mb-3 flex items-center justify-center">
                  <img
                    src={plant.image}
                    alt={plant.name}
                    className="w-full h-full object-cover rounded-lg border-2 border-green-200 group-hover:border-green-500 group-hover:brightness-110 group-hover:scale-110 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-200/40 to-transparent opacity-0 group-hover:opacity-80 transition-all duration-300 rounded-lg" />
                </div>
                <span className="text-lg font-bold text-green-900 group-hover:text-green-700 tracking-wide transition-colors duration-200">
                  {plant.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ImagesGallery;
