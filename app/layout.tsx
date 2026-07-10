import type { Metadata } from "next";
import { Press_Start_2P, JetBrains_Mono, Courier_Prime } from "next/font/google";
import "./globals.css";

// Fuente "pixel" para títulos/HUD (var: --pixel)
const pressStart = Press_Start_2P({
  variable: "--font-press-start",
  weight: "400",
  subsets: ["latin"],
});

// Fuente "mono" principal (var: --mono), variable → sin weight fijo
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

// Fallback mono del diseño original
const courierPrime = Courier_Prime({
  variable: "--font-courier-prime",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arcade Vault",
  description:
    "Juega clásicos arcade online y compite por el puntaje más alto.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${pressStart.variable} ${jetbrainsMono.variable} ${courierPrime.variable}`}
    >
      <body>
        {/* Capas de fondo: grid en perspectiva + scanlines + ruido */}
        <div className="av-bg" aria-hidden="true" />
        <div className="av-noise" aria-hidden="true" />
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
