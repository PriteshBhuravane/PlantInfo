import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { groupPhotos, cleaningPhotos } from "../data/galleryGroups";

import amla4 from "../assets/amla_4.jpeg";
import Audumber_4 from "../assets/audumber_4.jpeg";
import palas from "../assets/Palas_4.jpeg";
import arjun4 from "../assets/arjun_4.jpeg";
import bel4 from "../assets/bel_4.jpeg";
import bibba4 from "../assets/Bibba_4.jpeg";
import bakul4 from "../assets/bakul_4.jpeg";
import moh from "../assets/Moh.jpeg";
import neem4 from "../assets/neem_4.jpeg";
import vad4 from "../assets/vad_4.jpeg";
import Muchkunda_4 from "../assets/Muchkunda_4.jpeg";
import undi from "../assets/undi_4.jpeg";
import sankasur from "../assets/sankasur_4.jpeg";
import Jambhul from "../assets/Jambhul.jpeg";
import Hirda from "../assets/hirada4.jpeg";
import Pimpal from "../assets/pimpal.jpeg";

// Example placeholder data, replace with real images and names later
const plants = [
  { name: "Amla", image: amla4 },
  { name: "Arjun", image: arjun4 },
  { name: "Bel", image: bel4 },
  { name: "Bibba", image: bibba4 },
  { name: "Bakul", image: bakul4 },
  { name: "Moh", image: moh },
  { name: "Neem", image: neem4 },
  { name: "Vad", image: vad4 },
  { name: "Palas", image: palas },
  { name: "Muchkunda", image: Muchkunda_4 },
  { name: "Sankasur", image: sankasur },
  { name: "Jambhul", image: Jambhul },
  { name: "Undi", image: undi },
  { name: "Hirda", image: Hirda },
  { name: "Audumber", image: Audumber_4 },
  { name: "Pimpal", image: Pimpal }
  
];

const Section = ({ title, items }: { title: string; items: { name: string; image: string }[] }) => {
  // Use 3 columns and no frame/name for group/cleaning, 4 columns for plants
  if (title.includes("Group") || title.includes("Cleaning")) {
    // Add hover effect only for cleaning photos
    const isCleaning = title.includes("Cleaning");
    return (
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-green-700 text-center">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center justify-center">
              <img
                src={item.image}
                alt={item.name}
                className={
                  `w-full h-64 object-cover rounded-lg` +
                  (isCleaning ?
                    " transition-all duration-300 hover:scale-105 hover:brightness-110 cursor-pointer" :
                    ""
                  )
                }
              />
            </div>
          ))}
        </div>
      </section>
    );
  }
  // Plant section with frame and name
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6 text-green-700 text-center">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="group bg-white rounded-xl shadow-lg p-2 flex flex-col items-center border border-green-100 hover:border-green-400 hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer relative overflow-hidden"
          >
            <div className="relative w-64 h-48 mb-2 flex items-center justify-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover rounded-lg border-2 border-green-200 group-hover:border-green-500 group-hover:brightness-110 group-hover:scale-105 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-200/40 to-transparent opacity-0 group-hover:opacity-80 transition-all duration-300 rounded-lg" />
            </div>
            <span className="text-base font-bold text-green-900 group-hover:text-green-700 tracking-wide transition-colors duration-200">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

const ImagesGallery: React.FC = () => {
  return (
    <>
      <Header />
      <main className="min-h-[70vh] bg-gradient-to-br from-green-50 via-lime-100 to-emerald-50 py-10">
        <div className="container mx-auto">
          <h1 className="text-4xl font-extrabold mb-6 text-center text-green-800 drop-shadow-lg tracking-tight">Images Gallery</h1>
         
          <Section title="Plant Photos" items={plants} />
          {groupPhotos.length > 0 && <Section title="Group Photos" items={groupPhotos} />}
          {cleaningPhotos.length > 0 && <Section title="Cleaning Photos" items={cleaningPhotos} />}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ImagesGallery;
