'use client'


import Link from "next/link";
import {usePathname} from "next/navigation";

export default function NavMain() {


    let pathname = usePathname();
    console.log(pathname);

    return (
        <>
            <div className="bg-gray-100 h-20 flex items-center gap-2 text-xl">
                <Link href="/"
                      className={`${pathname === '/' ? 'font-bold' : ''}`}>Root</Link>
                <Link href="/main/home"
                      className={`${pathname === '/main/home' ? 'font-bold animate-pulse' : ''}`}>Home</Link>
                <Link href="/main/about"
                      className={`${pathname === '/main/about' ? 'font-bold animate-pulse' : ''}`}>About</Link>
                <Link href="/main/contact"
                      className={`${pathname === '/main/contact' ? 'font-bold animate-pulse' : ''}`}>Contact</Link>
                <Link href="/main/data"
                      className={`${pathname === '/main/data' ? 'font-bold animate-pulse' : ''}`}>Data</Link>
                <Link href="/main/toggle"
                      className={`${pathname === '/main/toggle' ? 'font-bold animate-pulse' : ''}`}>Toggle</Link>
                <Link href="/graph"
                      className={`${pathname === '/graph' ? 'font-bold animate-pulse' : ''}`}>Graph</Link>


            </div>

        </>
    )
}