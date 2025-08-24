export default function DataTableStock(props) {
    let data = props.data;
    return (
        <>
            <table className="min-w-full divide-y divide-gray-300">
                <thead>
                <tr>
                    <th className="text-left px-4 py-2">Warehouse</th>
                    <th className="text-left px-4 py-2">Item Code</th>
                    <th className="text-left px-4 py-2">Description</th>
                    <th className="text-left px-4 py-2">Category</th>
                    <th className="text-left px-4 py-2">Group</th>
                    <th className="text-left px-4 py-2">Qty</th>
                </tr>
                </thead>
                <tbody>
                {data.map((dt, index) => (
                    <tr key={index}>
                        <td className="px-4 py-2">{dt.WH}</td>
                        <td className="px-4 py-2">{dt.item_no}</td>
                        <td className="px-4 py-2">{dt.Descriptions}</td>
                        <td className="px-4 py-2">{dt.itemCatagory}</td>
                        <td className="px-4 py-2">{dt.prodGroup}</td>
                        <td className="px-4 py-2 text-right">{Number(dt.Qty).toFixed(2)}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}