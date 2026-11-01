import type { Metadata } from "next";
import { Archivo, Figtree } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dojo con David · Datáfonos y pagos con tarjeta",
  description:
    "Hazte cliente de Dojo con David, tu asesor comercial: datáfonos rápidos, transferencias al día siguiente y atención personal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${archivo.variable} ${figtree.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#f0f0eb] font-[family-name:var(--font-figtree)]">{children}</body>
    </html>
  );
}
