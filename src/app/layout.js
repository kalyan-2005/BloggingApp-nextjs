import { Inter } from "next/font/google";
import "./globals.css";
import { UpperNavbar } from "@/components/navbar/upperNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default:"Home page",
    template:"%s | Next.js 14"
  },
  description: "Home description",
};

export default function RootLayout ({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-3/4 min-h-dvh m-auto">
          <UpperNavbar/>
          {children}
        </div>
      </body>
    </html>
  );
}
