"use client";
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionTitle({ title, subtitle, center = false }: SectionTitleProps) {
  return (
    <motion.div 
      className={`mb-8 ${center ? 'text-center' : 'text-left'}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">{title}</h2>
      {subtitle && (
        <p className="text-gray-500 mt-2 text-base md:text-lg max-w-2xl mx-auto">{subtitle}</p>
      )}
    </motion.div>
  );
}