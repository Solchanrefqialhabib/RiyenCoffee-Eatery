"use client";
import { use, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import SectionTitle from "../../components/SectionTitle";
import { articles as allArticles } from "../page";
import { Facebook, Twitter, Share2 } from "lucide-react";

type Article = typeof allArticles[0];

export default function ArticleDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params); // ✅ unwrapping params pakai use()
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    const foundArticle = allArticles.find((a: Article) => a.slug === slug);
    if (foundArticle) {
      setArticle(foundArticle);
    }
  }, [slug]);

  if (!article) {
    return (
      <>
        <Header />
        <div className="container mx-auto py-20 px-6 text-center">
          <SectionTitle
            title="Artikel Tidak Ditemukan"
            subtitle="Maaf, kami tidak dapat menemukan artikel yang Anda cari."
            center
          />
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto py-20 px-6 max-w-4xl">
          <div className="mb-8">
            <Link
              href="/artikel"
              className="text-brand-primary font-semibold relative after:block after:h-[2px] after:w-0 after:bg-brand-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              ← Kembali ke Semua Artikel
            </Link>
          </div>

          <div className="text-center mb-12">
            <p className="text-brand-primary font-semibold">{article.category}</p>
            <h1 className="mt-2 text-4xl md:text-5xl font-extrabold text-brand-dark leading-tight">
              {article.title}
            </h1>
            <p className="mt-4 text-gray-500">{article.readTime} menit baca</p>
          </div>

          <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-xl mb-12">
            <Image
              src={article.imageUrl}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent"></div>
          </div>

          <article className="prose lg:prose-lg max-w-none text-gray-700 leading-relaxed">
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </article>

          <div className="mt-16 pt-8 border-t border-gray-200 text-center">
            <h3 className="font-bold text-brand-dark">Bagikan Artikel Ini</h3>
            <div className="flex justify-center gap-4 mt-4">
              <button className="p-3 rounded-full bg-gray-100 hover:bg-brand-primary hover:text-white transition">
                <Facebook className="w-5 h-5" />
              </button>
              <button className="p-3 rounded-full bg-gray-100 hover:bg-brand-primary hover:text-white transition">
                <Twitter className="w-5 h-5" />
              </button>
              <button className="p-3 rounded-full bg-gray-100 hover:bg-brand-primary hover:text-white transition">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
