import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/ui/navbar";

export const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "700"]});
export const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"]});
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
                <Navbar />
                {children}
            </body>
        </html>
    );
}
