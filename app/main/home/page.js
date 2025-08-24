import Link from "next/link";

export const metadata = {
    title: "Home",
}
export default function Home() {
    return (
        <>
            <h1>Home ok</h1>
            <div className="flex gap-x-2">
                <Link className={`bg-gray-400 px-3 rounded py-1`} href='/blog/bcd'>Blog</Link>
                <Link className={`bg-sky-400 px-3 rounded py-1`} href="/blog/bbg">OK</Link>
            </div>
        </>
    )
}