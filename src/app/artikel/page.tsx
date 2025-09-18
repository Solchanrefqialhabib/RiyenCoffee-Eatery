"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "../components/Header";
import SectionTitle from "../components/SectionTitle";

// --- DATA ARTIKEL (sudah diperbaiki konten & konsistensi) ---
export const articles = [
  {
    slug: "cara-memilih-biji-kopi-terbaik",
    title: "5 Cara Memilih Biji Kopi Terbaik untuk Seduhan di Rumah",
    excerpt:
      "Menyeduh kopi di rumah bisa jadi ritual yang menenangkan. Kunci utamanya ada pada pemilihan biji kopi yang tepat. Berikut panduan lengkapnya.",
    imageUrl: "/petani.jpg",
    category: "Tips & Trik",
    readTime: 5,
    content: `
      <p>Menyeduh kopi di rumah bukan sekadar rutinitas, tapi juga pengalaman. Aroma kopi yang memenuhi ruangan, suara air panas menyentuh bubuk kopi, hingga tegukan pertama yang hangat — semua itu memberikan sensasi tersendiri. Namun, kualitas seduhan sangat ditentukan oleh biji kopi yang dipilih. Berikut 5 tips sederhana untuk menemukan biji kopi terbaik:</p>
      
      <h3>1. Kenali Asal dan Jenis Kopi</h3>
      <p>Setiap daerah punya karakter rasa khas. Kopi Gayo dari Aceh biasanya earthy dan spicy, sedangkan kopi Ethiopia cenderung fruity dan floral. Cobalah beberapa origin berbeda untuk menemukan yang sesuai dengan selera.</p>
      
      <h3>2. Pilih Kopi yang Baru Disangrai</h3>
      <p>Kopi terbaik dikonsumsi dalam 2–4 minggu setelah disangrai. Selalu periksa tanggal sangrai (bukan tanggal kedaluwarsa) dan simpan dalam wadah kedap udara agar kesegarannya terjaga.</p>
      
      <h3>3. Perhatikan Tingkat Sangrai</h3>
      <ul>
        <li><strong>Light roast:</strong> rasa asli biji lebih menonjol, cocok untuk V60, Kalita, atau Aeropress.</li>
        <li><strong>Medium roast:</strong> seimbang antara rasa origin dan sangrai, fleksibel untuk hampir semua metode.</li>
        <li><strong>Dark roast:</strong> lebih pahit dan bold, ideal untuk espresso dan kopi tubruk.</li>
      </ul>
      
      <h3>4. Sesuaikan dengan Metode Seduh</h3>
      <p>Light roast biasanya ideal untuk manual brew karena keasaman dan rasa buahnya lebih jelas, sedangkan dark roast sering digunakan untuk espresso. Pilih biji sesuai metode yang paling sering kamu gunakan.</p>
      
      <h3>5. Beli dari Roaster atau Toko Tepercaya</h3>
      <p>Roaster lokal biasanya lebih transparan soal asal kopi, proses, dan tanggal sangrai. Selain dapat kopi berkualitas, kamu juga mendukung petani dan industri kopi lokal.</p>
      
      <h4>Kesimpulan</h4>
      <p>Memilih biji kopi bukan hanya soal rasa, tapi juga pengalaman. Eksplorasi berbagai origin, tingkat sangrai, dan metode seduh. Ingat, kopi terbaik adalah kopi yang kamu nikmati dengan caramu sendiri.</p>
    `
  },
  {
    slug: "arabika-vs-robusta",
    title: "Arabika vs Robusta: Apa Perbedaan Sebenarnya?",
    excerpt:
      "Arabika dan Robusta adalah dua varietas kopi paling populer di dunia. Tapi apa bedanya, dan mana yang lebih cocok untukmu?",
    imageUrl: "/robusta.jpg",
    category: "Pengetahuan",
    readTime: 4,
    content: `
      <p>Jika kamu sering nongkrong di kedai kopi, pasti sering mendengar istilah Arabika dan Robusta. Keduanya punya karakter yang berbeda dan sama-sama populer di dunia. Yuk kita bahas perbedaannya.</p>
      
      <h3>1. Tempat Tumbuh</h3>
      <p><strong>Arabika</strong> tumbuh di dataran tinggi dengan iklim sejuk (Aceh, Toraja, Bali).<br>
      <strong>Robusta</strong> lebih tahan di dataran rendah dengan suhu panas (Lampung, Jawa Timur).</p>
      
      <h3>2. Rasa & Aroma</h3>
      <p><strong>Arabika:</strong> kompleks, fruity, floral, dengan tingkat keasaman lebih tinggi.<br>
      <strong>Robusta:</strong> lebih pahit, earthy, dengan body tebal. Pas untuk espresso blend.</p>
      
      <h3>3. Kafein</h3>
      <p>Robusta mengandung kafein hampir 2x lebih banyak dari Arabika. Efeknya lebih strong, tapi rasanya juga lebih pahit.</p>
      
      <h3>4. Harga</h3>
      <p>Arabika cenderung lebih mahal karena proses budidayanya lebih sulit. Robusta lebih murah dan banyak dipakai pada kopi instan.</p>
      
      <h4>Kesimpulan</h4>
      <p>Pilih <strong>Arabika</strong> jika kamu suka rasa kompleks dan aromatik. Pilih <strong>Robusta</strong> jika mencari kopi kuat dengan harga terjangkau. Atau coba blend keduanya untuk rasa seimbang.</p>
    `
  },
  {
    slug: "kisah-di-balik-riyen",
    title: "Kisah di Balik Riyen Coffee & Eatery",
    excerpt:
      "Setiap kedai kopi punya cerita. Di Riyen Coffee & Eatery, setiap sudut menyimpan makna dan perjalanan.",
    imageUrl: "/image.png",
    category: "Cerita Kami",
    readTime: 3,
    content: `
      <p>Riyen Coffee & Eatery lahir dari mimpi sederhana: menghadirkan ruang hangat di mana kopi bukan hanya soal rasa, tapi juga cerita.</p>
      
      <h3>Awal Perjalanan</h3>
      <p>Bermula dari dapur rumah dengan alat seadanya, pendiri Riyen bertekad menghadirkan kopi berkualitas untuk teman, keluarga, dan komunitas sekitar. Dukungan masyarakat membuat Riyen berkembang menjadi kedai yang kamu kenal sekarang.</p>
      
      <h3>Filosofi Kami</h3>
      <p>Kami percaya kopi terbaik berasal dari proses yang jujur. Karena itu, kami memilih biji langsung dari petani lokal, memastikan kualitas tetap terjaga dari hulu hingga cangkir.</p>
      
      <h3>Lebih dari Sekadar Kedai</h3>
      <p>Bagi kami, Riyen adalah ruang berkumpul. Banyak ide, pertemuan, bahkan persahabatan lahir di meja kedai ini. Setiap kunjunganmu adalah bagian dari cerita besar Riyen Coffee & Eatery.</p>
    `
  }
];

// --- KOMPONEN CARD ARTIKEL ---
const ArticleCard = ({ article }: { article: typeof articles[0] }) => (
  <motion.div
    className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-2xl transition-shadow duration-300"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5 }}
    whileHover={{ y: -5 }}
  >
    <Link href={`/artikel/${article.slug}`}>
      <div className="relative w-full h-56">
        <Image
          src={article.imageUrl}
          alt={article.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <p className="text-sm text-brand-primary font-semibold">
          {article.category}
        </p>
        <h3 className="mt-2 text-xl font-bold text-brand-dark group-hover:text-brand-primary transition-colors">
          {article.title}
        </h3>
        <p className="mt-3 text-gray-500 text-sm leading-relaxed">
          {article.excerpt}
        </p>
        <div className="mt-4 text-xs text-gray-400">
          {article.readTime} menit baca
        </div>
      </div>
    </Link>
  </motion.div>
);

// --- HALAMAN ARTIKEL ---
export default function ArtikelPage() {
  const featuredArticle = articles[0];
  const otherArticles = articles.slice(1);

  return (
    <>
      <Header />
      <div className="bg-gray-50">
        <div className="container mx-auto py-20 px-6">
          <SectionTitle
            title="Artikel & Cerita"
            subtitle="Wawasan, tips, dan cerita menarik dari dunia kopi serta perjalanan Riyen Coffee & Eatery."
            center
          />

          {/* Featured Article */}
          <motion.div
            className="mt-12 mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Link href={`/artikel/${featuredArticle.slug}`} className="block group">
              <div className="grid md:grid-cols-2 gap-8 items-center bg-gradient-to-r from-gray-50 via-white to-gray-50 p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow">
                <div className="relative w-full h-80 rounded-md overflow-hidden">
                  <Image
                    src={featuredArticle.imageUrl}
                    alt={featuredArticle.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div>
                  <p className="text-sm text-brand-primary font-semibold">
                    {featuredArticle.category}
                  </p>
                  <h2 className="mt-2 text-3xl font-bold text-brand-dark group-hover:text-brand-primary transition-colors">
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

          {/* Other Articles */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
