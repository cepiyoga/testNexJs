import {Geist, Geist_Mono, Inter} from "next/font/google";
import "./globals.css";
import NavMain from "@/componensts/nav_main";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const inter = Inter({subsets: ['latin']})

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: {
        template: 'OIPS | %s',
        default: 'OIPS'
    },
    description: "Belajar NextJs by Cepi Yoga",
}

export default function RootLayout({children}) {
    return (
        <html lang="en" className={inter.className}>
        <body>
        <header className={`container mx-auto`}>
            <NavMain/>
        </header>
        <main className={`container mx-auto`}>
            {children}
        </main>
        </body>
        </html>
    );
}
