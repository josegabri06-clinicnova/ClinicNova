import ScrollToTop from "@/components/ScrollToTop";
import TopBar from "@/components/TopBar";
import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ClinicNova — IA para clínicas: agenda llena, menos no-shows",
  description:
    "Automatizamos WhatsApp con IA para clínicas estéticas: reservas, reconfirmaciones y relleno de huecos (STS). Agenda llena sin esfuerzo.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <ScrollToTop />
        <TopBar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}