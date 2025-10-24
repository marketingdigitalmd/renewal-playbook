import type { Metadata } from "next";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";
import { Providers } from "@/components/Providers";

export const metadata: Metadata = {
  title: "The Renewal Playbook - Seu Guia de Renovação Pessoal",
  description: "Um protocolo compassivo para recuperar sua energia, clareza mental e equilíbrio emocional.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="font-sans">
        <Providers>
          <div className="flex min-h-screen">
            <Sidebar />
            <main className="flex-1 lg:ml-80 transition-all duration-300">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                {children}
              </div>
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
