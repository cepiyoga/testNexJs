export default function Loading() {
    return (
        <>
            <div>
                <div>Contact</div>
                <table>
                    <thead>
                    <tr>
                        <th>id</th>
                        <th>title</th>
                        <th>view</th>
                    </tr>
                    </thead>
                    <tbody>
                    {Array(3).fill(0).map((_el, index) => (
                        <tr key={index}>
                            <td className="h-2  bg-neutral-500 animate-pulse"></td>
                            <td className="h-2  bg-neutral-500 animate-pulse"></td>
                            <td className="h-2  bg-neutral-500 animate-pulse"></td>

                        </tr>

                    ))}
                    </tbody>
                </table>

            </div>
        </>
    )
}