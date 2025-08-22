export default function ButtonRed({children}) {
    return (
        <button
            className={`rounded bg-red-500 px-3 py-1 text-white hover:text-red-500 hover:bg-white hover:ring hover:ring-red-500 hover:cursor-pointer`}>
            {children}
        </button>
    )
}