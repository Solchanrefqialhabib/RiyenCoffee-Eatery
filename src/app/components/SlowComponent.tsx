// src/app/components/SlowComponent.tsx

// Fungsi ini akan menunda eksekusi selama waktu tertentu (dalam milidetik)
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function SlowComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  // Kita sengaja menunda selama 2 detik (2000 milidetik)
  // Anda bisa mengubah angka ini sesuai keinginan
  await sleep(2000); 
  
  return <>{children}</>;
}