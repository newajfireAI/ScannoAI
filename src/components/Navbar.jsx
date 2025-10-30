import Image from "next/image";
import Link from "next/link";


export default function Navbar({ hendleChangeLanguage, isArabic }) {
    return (
        <nav className="bg-black/25 pt-4 pb-1 px-20 flex justify-between items-center border border-b-gray-50/20 ">
            <div className="w-[150px] h-[69px]">
                <Link href={'/'}>
                    <Image
                        className="w-full h-full"
                        src={"/assets/LOGO_SCANNOAI.png"}
                        width={300}
                        height={300}
                        alt={"Scanno AI Logo"}
                    />
                </Link>
            </div>

            
            <div
                onClick={hendleChangeLanguage}
                className="relative flex items-center w-24 h-12 bg-green-700 rounded-full cursor-pointer transition-all duration-300"
            >
                
                <div
                    className={`absolute w-10 h-10 bg-white rounded-full flex items-center justify-center font-bold text-green-700 transition-all duration-300 ${isArabic ? "translate-x-[52px]" : "translate-x-2"
                        }`}
                >
                    {isArabic ? "AR" : "EN"}
                </div>

                
                <div className="flex justify-between w-full px-4 text-white font-bold text-xl">
                    <span>EN</span>
                    <span>AR</span>
                </div>
            </div>
        </nav>
    )
}
