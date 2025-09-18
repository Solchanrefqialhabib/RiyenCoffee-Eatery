// src/app/loading.tsx
"use client"; // Diperlukan untuk menggunakan animasi framer-motion

import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <motion.h1
        className="text-4xl font-bold text-brand-primary"
        initial={{ opacity: 0, y: -20 }} // Mulai dari transparan dan sedikit di atas
        animate={{ opacity: 1, y: 0 }}   // Muncul ke posisi normal
        transition={{
          duration: 1.2,                // Durasi animasi muncul
          repeat: Infinity,               // Ulangi animasi selamanya
          repeatType: "reverse",          // Animasi akan bolak-balik (muncul-tenggelam)
          ease: "easeInOut",              // Gerakan animasi yang halus
        }}
      >
        Riyen
      </motion.h1>
    </div>
  );
}