import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "700"]});
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
        <main className="">
          <div id="navbar" className="absolute bg-navbar-color w-1/5 h-full">
            <h1 className="font-semibold text-4xl pt-2.5 pl-2.5">Project Name Here</h1>
            <h3 className="text-greyed-text text-xl pt-0.5 pl-2.5">API Documentation</h3>

            <div className="bg-separator m-auto mt-4 w-11/12 h-px"></div>

            <Link href={"/"}
              className="block w-11/12 h-[50px] bg-separator rounded m-auto pl-3 mt-2">
                <span className="material-symbols-outlined pt-3">description</span>
                <span className="text-xl pl-[30px] align-super">Overview</span>
            </Link>
          </div>

          <div id="content" className="absolute pl-[20vw] m-8">
            <div id="endpoint-path">
              <span className="text-2xl text-greyed-text align-super pr-3">category</span>
              <span className="material-symbols-outlined pr-3">chevron_right</span>
              <span className="text-2xl font-bold align-super pr-3">folder</span>
            </div>

            <h1 className="text-4xl mt-5">Find folder by ID</h1>
            <h3 className="text-base text-greyed-text mt-1">Short description of API endpoint</h3>

            <div id="method" className="bg-greyed-text w-full h-12 outline-2">
              what
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
