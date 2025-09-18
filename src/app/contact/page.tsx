"use client";
import { useState, useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import Header from "../components/Header";
import Image from "next/image";

// Definisikan tipe untuk ulasan
interface Review {
  name: string;
  review: string;
  rating: number;
  imageUrl?: string;
}

// Komponen untuk setiap item FAQ
const FaqItem = ({ question, answer }: { question: string, answer: string }) => (
  <motion.div 
    className="border-b border-gray-200 py-4"
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <h3 className="font-semibold text-lg text-brand-dark">{question}</h3>
    <p className="mt-2 text-gray-600">{answer}</p>
  </motion.div>
);

// Komponen untuk Kartu Ulasan
const ReviewCard = ({ name, review, rating, imageUrl }: Review) => (
    <div className="bg-white p-6 rounded-lg shadow-lg flex-shrink-0 w-full">
        <div className="flex items-center mb-2">
            {[...Array(5)].map((_, i) => (
                <svg key={i} className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
        <p className="text-gray-600 italic mb-4">&quot;{review}&quot;</p>
        
        {imageUrl && (
          <div className="relative w-full h-48 rounded-md overflow-hidden mb-4">
            <Image src={imageUrl} alt={`Ulasan dari ${name}`} layout="fill" objectFit="cover" />
          </div>
        )}

        <p className="mt-4 font-bold text-right text-brand-dark">- {name}</p>
    </div>
);

export default function Contact() {
  const gmapsUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.757399539352!2d110.3995923748281!3d-7.81555599220739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5763db0227e5%3A0x44c6353503d6862!2sJl.%20Ahmad%20Yani%20No.10%20A%2C%20Tamanan%2C%20Banguntapan%2C%20Bantul%2C%20Daerah%20Istimewa%20Yogyakarta%2055191!5e0!3m2!1sid!2sid!4v1724454045585!5m2!1sid!2sid";
  
  // --- PERUBAHAN NOMOR WHATSAPP ---
  const phoneNumber = "6285755052868"; // Nomor baru diawali 62
  const message = `Halo, saya ingin reservasi tempat di Riyen Coffee & Eatery.\n\nNama: \nJumlah Orang: \nTanggal: \nJam: \n\nTerima kasih.`;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const [name, setName] = useState('');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);
  const [file, setFile] = useState<File | null>(null);

  const [reviews, setReviews] = useState<Review[]>([
    { name: "Andi Pratama", rating: 5, review: "Tempat ternyaman buat kerja di Jogja! Kopinya mantap, wifinya kenceng, dan suasananya bikin fokus." },
    { name: "Citra Lestari", rating: 4, review: "Suka banget sama suasananya yang homey. Cocok buat nugas bareng temen-temen.", imageUrl: "/image.png" },
    { name: "Budi Santoso", rating: 5, review: "Kopi di sini benar-benar berkualitas. Pasti akan kembali lagi untuk mencoba menu lainnya." }
  ]);

  const reviewsContainerRef = useRef<HTMLDivElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && review && rating > 0) {
      const imageUrl = file ? URL.createObjectURL(file) : undefined;
      const newReview: Review = { name, review, rating, imageUrl };
      setReviews(prevReviews => [...prevReviews, newReview]);
      
      alert(`Terima kasih, ${name}! Ulasan Anda telah ditambahkan.`);
      setName('');
      setReview('');
      setRating(0);
      setFile(null);
    }
  };

  useEffect(() => {
    const container = reviewsContainerRef.current;
    if (!container) return;
    const scrollHeight = container.scrollHeight;
    const clientHeight = container.clientHeight;
    if (scrollHeight <= clientHeight) return;
    let scrollTop = 0;
    const interval = setInterval(() => {
      scrollTop += 1;
      if (scrollTop >= scrollHeight - clientHeight) {
        container.scrollTo({ top: 0, behavior: 'smooth' });
        scrollTop = 0;
      } else {
        container.scrollTo({ top: scrollTop, behavior: 'auto' });
      }
    }, 50);
    return () => clearInterval(interval);
  }, [reviews]);

  return (
    <>
      <Header />
      <div className="relative bg-gray-50 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-green-50 rounded-full filter blur-3xl opacity-50 -z-10"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-green-50 rounded-full filter blur-3xl opacity-50 -z-10"></div>

        <div className="container mx-auto py-20 px-6 space-y-24">
          
          <section>
            <SectionTitle 
              title="Kunjungi Kami" 
              subtitle="Kami siap menyambut Anda di Riyen Coffee & Eatery." 
              center 
            />
            <div className="mt-12 grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <motion.div
                className="w-full h-full min-h-[400px] bg-gray-200 rounded-lg overflow-hidden shadow-lg"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <iframe
                  src={gmapsUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </motion.div>
              <motion.div
                className="bg-white p-8 rounded-lg shadow-lg space-y-6 flex flex-col h-full"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div>
                  <h3 className="text-xl font-semibold text-brand-dark">Alamat</h3>
                  <p className="text-gray-600 mt-1">
                    Jl. Ahmad Yani No.10 A, Tamanan, Kec. Banguntapan,
                    Kabupaten Bantul, Daerah Istimewa Yogyakarta 55191
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-brand-dark">Telepon</h3>
                  {/* --- PERUBAHAN NOMOR TELEPON --- */}
                  <p className="text-gray-600 mt-1">0857-5505-2868</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-brand-dark">Jam Operasional</h3>
                  <p className="text-gray-600 mt-1">
                    Setiap Hari: <span className="font-medium text-brand-primary">08:00 - 23:00 WIB</span>
                  </p>
                </div>
                
                <div className="pt-4 border-t border-gray-200">
                  <h3 className="text-xl font-semibold text-brand-dark">Reservasi</h3>
                  <p className="text-gray-600 mt-1 mb-4">
                    Rencanakan kunjungan Anda. Klik tombol di bawah untuk reservasi melalui WhatsApp.
                  </p>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-brand-primary text-white px-6 py-3 rounded-full font-bold hover:bg-opacity-90 transition duration-300 shadow-lg"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.487 5.235 3.487 8.413.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.433-9.894-9.896-9.894-5.459 0-9.885 4.434-9.889 9.885.002 2.024.65 3.965 1.796 5.605l.244.413-1.121 4.102 4.226-1.105.39.232z" />
                    </svg>
                    Reservasi via WhatsApp
                  </a>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Section 2: Ulasan Pengunjung */}
          <section>
            <SectionTitle 
              title="Ulasan Pengunjung" 
              subtitle="Bagikan pengalaman Anda atau lihat apa kata mereka." 
              center 
            />
            <div className="mt-12 grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
              <motion.div
                className="bg-white p-8 rounded-lg shadow-lg"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl font-bold text-brand-dark mb-6">Tinggalkan Ulasan</h3>
                <form onSubmit={handleReviewSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nama Anda</label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-3 border border-gray-300 rounded-md" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, index) => {
                        const starValue = index + 1;
                        return (
                          <button type="button" key={starValue} onClick={() => setRating(starValue)} className="focus:outline-none">
                            <svg className={`w-8 h-8 cursor-pointer ${starValue <= rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="review" className="block text-sm font-medium text-gray-700 mb-1">Ulasan Anda</label>
                    <textarea id="review" value={review} onChange={(e) => setReview(e.target.value)} rows={4} className="w-full p-3 border border-gray-300 rounded-md" required></textarea>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Unggah Foto/Video (Opsional)</label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                          <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-brand-primary hover:text-green-700 focus-within:outline-none">
                            <span>Pilih file</span>
                            <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleFileChange} accept="image/*,video/*" />
                          </label>
                          <p className="pl-1">atau seret dan lepas</p>
                        </div>
                        {file ? (
                          <p className="text-xs text-green-600 font-semibold pt-2">{file.name}</p>
                        ) : (
                          <p className="text-xs text-gray-500">PNG, JPG, GIF hingga 10MB</p>
                        )}
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="w-full bg-brand-primary text-white p-3 rounded-lg font-semibold hover:bg-opacity-90 transition">Kirim Ulasan</button>
                </form>
              </motion.div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-brand-dark mb-6 text-center md:text-left">Apa Kata Mereka</h3>
                <div ref={reviewsContainerRef} className="h-[500px] overflow-y-auto space-y-4 p-2 rounded-lg no-scrollbar">
                  {reviews.map((r, index) => (
                    <ReviewCard key={index} {...r} />
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Pertanyaan Umum (FAQ) */}
          <section>
            <SectionTitle 
              title="Pertanyaan Umum" 
              subtitle="Beberapa hal yang sering ditanyakan oleh pelanggan kami." 
              center 
            />
            <FaqItem 
              question="Apakah tersedia Wi-Fi?"
              answer="Tentu saja! Kami menyediakan koneksi Wi-Fi yang cepat dan stabil untuk mendukung produktivitas Anda."
            />
            <FaqItem 
              question="Apakah ada area merokok (smoking area)?"
              answer="Ya, kami memiliki area khusus merokok yang nyaman dan terpisah dari area bebas asap rokok."
            />
            <FaqItem 
              question="Bisakah saya melakukan reservasi tempat?"
              answer="Bisa. Untuk reservasi, terutama untuk grup, silakan hubungi kami melalui nomor telepon yang tertera."
            />
            <FaqItem 
              question="Apakah tersedia menu non-kopi?"
              answer="Tentu. Selain kopi, kami juga menyediakan berbagai pilihan teh, jus, dan minuman non-kopi lainnya yang menyegarkan."
            />

          </section>
        </div>
      </div>
    </>
  );
}
