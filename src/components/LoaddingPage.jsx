"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import LanddingPage from "./LanddingPage";

export default function LoaddingPage() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const timer = setTimeout(() => {
            setLoading(false);
        }, 200);

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

                
            </div>
        );
    }


    return (
        <LanddingPage />
    );
}
