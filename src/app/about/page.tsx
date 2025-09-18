// // src/app/about/page.tsx
// import Image from "next/image";
// import SectionTitle from "../components/SectionTitle";
// import logo from "../../../public/Logo.png"; // Import logo

// export default function About() {
//   return (
//     <div className="container mx-auto py-12 px-4">
//       <SectionTitle 
//         title="Tentang Warung Riyen" 
//         subtitle="Lebih dari sekadar secangkir kopi." 
//         center 
//       />

//       <div className="max-w-4xl mx-auto mt-8 text-center">
//         <Image 
//           src={logo}
//           alt="Logo Warung Riyen" 
//           width={200} // Ukuran disesuaikan agar lebih proporsional
//           height={200}
//           className="rounded-full shadow-lg mb-8 mx-auto"
//         />

//         <p className="text-lg text-gray-700 leading-relaxed mb-12">
//           Riyen Coffee & Eatery lahir dari kecintaan kami pada kopi berkualitas dan keinginan untuk menciptakan ruang di mana komunitas dapat berkumpul, bekerja, dan bersantai. Kami mengutamakan rasa, kualitas, dan suasana yang ramah untuk semua pelanggan.
//         </p>

//         <div className="grid md:grid-cols-2 gap-12">
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h3 className="text-2xl font-bold text-brand-dark mb-2">Visi Kami</h3>
//             <p className="text-gray-600">
//               menjadi coffe shop & co-working space dengan menghadirkan suasana & rasa sebagai kenangan terbaik
//             </p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h3 className="text-2xl font-bold text-brand-dark mb-2">Misi Kami</h3>
//             <p className="text-gray-600">
//               menciptakan suasana yang natural dan relax untuk meningkatkan kenyamanan pelanggan.
// - membentuk pelayanan terbaik untuk meningkatkan kenyamanan & kepuasan konsumen.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import Header from "../components/Header";
import logo from "../../../public/Logo.png";

// Komponen Ikon untuk bagian Nilai-Nilai Kami
const ValueCard = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
  <motion.div
    className="text-center"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5 }}
  >
    <div className="mx-auto w-16 h-16 bg-green-100 text-brand-primary rounded-full flex items-center justify-center shadow-md">
      {icon}
    </div>
    <h3 className="mt-4 text-xl font-bold text-brand-dark">{title}</h3>
    <p className="mt-2 text-gray-600">{children}</p>
  </motion.div>
);

export default function About() {
  return (
    <>
      <Header />
      <div className="relative bg-white overflow-hidden">
        {/* Background Blur Circle */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-green-50 rounded-full filter blur-3xl opacity-50 -z-10"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-green-50 rounded-full filter blur-3xl opacity-50 -z-10"></div>

        <div className="container mx-auto py-20 px-6 space-y-24">
          {/* Section 1: Cerita Kami */}
          <section>
            <SectionTitle
              title="Cerita di Balik Secangkir Kopi"
              subtitle="Perjalanan kami dimulai dari sebuah mimpi sederhana."
              center
            />
            <div className="mt-12 max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="mb-10"
              >
                {/* Logo dalam oval */}
                <div className="relative mx-auto w-48 h-64 bg-gradient-to-b from-green-50 to-white rounded-full shadow-2xl p-4 flex items-center justify-center overflow-hidden">
                  <Image
                    src={logo}
                    alt="Logo Riyen Coffee & Eatery"
                    width={200}
                    height={200}
                    className="object-contain"
                  />
                </div>
              </motion.div>

              <motion.div
                className="text-lg text-gray-700 leading-relaxed text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <p>
                  Riyen Coffee & Eatery lahir dari kecintaan kami pada kopi berkualitas dan keinginan untuk menciptakan sebuah ruang di mana komunitas dapat berkumpul, bekerja, dan bersantai.
                </p>
                <p className="mt-4">
                  Bagi kami, setiap biji kopi memiliki cerita. Kami mengutamakan rasa, kualitas, dan suasana yang ramah untuk mengubah cerita tersebut menjadi kenangan terbaik bagi setiap pelanggan yang datang.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Section 2: Nilai-Nilai Kami */}
          <section>
            <SectionTitle
              title="Yang Kami Utamakan"
              subtitle="Tiga pilar yang menjadi fondasi Riyen Coffee & Eatery."
              center
            />
            <div className="mt-12 grid md:grid-cols-3 gap-12">
              <ValueCard
                title="Biji Kopi Pilihan"
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-14v4m-2-2h4m5 10v4m-2-2h4M5 3a2 2 0 00-2 2v1m16 0V5a2 2 0 00-2-2h-1m-4 16l2.293-2.293a1 1 0 000-1.414l-2.586-2.586a1 1 0 00-1.414 0l-2.293 2.293a1 1 0 000 1.414l2.586 2.586a1 1 0 001.414 0z" />
                  </svg>
                }
              >
                Kami hanya menggunakan biji kopi terbaik dari petani lokal untuk menghasilkan cita rasa yang otentik.
              </ValueCard>
              <ValueCard
                title="Suasana Nyaman"
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                }
              >
                Tempat yang kami rancang untuk membuat Anda merasa rileks, baik untuk bekerja maupun bersantai.
              </ValueCard>
              <ValueCard
                title="Pelayanan Tulus"
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                }
              >
                Setiap senyuman dan sapaan hangat dari tim kami adalah bagian dari pengalaman Anda di sini.
              </ValueCard>
            </div>
          </section>

          {/* Section 3: Call to Action */}
          <motion.section
            className="text-center bg-gray-50 p-12 rounded-2xl shadow-md"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-brand-dark">Siap Mencicipi Kopi Terbaik Kami?</h2>
            <p className="mt-4 text-gray-600 max-w-xl mx-auto">
              Jelajahi berbagai pilihan kopi, makanan, dan minuman lainnya yang telah kami siapkan khusus untuk Anda.
            </p>
            <div className="mt-8">
              <Link
                href="/menu"
                className="bg-gradient-to-r from-brand-primary to-green-600 text-white px-8 py-3 rounded-full font-bold hover:opacity-90 transition duration-300 shadow-lg"
              >
                Lihat Menu Lengkap
              </Link>
            </div>
          </motion.section>
        </div>
      </div>
    </>
  );
}
