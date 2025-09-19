"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../components/Header";

const galleryImages = [
  { 
    id: 1, 
    src: "/cust6.jpg", 
    alt: "Pelanggan Menikmati Suasana", 
    description: "\"Momen santai salah satu pelanggan setia kami saat menikmati kopi di sudut ruangan yang nyaman dan penuh inspirasi.\"" 
  },
  { 
    id: 2, 
    src: "/depan.JPG", 
    alt: "Tampak Depan Warung Riyen", 
    description: "\"Fasad Warung Riyen yang hangat dan mengundang, siap menyambut kedatangan Anda setiap saat.\"" 
  },
  { 
    id: 3, 
    src: "/in.JPG", 
    alt: "Interior Warung Riyen", 
    description: "\"Suasana interior kami yang didesain untuk kenyamanan, menjadikannya tempat yang sempurna untuk bekerja maupun bersantai.\"" 
  },
  { 
    id: 4, 
    src: "/org2.jpg", 
    alt: "Suasana Pengunjung", 
    description: "\"Kebersamaan para pengunjung di area semi-outdoor kami, tempat yang pas untuk bercengkrama dan berbagi cerita.\"" 
  },
  { 
    id: 5, 
    src: "/atas out.jpg", 
    alt: "Area Outdoor Atas", 
    description: "\"Pemandangan dari area rooftop kami, menjadi spot favorit para pelanggan untuk menikmati senja sambil menyeruput kopi.\"" 
  },
  { 
    id: 6, 
    src: "/org1.jpg", 
    alt: "Pengunjung di Area Outdoor", 
    description: "\"Canda tawa dan cerita hangat selalu hadir di area outdoor kami yang asri dan sejuk.\"" 
  },
  { 
    id: 7, 
    src: "/matcha.jpg", 
    alt: "Segelas Matcha Latte", 
    description: "\"Salah satu menu non-kopi andalan kami, Pinky Matcha dengan rasa yang otentik dan menyegarkan.\"" 
  },
  { 
    id: 8, 
    src: "/cust 4.jpg", 
    alt: "Detail Penyajian Kopi", 
    description: "\"Detail dari sajian minuman kami yang dibuat dengan penuh ketelitian dan seni oleh barista handal kami.\"" 
  },
  { 
    id: 9, 
    src: "/cust 3.jpg", 
    alt: "Kopi dan Pastry", 
    description: "\"Kombinasi sempurna antara secangkir kopi hangat dan pastry yang baru dipanggang, siap menemani hari Anda.\"" 
  },
  { 
    id: 10, 
    src: "/cust 2.jpg", 
    alt: "Seni di Secangkir Kopi", 
    description: "\"Setiap cangkir adalah karya seni. Barista kami berdedikasi untuk menyajikan kopi terbaik bagi Anda.\"" 
  },
];


const XIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

export default function GalleryPage() {
  const [selected, setSelected] = useState<number | null>(null);
  const selectedImage = galleryImages.find((img) => img.id === selected);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header Fixed */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow">
        <Header />
      </header>

      <main className="flex-1 max-w-6xl mx-auto p-6 w-full pt-28">
        <h1 className="text-3xl font-extrabold mb-12 text-center text-gray-800 tracking-wide">
          Galeri Riyen Coffee & Eatery
        </h1>

        {/* Masonry Grid Gallery */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
          {galleryImages.map((img) => (
            <motion.div
              key={img.id}
              className="relative cursor-pointer rounded-xl overflow-hidden shadow-lg group break-inside-avoid"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelected(img.id)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white font-semibold">
                Lihat Detail
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Modal Split Layout */}
      <AnimatePresence>
        {selected && selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="relative bg-transparent rounded-xl shadow-2xl max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Deskripsi */}
            <motion.div
            className="p-6 flex flex-col justify-center bg-transparent text-white"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            transition={{ duration: 0.4 }}
            >
            <h2 className="text-2xl font-bold mb-4">{selectedImage.alt}</h2>
            <p className="text-white leading-relaxed">
                {selectedImage.description}
            </p>
            </motion.div>

              {/* Foto */}
              <motion.div
                className="relative w-full h-80 md:h-full bg-black"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 50, opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="object-contain w-full h-full"
                />
              </motion.div>

              {/* Tombol Close */}
              <button
                className="absolute top-4 right-4 z-50 bg-white/80 backdrop-blur-md hover:bg-white text-black p-2 rounded-full shadow-lg transition"
                onClick={() => setSelected(null)}
              >
                <XIcon />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
