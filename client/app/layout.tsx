import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Scribble with friends",
    description: "Guess what your friends are drawing in real-time!",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
                <body className={inter.className}>
                    <Navbar />
                    {children}
                </body>
            </ThemeProvider>
        </html>
    );
}
