import Counter from "@/componensts/counter";
import Link from "next/link";

export default function NavMain() {
    return (
        <>
            <div className="bg-gray-100 h-20 flex items-center">
                <ul className={`flex gap-2 p-2 font-semibold`}>
                    <li><Link href="/">Root</Link></li>
                    <li><Link href="/main/home">Home</Link></li>
                    <li><Link href="/main/about">About</Link></li>
                    <li><Link href="/main/contact">Contact</Link></li>
                </ul>

            </div>
            <div>
                <Counter/>
            </div>
        </>
    )
}