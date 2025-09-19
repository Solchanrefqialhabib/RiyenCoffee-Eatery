"use client";
import { motion } from 'framer-motion';
import Header from '../components/Header';
import SectionTitle from '../components/SectionTitle';

// Definisikan tipe data untuk kategorid
interface MenuCategory {
  name: string;
  description: string;
  items: { name: string; image: string; }[];
}

// Data menu
export const menuData: MenuCategory[] = [
  {
    name: "MINUMAN",
    description: "Kopi dan minuman non-kopi yang dibuat dengan tangan oleh barista ahli kami untuk menyempurnakan hari Anda.",
    items: [
      { name: "Espresso", image: "/img (2).JPG" },
      // ... item lainnya
    ]
  },
  {
    name: "MAKANAN",
    description: "Hidangan Riyen disajikan dari bahan-bahan segar dan berkualitas, diolah dengan tepat oleh tim kitchen untuk menjaga keseimbangan rasa yang harmonis. Setiap sajian tidak hanya menghadirkan makanan, tetapi juga pengalaman yang memanjakan indera.",
    items: [
      { name: "Croissant", image: "/old.jpg" },
      // ... item lainnya
    ]
  }
];

export default function Menu() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <div className="relative bg-white">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-green-50 rounded-full filter blur-3xl opacity-50 -z-10"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-green-50 rounded-full filter blur-3xl opacity-50 -z-10"></div>

        <div className="relative container mx-auto py-20 px-6 space-y-20">
          <motion.section
            className="grid md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-brand-dark text-center md:text-left">
              <h2 className="text-3xl font-bold uppercase">Minuman Nikmat & Makanan Lezat.</h2>
              <p className="mt-4 text-gray-500 italic">Rahasia untuk membuat hidup lebih baik.</p>
              <p className="mt-6 text-gray-600">
                Memang benar. Secangkir kopi yang sempurna dan camilan yang lezat dapat mencerahkan hari Anda. Kami memastikan semua yang Anda pilih memiliki kualitas terbaik.
              </p>
            </div>
            <div className="relative w-full h-64 rounded-lg overflow-hidden">
              <img 
                src="/set.jpg"
                alt="Produk Unggulan"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.section>

          {menuData.map((category, index) => (
            <motion.section 
              key={category.name}
              className="grid md:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <div className={`text-brand-dark text-center md:text-left ${category.name === 'MINUMAN' ? 'md:order-2' : ''}`}>
                <h2 className="text-3xl font-bold">{category.name}</h2>
                <p className="mt-4 text-gray-600">{category.description}</p>
                <a href={`/menu/${category.name.toLowerCase()}`} className="mt-4 inline-block font-semibold text-brand-primary border border-brand-primary px-4 py-2 rounded-md hover:bg-brand-primary hover:text-white transition">
                  Jelajahi »
                </a>
              </div>
              <div className={`relative w-full h-64 rounded-lg overflow-hidden ${category.name === 'MINUMAN' ? 'md:order-1' : ''}`}>
                <img 
                  src={category.items[0].image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  );
}

