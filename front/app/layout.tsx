import type { Metadata } from "next";
import { Unbounded, Sora } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollSmoother from "@/components/ScrollSmoother";
import '@/app/styles.css';


const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio - PETARD",
  description: "Ouep",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${unbounded.variable} ${sora.variable} h-full antialiased bg-primary-lighter`}
    >
      <body className="min-h-full flex flex-col items-center justify-center">
        <ScrollSmoother>
          <Header />
          {children}
          <Footer />
        </ScrollSmoother>
      </body>
    </html>
  );
}
