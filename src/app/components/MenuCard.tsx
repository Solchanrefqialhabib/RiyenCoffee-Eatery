"use client";
import { motion, MotionProps } from "framer-motion";
import Image from "next/image";

interface MenuCardProps extends MotionProps {
  name: string;
  // price: string;
  image: string;
  description: string;
}

const MenuCard: React.FC<MenuCardProps> = ({ name, image, description, ...motionProps }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
      whileHover={{ y: -5 }}
      {...motionProps}
    >
      {/* Gambar */}
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>

      {/* Konten */}
      <div className="p-4 text-center">
        <h3 className="text-xl font-bold text-brand-dark">{name}</h3>
        <p className="mt-1 text-gray-500 text-sm line-clamp-2">{description}</p>
      </div>
    </motion.div>
  );
};

export default MenuCard;
