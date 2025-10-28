"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function LanddingPage() {
  const [isArabic, setIsArabic] = useState(false);
  const [message, setMessage] = useState([]);

  // Example mock messages (optional)
  // useEffect(() => {
  //   const Messages = [
  //     { sendmessage: "Hello for mlkjsdlfjsdof" },
  //     { replymessage: "hi for mlkjsdlfjsdof" },
  //   ];
  //   setMessage(Messages);
  // }, []);

  return (
    <div
      style={{
        backgroundImage: "url('/assets/chatgroudbg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-screen h-screen flex flex-col"
    >
      {/* ==== NAVBAR ==== */}
      <nav className="bg-white py-4 px-12 flex justify-between items-center shadow">
        <Image
          src={"/assets/logo.png"}
          width={100}
          height={100}
          alt={"Scanno AI Logo"}
        />

        {/* ==== LANGUAGE TOGGLE ==== */}
        <div
          onClick={() => setIsArabic(!isArabic)}
          className="relative flex items-center w-24 h-12 bg-green-700 rounded-full cursor-pointer transition-all duration-300"
        >
          {/* Moving circle */}
          <div
            className={`absolute w-10 h-10 bg-white rounded-full flex items-center justify-center font-bold text-green-700 transition-all duration-300 ${
              isArabic ? "translate-x-[52px]" : "translate-x-2"
            }`}
          >
            {isArabic ? "AR" : "EN"}
          </div>

          {/* Labels */}
          <div className="flex justify-between w-full px-4 text-white font-bold text-xl">
            <span>EN</span>
            <span>AR</span>
          </div>
        </div>
      </nav>

      {/* ==== MAIN CHAT SECTION ==== */}
      <section
        className={`flex-1 w-[80%] mx-auto flex flex-col ${
          message.length > 0
            ? "justify-between"
            : "justify-center items-center"
        }`}
      >
        {message.length > 0 ? (
          <div className="border flex-1 w-full bg-white/70 rounded-xl p-4 overflow-y-auto">
            Inbox container
          </div>
        ) : (
          <div className="border bg-white/70 rounded-xl p-8 text-gray-500">
            {/* You can show a welcome message or logo here */}
          </div>
        )}

        {/* ==== MESSAGE INPUT ==== */}
        <div className="flex border bg-white/80 px-4 py-2 rounded-full mt-4 shadow-sm">
          <form className="flex justify-between items-center w-full gap-4">
            <Icon icon="si:attachment-duotone" width={24} height={24} />
            <input
              type="text"
              placeholder="Ask Anything...."
              className="flex-1 focus:outline-none bg-transparent"
            />
            <button type="submit">
              <Icon icon="ri:send-plane-fill" width={24} height={24} />
            </button>
          </form>
        </div>
      </section>

      {/* ==== FOOTER ==== */}
      <p className="text-center pb-2 text-sm drop-shadow">
        Powered by Scanno AI - Qatar | Secure instant analysis
      </p>
    </div>
  );
};
