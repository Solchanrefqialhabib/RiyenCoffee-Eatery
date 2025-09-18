// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   // Metadata tetap sama
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="id">
//       <body
//         className={`${inter.className} bg-white flex flex-col min-h-screen`}
//       >
//         <Navbar />
//         <main className="flex-grow">
//           {children}
//         </main>
//         <Footer />
//       </body>
//     </html>
//   );
// }

// src/app/layout.tsx

import type { Metadata } from "next";
import { Poppins } from "next/font/google"; // Menggunakan Poppins
import "./globals.css";
// import Navbar from "./components/Navbar"; // <-- HAPUS ATAU BERI KOMENTAR
import Footer from "./components/Footer";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['400', '600', '700', '800']
});

export const metadata: Metadata = {
  // ...
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={`${poppins.className} bg-white flex flex-col min-h-screen`}>
        {/* <Navbar /> */} {/* <-- HAPUS ATAU BERI KOMENTAR BARIS INI */}
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}