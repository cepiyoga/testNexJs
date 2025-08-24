'use client'

import {useState} from "react";

export default function TogglePage() {
    let [isVisible, setVisible] = useState(false);

    return (
        <>
            <div>
                <div className="relative">
                    <button onClick={() => {
                        setVisible(!isVisible)
                    }}
                            className={`rounded ${isVisible ? 'bg-red-300' : 'bg-sky-300'} px-2 py-1`}>{isVisible ? 'Hide' : 'Show'}</button>
                    {isVisible && (
                        <div className={`bg-gray-300 h-20 -top-2 left-13 px-2 py-1 mt-2 w-1/4 absolute`}>
                            Area yg tersembunyi
                        </div>
                    )}
                </div>


                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam at, consectetur deleniti
                        doloribus eaque esse eveniet iusto molestias nihil nulla pariatur quae quasi quidem quisquam
                        recusandae sapiente soluta tempora?</p>
                </div>

            </div>


        </>
    )
}