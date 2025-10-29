"use client";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import CHAT from "./CHAT";


export default function LanddingPage() {
  const [isArabic, setIsArabic] = useState(false);
  const [message, setMessage] = useState([]);
  const [showfileOption, setShowFileOption] = useState(false)
  const clieckref = useRef(null)
  const [ImgError, setImgError] = useState('')
  const [image, setImage] = useState(null);

  // const Messages = [
  //   { sender: true, reciver: false, message: "hi " },
  //   { sender: false, reciver: true, message: "Hello " },
  //   { sender: true, reciver: false, message: "mlkjsdlfjsdof" },
  //   { sender: true, reciver: false, message: `Why do we use it?It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).Where does it come from?` },
  //   { sender: true, reciver: false, message: "hi " },
  //   { sender: false, reciver: true, message: "Hello " },
  //   { sender: true, reciver: false, message: "mlkjsdlfjsdof" },
  //   { sender: true, reciver: false, message: `Why do we use it?It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).Where does it come from?` },
  //   { sender: true, reciver: false, message: "hi " },
  //   { sender: false, reciver: true, message: "Hello " },
  //   { sender: true, reciver: false, message: "mlkjsdlfjsdof" },
  //   { sender: true, reciver: false, message: `Why do we use it?It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).Where does it come from?` },
  // ];
  const Messages = [];
  useEffect(() => {
    setMessage(Messages);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (clieckref.current && !clieckref.current.contains(event.target)) {
        setShowFileOption(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 1024 * 1024) {
        setImgError(`your file size is ${file.size} which is more the 100 KB`)
        setImage(null)
      }
      const img = new Image();
      img.src = URL.createObjectURL(file)

      img.onload = () => {
        setImgError(``)
        setImage(img.src)
      }

    }
  };


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
            className={`absolute w-10 h-10 bg-white rounded-full flex items-center justify-center font-bold text-green-700 transition-all duration-300 ${isArabic ? "translate-x-[52px]" : "translate-x-2"
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
      <section className={`flex-1 w-[80%] mx-auto flex flex-col ${message.length > 0 ? "justify-between" : "justify-center items-center"}`}>

        {message.length > 0 ?
          (<div className="flex-1 w-full p-4 overflow-y-auto">
            <div className='h-full flex flex-col '>
              {/* Chat Area */}
              <div className='w-full flex-1 px-10 overflow-y-scroll hide-scrollbar h-full'>
                <div className='h-1 flex flex-col justify-between '>
                  {Messages.map((msg, idx) =>

                    <div key={idx} className={`flex flex-col py-3 px-2 ${msg.sender == true && 'items-start'} ${msg.sender == false && 'items-end'}`}>
                      <div className=''>
                        <p
                          className={`text-lg  inline-flex px-3 py-2 relative 
                            ${msg.sender == true && 'bg-gray-100 text-black rounded-t-xl rounded-br-xl Sender text-left'} 
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
            <div className=" text-center ">
              {/* <Image
                src={"/assets/logo.png"}
                width={100}
                height={100}
                alt={"Scanno AI Logo"}
              /> */}
              <h3 className="text-[#00793D] text-3xl font-medium text-center">{isArabic ? " هلا والله! أنا سكانو، خبير فحص السيارات عندك في قطر. شلون أقدر أساعدك اليوم؟" : "SCANNO - Smart Car Inspection"}</h3>
              <p className="text-xl font-medium text-center mt-10 mb-3">{isArabic ? "هلا! أنا سكانو – خبير فحص السيارات الذكي في قطر." : "I’m Scanno - your smart car inspection expert in Qatar"}</p>
              <p className="text-xl text-center mb-10">{isArabic ? "حمّل تقرير فحصك أو اسألني عن حالة سيارتك، وأنا بخبرك بكل التفاصيل." : "Upload your report or ask me about your car’s condition"}</p>

              <button disabled className="text-center text-md px-20 py-2.5 rounded-xl bg-[#00793d59] mb-4 opacity-50">{isArabic ? " أنصحك تغيّر فلتر الزيت بأقرب وقت، عشان لا تتعب الماكينة بعدين" : "Your data stays private. Scanno doesn’t store or keep any reports. "}</button>
              <div>
                <div className="flex items-center justify-center gap-2">
                  <input type="checkbox" id="teams" defaultChecked className="checkbox checkbox-success border-2 border-[#00793D] bg-[#00793D] text-white" />
                  <label htmlFor="teams" className="text-[#DF2929] text-xl text-center">{isArabic ? "حمّل تقرير فحصك أو اسألني عن حالة سيارتك، وأنا بخبرك بكل التفاصيل." : "I agree that my report will be processed instantly and not stored"}</label>
                </div>
              </div>
            </div>
          )}

        {/* ==== MESSAGE INPUT ==== */}
        {
          image &&
          <div className='w-20 h-20 mb-3 relative'>
            <img
              className='max-w-20 h-20'
              src={image}
            />
            <div onClick={() => setImage('')} className='absolute top-0 right-0 bg-gray-200'>
              <RxCross2 />
            </div>
          </div>
        }
        <div className={`${message.length > 0 ? "w-full" : "w-[50%]"} flex border border-[#00793D] px-4 py-2 rounded-full mt-4 shadow-sm`}>
          <form className="flex justify-between items-center w-full gap-4">
            <div className="relative">
              <Icon onClick={() => setShowFileOption(!showfileOption)} icon="si:attachment-duotone" className="text-[#00793D]" width={24} height={24} />

              {showfileOption && <div ref={clieckref} className={`bg-white shadow w-[180px] px-6 py-3 rounded-xl absolute bottom-10 transition-all duration-300 ${showfileOption ? "opacity-100 visible"
                : "opacity-0 invisible"}`}>

                <label htmlFor="pdf" className="flex w-full items-center mb-6 gap-2"><Icon icon="lsicon:file-pdf-filled" className="text-2xl" /> Upload PDF</label>
                <input onChange={handleImageChange} accept="application/pdf" type="file" id="pdf" className="hidden" />

                <label htmlFor="image" className="flex w-full items-center gap-2"><Icon icon="akar-icons:image" className="text-2xl" /> Upload Image</label>
                <input onChange={handleImageChange} accept="image.jpg, image/png, image/jpg, image/jpeg" type="file" id="image" className="hidden" />

              </div>}
            </div>
            <input
              type="text"
              placeholder="Ask Anything...."
              className="flex-1 focus:outline-none bg-transparent"
            />
            <button type="submit">
              <Icon icon="ri:send-plane-fill" className="text-[#00793D]" width={24} height={24} />
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
