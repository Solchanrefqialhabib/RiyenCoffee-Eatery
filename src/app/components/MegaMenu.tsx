"use client";
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Komponen untuk setiap item di dalam megamenu
const MenuItem = ({ title, description, imageUrl, href }: { title: string, description: string, imageUrl: string, href: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
  >
    <div className="relative w-full h-48 rounded-lg overflow-hidden">
      <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" />
    </div>
    <div className="text-left">
      <h3 className="text-2xl font-bold text-white">{title}</h3>
      <p className="mt-2 text-gray-300">{description}</p>
      <Link href={href}>
        <span className="mt-4 inline-block font-semibold text-white border border-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition">
          Jelajahi »
        </span>
      </Link>
    </div>
  </motion.div>
);

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MegaMenu({ isOpen, onClose }: MegaMenuProps) {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-40 bg-black/50 backdrop-blur-lg overflow-y-auto"
      onClick={onClose}
    >
      <div className="container mx-auto px-6 py-24 pt-32" onClick={(e) => e.stopPropagation()}>
        <div className="space-y-16">
          <MenuItem
            title="MINUMAN"
            description="Kopi dan minuman non-kopi yang dibuat dengan tangan oleh barista ahli kami untuk menyempurnakan hari Anda."
            imageUrl="/cewe.jpg" // Ganti dengan gambar minuman
            href="/menu"
          />
          <MenuItem
            title="MAKANAN"
            description="Pastry dan makanan ringan berkualitas tinggi yang dibuat dengan bahan-bahan sederhana dan lezat."
            imageUrl="/croissant.jpg" // Ganti dengan gambar makanan
            href="/menu"
          />
        </div>
      </div>
    </motion.div>
  );
}
