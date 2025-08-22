"use client"

import {useState} from "react";

const Card = (children) => {
    return (
        <div>{children}</div>
    )
}
export default function Home() {
    const name = "Cepi";
    const [label, setLabel] = useState('Show')
    const okj = (e) => {

        setLabel(label === 'Show' ? 'Hide' : 'Show')
        console.log(e);
    }

    return (
        <>
            hello
            <ul onClick={okj} className="bg-amber-200">
                <li>task</li>
                <li>{name}</li>
            </ul>

            <button className={'bg-amber-200 rounded-xl hover:cursor-pointer m-1 px-3 py-2'}
                    onClick={okj}>{label}
            </button>


        </>

    );
}
