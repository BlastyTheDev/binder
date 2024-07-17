import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/ui/navbar";
import { poppins } from "@/app/ui/fonts";

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
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined&display=optional:opsz,wght,FILL,GRAD@24,400,0,0" />
            </head>
            <body className={`${poppins.className} bg-page-background antialiased`}>
                <Navbar />
                <div className="ml-[20vw] p-8">
                    {children}
                </div>
            </body>
        </html>
    );
}
