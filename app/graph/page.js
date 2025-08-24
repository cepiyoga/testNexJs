import BarChart from "@/componensts/barchart";

export const metadata = {
    title: "Graph",
}

export default function GraphPage() {
    return (
        <>
            <h1>Contoh Graph</h1>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div><BarChart/></div>
                <div><BarChart/></div>
                <div><BarChart/></div>
                <div><BarChart/></div>
                <div><BarChart/></div>
                <div><BarChart/></div>
                <div><BarChart/></div>
                <div><BarChart/></div>
                <div><BarChart/></div>
                <div><BarChart/></div>
                <div><BarChart/></div>
                <div><BarChart/></div>

            </div>
        </>
    )
}