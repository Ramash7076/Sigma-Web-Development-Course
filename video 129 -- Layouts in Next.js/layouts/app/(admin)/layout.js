import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Facebook - Connect with your friends and the world around you",
    description: "Facebook is a social utility.",
};

export default function RootLayout({ children }) {
    return (
        <>
            <span>Admin Layout</span>
            {children}
        </>
    );
}
