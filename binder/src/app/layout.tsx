import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Navbar from "./ui/navbar";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "700"]});
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500"]})
export const metadata: Metadata = {
  title: "Binder",
  description: "API documentation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      </head>
      <body className={`${poppins.className} bg-page-background antialiased`}>
        {children}
        <main>
          <Navbar />

          <div className="pl-[20vw] m-8">
            <div id="endpoint-path">
              <span className="text-2xl text-greyed-text align-super pr-3">category</span>
              <span className="material-symbols-outlined pr-3">chevron_right</span>
              <span className="text-2xl font-bold align-super pr-3">folder</span>
            </div>

            <h1 className="text-4xl mt-5">Find folder by ID</h1>
            <h3 className="text-base text-greyed-text mt-1">Short description of API endpoint</h3>

            <div className={`w-[76vw] h-12 mt-7 border-get-method border-[3px] rounded
            ${roboto.className}`}>
              <div className={`absolute w-20 h-8 bg-get-method rounded-sm m-[0.3rem]
                font-medium text-lg text-center pt-0.5`}>GET
              </div>
              <div className="text-xl ml-[6rem] mt-[0.4rem]">
                /example/endpoint/folder
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
