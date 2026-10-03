import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `Sites Profissionais por Assinatura | ${siteConfig.name}`,
  description: `Tenha um site profissional para sua empresa a partir de R$${siteConfig.startingPrice}/mês. Site responsivo, hospedagem e recursos essenciais para sua presença online.`,
  openGraph: {
    title: `Sites Profissionais por Assinatura | ${siteConfig.name}`,
    description: `Tenha um site profissional para sua empresa a partir de R$${siteConfig.startingPrice}/mês.`,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-950 text-slate-100 antialiased selection:bg-indigo-500 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}