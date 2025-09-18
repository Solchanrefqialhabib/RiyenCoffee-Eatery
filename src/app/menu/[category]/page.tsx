"use client";
import { useEffect, useState } from 'react';
import Image from "next/image";
import Header from "../../components/Header";
import SectionTitle from "../../components/SectionTitle";
import { menuData } from '../page'; // pastikan path benar

type MenuItem = typeof menuData[0]['items'][0];
type MenuCategory = typeof menuData[0];

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { category: categorySlug } = params;
  const [category, setCategory] = useState<MenuCategory | null>(null);

  useEffect(() => {
    const foundCategory = menuData.find(
      (c) => c.name.toLowerCase().replace(/\s+/g, '-') === categorySlug
    );
    if (foundCategory) {
      setCategory(foundCategory);
    }
  }, [categorySlug]);

  if (!category) {
    return (
      <>
        <Header />
        <div className="container mx-auto py-20 px-6 text-center">
          <SectionTitle title="Kategori Tidak Ditemukan" center />
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="bg-white">
        <div className="container mx-auto py-16 px-6 max-w-5xl">
          {/* Judul dan deskripsi */}
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              {category.name}
            </h1>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              {category.description}
            </p>
          </div>

          {/* Grid mirip contoh Starbucks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {category.items.map((item) => (
              <div
                key={item.name}
                className="relative group overflow-hidden rounded-lg shadow-md"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={500}
                  height={350}
                  className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300"
                />
                {/* Teks overlay di tengah */}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition duration-300">
                  <span className="text-white font-bold text-lg">{item.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
