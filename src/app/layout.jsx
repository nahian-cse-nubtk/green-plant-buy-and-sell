import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from '../Components/Navbar'
import Provider from "@/Provider/Provider";
import { Toaster } from "react-hot-toast";
import Footer from "@/Components/Footer";


export const metadata = {
  title: "Green World",
  description: "Plant Buy and Sell Management",
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">


      <body>
        <Provider>
        <Navbar />
        {children}
        </Provider>
        <Toaster/>
        <Footer></Footer>
      </body>

    </html>
  );
}
