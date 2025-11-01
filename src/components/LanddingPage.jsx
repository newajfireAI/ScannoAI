"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import IputFiled from "./IputFiled";


export default function LanddingPage() {
  const [isArabic, setIsArabic] = useState(false);
  const [messages, setMessages] = useState([]);
  const clieckref = useRef(null)
  const [isSelected, setIsSelected] = useState(true);


  


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (clieckref.current && !clieckref.current.contains(event.target)) {
        setShowFileOption(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const hendleChangeLanguage = () => {
    setIsArabic(!isArabic)
  }
  const handleChange = (e) => {
    setIsSelected(e.target.checked);
  };



  return (
    <div
      style={{
        backgroundImage: "url('/assets/background.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-screen h-screen"
    >
      <div className="bg-black/75 w-screen h-screen flex flex-col">


        <Navbar hendleChangeLanguage={hendleChangeLanguage} isArabic={isArabic} />


        <section className={`flex-1 w-[80%] mx-auto flex flex-col ${messages.length > 0 ? "justify-between" : "justify-center items-center"}`}>

          {messages.length > 0 ?
            (<div className="flex-1 w-full p-4 overflow-y-auto">
              <div className='h-full flex flex-col '>
                {/* Chat Area */}
                <div className='w-full flex-1 px-10 overflow-y-scroll hide-scrollbar h-full'>
                  <div className='h-1 flex flex-col justify-between '>
                    {messages.map((msg, idx) =>

                      <div key={idx} className={`flex flex-col py-3 px-2 ${msg.sender == true && 'items-start'} ${msg.sender == false && 'items-end'}`}>
                        <div className=''>
                          <p
                            className={`text-lg  inline-flex px-3 py-2 relative 
                            ${msg.sender == true && 'bg-gray-50 text-black rounded-t-xl rounded-br-xl Sender text-left'} 
                            ${msg.sender == false && 'bg-[#00793D] text-white rounded-t-xl rounded-bl-xl Reciver text-right'} `}
                          >{msg.message}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>)
            : (
              <div className=" text-center text-white">
                <h3 className="text-white text-5xl font-black text-center animRight">{isArabic ? <span>سكانّو – فحص السيارة الذكي</span> : "SCANNO - Smart Car Inspection"}</h3>
                <p className="text-xl font-medium text-center mt-10 mb-3">{isArabic ? "أنا سكانّو – خبير فحص السيارات الذكي عندك في قطر" :"I’m Scanno - your smart car inspection expert in Qatar"}</p>
                <p className="text-xl text-center mb-10">{isArabic ? "حمّل تقريرك أو اسألني عن حالة موترك." : "Upload your report or ask me about your car’s condition"}</p>
              </div>
            )}

          {/* ==== MESSAGE INPUT ==== */}
          <IputFiled isSelected={isSelected} messages={messages} setMessages={setMessages} />
        </section>

        {/* ==== FOOTER ==== */}
        <p className="text-center pb-2 text-sm text-white">
          Powered by Scanno AI - Qatar | Secure instant analysis
        </p>

      </div>
    </div>
  );
};
