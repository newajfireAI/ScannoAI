"use client"
import React, { useState } from 'react'
import InputField from './IputFiled';

const Inbox = () => {
    const [messages, setMessages] = useState([]);
    return (
        <>
            <div className='pt-24 pb-10 w-[70%] h-full flex flex-col justify-center items-center  mx-auto'>
                <div className="flex-1 w-full p-4 overflow-y-auto ">
                    <h1 className='text-white'>kjsldfjsdlf</h1>
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
                </div>
                <InputField />
            </div>
        </>
    )
}

export default Inbox
