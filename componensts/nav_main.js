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
                    <li><Link href="/main/data">Data</Link></li>
                    <li><Link href="/main/toggle">Toggle</Link></li>
                    <li><Link href="/graph">Graph</Link></li>
                </ul>

            </div>

        </>
    )
}