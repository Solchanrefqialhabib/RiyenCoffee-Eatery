"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import Hero from "./components/Hero";
import SectionTitle from "./components/SectionTitle";
import MenuCard from './components/MenuCard';
import Header from './components/Header'; 
import { articles } from './artikel/page';
import { Clock, Tag, Coffee } from "lucide-react";

// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


// Menu Favorit
const favoriteItems = [
  {
    name: "Es Kopi Susu Riyen",
    image: "/img (2).JPG",
    description: "Kopi Susu Lontar Riyen khas Riyen Coffee & Eatery yang menjadi favorit semua orang.",

  },
  {
    name: "Latte",
    image: "/lt.JPG",
    description: "Espresso lembut dengan steamed milk dan sedikit busa yang nikmat.",

  },
  {
    name: "Croissant",
    image: "/old.jpg",
    description: "Pastry renyah dan gurih, pendamping sempurna untuk secangkir kopi Anda.",

  },
];

// Testimoni dengan avatar
const testimonials = [
  { 
    name: "Andi Pratama", 
    quote: "Tempat ternyaman buat kerja di Jogja! Kopinya mantap, wifinya kenceng, dan suasananya bikin fokus.", 
    image: "/andi.jpg" 
  },
  { 
    name: "Citra Lestari", 
    quote: "Suka banget sama suasananya yang homey. Cocok buat nugas bareng temen-temen.", 
    image: "/citra.jpg" 
  },
  { 
    name: "Budi Santoso", 
    quote: "Kopi di sini benar-benar berkualitas. Pasti akan kembali lagi untuk mencoba menu lainnya.", 
    image: "/sutanto.jpg" 
  }
];

const galleryImages = [
  "/cust.jpg",
  "/cust5.jpg",
  "/cust 3.jpg",
  "/cust 4.jpg",
  "/org1.jpg",
  "/matcha.JPG",
];


const gridContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const gridItemVariants = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

// Card untuk keunggulan
const ValueCard = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
  <motion.div
    className="text-center"
    variants={gridItemVariants}
  >
    <div className="mx-auto w-16 h-16 bg-green-100 text-brand-primary rounded-full flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-brand-dark">{title}</h3>
    <p className="mt-2 text-gray-500">{children}</p>
  </motion.div>
);

export default function Home() {
  const featuredArticle = articles[0]; // Artikel unggulan

  return (
    <div className="overflow-x-hidden">
      <Header />
      <Hero />

      <main>
        {/* Menu Favorit */}
        <motion.section
          className="py-20 bg-white"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={gridContainerVariants}
        >
          <div className="container mx-auto px-4">
            <SectionTitle
              title="Menu Favorit Pelanggan"
              subtitle="Cicipi pilihan yang paling sering dipesan dan dicintai oleh pelanggan setia kami."
              center
            />

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
              variants={gridContainerVariants}
            >
              {favoriteItems.map((item) => (
                <div key={item.name} className="relative">
                  <MenuCard
                    name={item.name}
                    image={item.image}
                    description={item.description}
                    variants={gridItemVariants}
                  />
                </div>
              ))}
            </motion.div>

            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link href="/menu" className="bg-brand-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition duration-300 shadow-lg text-lg">
                Lihat Semua Menu
              </Link>
            </motion.div>
          </div>
        </motion.section>

        {/* Keunggulan */}
        <motion.section 
          className="py-20 bg-gray-50"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={gridContainerVariants}
        >
          <div className="container mx-auto px-4">
            <SectionTitle 
              title="Mengapa Memilih Riyen?" 
              subtitle="Kami percaya secangkir kopi yang nikmat adalah awal dari hari yang hebat." 
              center 
            />
            <div className="mt-12 grid md:grid-cols-3 gap-12">
              <ValueCard title="Biji Kopi Pilihan" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-14v4m-2-2h4m5 10v4m-2-2h4M5 3a2 2 0 00-2 2v1m16 0V5a2 2 0 00-2-2h-1m-4 16l2.293-2.293a1 1 0 000-1.414l-2.586-2.586a1 1 0 00-1.414 0l-2.293 2.293a1 1 0 000 1.414l2.586 2.586a1 1 0 001.414 0z" /></svg>}>
                Kami hanya menggunakan biji kopi terbaik dari petani lokal untuk cita rasa otentik.
              </ValueCard>
              <ValueCard title="Suasana Nyaman" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}>
                Tempat yang kami rancang untuk membuat Anda merasa rileks, baik untuk bekerja maupun bersantai.
              </ValueCard>
              <ValueCard title="Pelayanan Tulus" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>}>
                Setiap senyuman dan sapaan hangat dari tim kami adalah bagian dari pengalaman Anda.
              </ValueCard>
            </div>
          </div>
        </motion.section>

        {/* Testimoni */}
        <motion.section 
          className="py-20 bg-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto px-4">
            <SectionTitle title="Apa Kata Mereka" subtitle="Kami senang mendengar cerita dan pengalaman dari para pelanggan kami." center />
            <div className="mt-12 grid md:grid-cols-3 gap-8">
              {testimonials.map((t, index) => (
                <motion.div 
                  key={index} 
                  className="bg-gray-50 p-6 rounded-lg shadow-sm text-center" 
                  variants={gridItemVariants}
                >
                  <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full mx-auto mb-4 object-cover" />
                    <p className="text-gray-600 italic">&quot;{t.quote}&quot;</p>
                  <p className="mt-4 font-bold text-brand-dark">- {t.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

{/* Galeri */}
<motion.section
  className="relative py-20 bg-black"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.7 }}
>
  {/* Wave Atas (putih) */}
  <div className="absolute top-0 left-0 right-0 -translate-y-full overflow-hidden leading-none">
    <svg
      className="relative block w-full h-20 text-white"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
    >
      <path
        fill="currentColor"
        d="M0,160L48,165.3C96,171,192,181,288,170.7C384,160,480,128,576,138.7C672,149,768,203,864,224C960,245,1056,235,1152,218.7C1248,203,1344,181,1392,170.7L1440,160L1440,0L0,0Z"
      ></path>
    </svg>
  </div>

  <div className="container mx-auto px-20 relative z-10">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-green-500">
        Galeri Riyen Coffee & Eatery
      </h2>
      <p className="mt-3 text-lg text-green-500">
        Suasana, menu, dan momen terbaik di Riyen Coffee & Eatery.
      </p>
    </div>

<Swiper
  modules={[Autoplay, Navigation, Pagination]}
  spaceBetween={20}
  slidesPerView={1}
  navigation
  pagination={{ clickable: true }}
  autoplay={{ delay: 3000 }}
  loop
  breakpoints={{
    640: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }}
  className="mt-10"
>
  {galleryImages.map((src, idx) => (
    <SwiperSlide key={idx}>
      <motion.div
        className="overflow-hidden rounded-xl shadow-lg group relative"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="aspect-[4/3] w-full">
          <img
            src={src}
            alt={`Gallery ${idx + 1}`}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        {/* Overlay Hover */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <span className="text-white text-lg font-semibold">
            📷 Lihat Detail
          </span>
        </div>
      </motion.div>
    </SwiperSlide>
  ))}
</Swiper>


    <div className="text-center mt-10">
      <Link
        href="/galeri"
        className="bg-brand-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition duration-300"
      >
        Lihat Semua Galeri
      </Link>
    </div>
  </div>

  {/* Wave Bawah (putih) */}
  <div className="absolute bottom-0 left-0 right-0 translate-y-full overflow-hidden leading-none">
    <svg
      className="relative block w-full h-20 text-white"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
    >
      <path
        fill="currentColor"
        d="M0,288L48,272C96,256,192,224,288,224C384,224,480,256,576,245.3C672,235,768,181,864,165.3C960,149,1056,171,1152,186.7C1248,203,1344,213,1392,218.7L1440,224L1440,320L0,320Z"
      ></path>
    </svg>
  </div>
</motion.section>


        {/* Artikel Unggulan */}
        <motion.section 
          className="py-20 bg-gray-50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto px-4">
            <SectionTitle title="Baca Cerita Kami" subtitle="Temukan wawasan, tips, dan cerita menarik dari dunia kopi." center />
            <motion.div 
              className="mt-12 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              <Link href={`/artikel/${featuredArticle.slug}`} className="block group bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="relative w-full h-64 rounded-md overflow-hidden">
                    <img 
                      src={featuredArticle.imageUrl} 
                      alt={featuredArticle.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-brand-primary font-semibold">{featuredArticle.category}</p>
                    <h2 className="mt-2 text-2xl font-bold text-brand-dark group-hover:text-brand-primary transition-colors">
                      {featuredArticle.title}
                    </h2>
                    <p className="mt-4 text-gray-500 leading-relaxed">
                      {featuredArticle.excerpt}
                    </p>
                    <span className="mt-6 inline-block font-semibold text-brand-primary group-hover:underline">
                      Baca Selengkapnya →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </motion.section>

        {/* Promo & Event */}
        <motion.section 
          className="py-20 bg-brand-primary text-white text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold">Informasi</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg">
              Nikmati berbagai promo menarik dan ambience yang nyaman di Riyen Coffee & Eatery.
            </p>
            <div className="mt-8 grid md:grid-cols-3 gap-8">
              <div className="bg-white text-brand-dark p-6 rounded-lg shadow">
                <div className="text-4xl mb-3">🕘</div>
                <h3 className="font-bold text-xl">Jam Operasional</h3>
                <p className="mt-2 text-gray-600">08.00 WIB - 23.00 WIB</p>
              </div>
              <div className="bg-white text-brand-dark p-6 rounded-lg shadow">
                <div className="text-4xl mb-3">🎉</div>
                <h3 className="font-bold text-xl">Promo</h3>
                <p className="mt-2 text-gray-600">Nikmati promo dari Riyen Coffee & Eatery.</p>
              </div>
              <div className="bg-white text-brand-dark p-6 rounded-lg shadow">
                <div className="text-4xl mb-3">📞</div>
                <h3 className="font-bold text-xl">Reservasi</h3>
                <p className="mt-2 text-gray-600">Ingin mengadakan acara? Hubungi kami untuk reservasi tempat dan paket menarik.</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Ajakan Berkunjung */}
        <motion.section
          className="py-24 text-center bg-brand-dark text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold">Kunjungi Kami Hari Ini</h2>
            <p className="max-w-xl mx-auto mt-4 text-gray-300">
              Rasakan sendiri suasana hangat dan nikmati kopi terbaik di kota. Kami menanti kedatangan Anda!
            </p>
            <motion.div
              className="text-center mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link href="/contact" className="bg-white text-brand-dark px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition duration-300 shadow-lg text-lg">
                Temukan Lokasi & Kontak
              </Link>
            </motion.div>
          </div>
        </motion.section>
      </main>
{/* Floating WhatsApp Button */}
<a
  href="https://wa.me/6285755052868?text=Halo%2C%20saya%20ingin%20reservasi%20tempat%20di%20Riyen%20Coffee%20%26%20Eatery.%0A%0ANama%3A%20%0AJumlah%20Orang%3A%20%0ATanggal%3A%20%0AJam%3A%20%0A%0ATerima%20kasih."
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-5 right-5 bg-[#25D366] hover:bg-[#1ebe5d] text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-2xl z-50 flex items-center justify-center animate-[pulseCustom_2s_infinite]"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    className="w-7 h-7 fill-current"
  >
    <path d="M16 .5C7.2.5.1 7.6.1 16.4c0 2.9.8 5.7 2.3 8.2L.1 31.5l7-2.2c2.4 1.3 5.1 2 7.9 2 8.8 0 15.9-7.1 15.9-15.9S24.8.5 16 .5zm0 28.9c-2.5 0-5-.7-7.2-2l-.5-.3-4.1 1.3 1.3-4-.3-.5c-1.5-2.2-2.2-4.8-2.2-7.4C3 9.1 8.8 3.3 16 3.3s13 5.8 13 13-5.8 13.1-13 13.1zm7.2-9.7c-.4-.2-2.4-1.2-2.8-1.4-.4-.1-.7-.2-1 .2s-1.1 1.4-1.3 1.7-.5.3-.9.1c-.5-.2-2-1-3.8-2.9-1.4-1.5-1.7-2.3-1.9-2.7-.2-.5 0-.7.2-.9.2-.2.5-.5.7-.7.2-.2.3-.4.5-.7.2-.2.1-.5 0-.7-.1-.2-1-2.3-1.4-3.1-.4-.9-.7-.8-1-.8h-.9c-.3 0-.7.1-1 .5-.4.4-1.4 1.3-1.4 3.2s1.4 3.7 1.6 4c.2.3 2.7 4.2 6.6 5.9 3.9 1.6 3.9 1.1 4.6 1 .7 0 2.4-1 2.8-1.9.3-.9.3-1.7.2-1.9-.1-.1-.3-.2-.7-.4z"/>
  </svg>
</a>
    </div>
  );
}
