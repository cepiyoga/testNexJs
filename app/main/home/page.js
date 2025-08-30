import Link from "next/link";

export const metadata = {
    title: "Home",
}
export default function Home() {
    return (
        <>
            <h1 className={`text-4xl bg-green-500 my-2 rounded px-2 py-1 text-white text-center`}>Home Baru</h1>

            <div className={`flex justify-between`}>
                <div className={`space-x-4 bg-amber-200`}>
                    <button className={` bg-green-500 my-2 rounded px-2 py-1 text-white text-center`}>Ok</button>
                </div>
                <div className={`space-x-4 bg-amber-200`}>
                    <button className={` bg-green-500 my-2 rounded px-2 py-1 text-white text-center`}>Ok</button>
                    <button className={` bg-green-500 my-2 rounded px-2 py-1 text-white text-center`}>Ok</button>
                    <button className={` bg-green-500 my-2 rounded px-2 py-1 text-white text-center`}>Ok</button>
                    <button className={` bg-green-500 my-2 rounded px-2 py-1 text-white text-center`}>Ok</button>
                    <button className={` bg-green-500 my-2 rounded px-2 py-1 text-white text-center`}>Ok</button>
                    <button className={` bg-green-500 my-2 rounded px-2 py-1 text-white text-center`}>Ok</button>
                    <button className={` bg-green-500 my-2 rounded px-2 py-1 text-white text-center`}>Ok</button>
                    <button className={` bg-green-500 my-2 rounded px-2 py-1 text-white text-center`}>Ok</button>
                    <button className={` bg-green-500 my-2 rounded px-2 py-1 text-white text-center`}>Ok</button>
                    <button className={` bg-green-500 my-2 rounded px-2 py-1 text-white text-center`}>Ok</button>
                    <button className={` bg-green-500 my-2 rounded px-2 py-1 text-white text-center`}>Ok</button>
                    <button className={` bg-green-500 my-2 rounded px-2 py-1 text-white text-center`}>Ok</button>
                    <button className={` bg-green-500 my-2 rounded px-2 py-1 text-white text-center`}>Ok</button>
                    <button className={` bg-green-500 my-2 rounded px-2 py-1 text-white text-center`}>Ok</button>
                </div>
                <div className={`space-x-4 bg-amber-200`}>
                    <button className={` bg-green-500 my-2 rounded px-2 py-1 text-white text-center`}>Ok</button>

                </div>

            </div>

            <div className="flex gap-x-2">
                <Link className={`bg-gray-400 px-3 rounded py-1`} href='/blog/bcd'>Blog</Link>
                <Link className={`bg-sky-400 px-3 rounded py-1`} href="/blog/bbg">OK</Link>
            </div>
        </>
    )
}