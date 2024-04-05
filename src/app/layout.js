import { Inter } from "next/font/google";
import "../app/globals.css";
import "../app/slick.css";
import '../app/Slider.css'
import '../app/style.css'
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Coinbidex",
  description: "Coinbidex is a exchange like Binance and other exchanges",
  icons: {
    icon: "/icon.png"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
