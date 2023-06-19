import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Figtree } from "next/font/google";
import Footer from "@/components/footer/Footer";
const font = Figtree({ subsets: ["latin"] });
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata = {
  title: "IGLESIA SHEKINAH TC",
  description: "Donde se respira una atmósfera de Gloria",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ThemeProvider>
          <div className="container">
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
