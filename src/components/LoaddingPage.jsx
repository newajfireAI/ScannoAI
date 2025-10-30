"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import LanddingPage from "./LanddingPage";

export default function LoaddingPage() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const timer = setTimeout(() => {
            setLoading(false);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div style={{
                backgroundImage: "url('/assets/background.jpeg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
                className="w-screen h-screen "
            >

                <div className="flex justify-center items-center h-screen bg-black/75">
                    <Image
                        className="animate-pulse"
                        src={"/assets/LOGO_SCANNOAI.png"}
                        width={300}
                        height={300}
                        alt={"Scanno AI Logo"}
                    />
                </div>
            </div>
        );
    }


    return (
        <LanddingPage />
    );
}
