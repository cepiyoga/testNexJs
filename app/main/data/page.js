'use client';

import {useEffect, useState} from 'react';
import DataTableStock from "@/componensts/datatablestock";


export default function DataTable() {
    const [whse, setWhse] = useState('%');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    let infoLoading = `${whse === '%' ? 'All' : whse}`;

    ///throw new Error('oops')

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            try {
                const res = await fetch(`https://oi-portal.id/InventoryBC_NEW/${whse}/%/%/%`);
                const json = await res.json();
                setData(json);
            } catch (error) {
                console.error('Gagal fetch data:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [whse]); // akan fetch ulang setiap kali `whse` berubah

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <h1>List Inventory Onduline Indonesia Ver-1</h1>
            <div className={`flex mb-4 justify-start gap-2 p-1`}>
                <button onClick={() => setWhse('CBT-MB')}
                        className={`hover:cursor-pointer md:w-1/12  ${whse === 'CBT-MB' ? 'ring ring-red-200' : 'bg-gray-400'}  px-2 py-1 rounded`}>JKT {whse === '%' || whse === 'CBT-MB' ? '✅' : ''}</button>

                <button onClick={() => setWhse('DC010')}
                        className={`hover:cursor-pointer md:w-1/12  ${whse === 'DC010' ? 'ring ring-red-200' : 'bg-gray-400'}  px-2 py-1 rounded`}>SUB {whse === '%' || whse === 'DC010' ? '✅' : ''}
                </button>
                <button onClick={() => setWhse('MDN-CML')}
                        className={`hover:cursor-pointer md:w-1/12  ${whse === 'MDN-CML' ? 'ring ring-red-200' : 'bg-gray-400'}  px-2 py-1 rounded`}>MDN {whse === '%' || whse === 'MDN-CML' ? '✅' : ''}
                </button>
            </div>

            {loading ? (
                <p className="text-sm animate-pulse text-red-500">Loading data dari {infoLoading}...</p>
            ) : (
                <DataTableStock data={data}/>
            )}
        </div>
    );
}
