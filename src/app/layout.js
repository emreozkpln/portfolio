import { Poppins } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

export const metadata = {
  title: "Emre Ozkaplan",
  description: "Hi I am Emre. This is my portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Toaster position="bottom-right" toastOptions={{ duration: 3000 }} />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
