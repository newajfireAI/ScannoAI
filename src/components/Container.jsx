import React, { Children } from 'react'

export default function Container({children}) {
    return (
        <div
            style={{
                backgroundImage: "url('/assets/background.jpeg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            className="w-screen h-screen"
        >
            <div className="bg-black/75 w-screen h-screen overflow-auto hide-scrollbar flex flex-col">
            {children}
            </div>
        </div>
    )
}
