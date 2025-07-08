import Logo from "@/assets/png/Logo.png";
import ImgFooter from "@/assets/png/footer-img.png";
import { MapPin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="md:h-[650px] h-[300px] relative bg-white text-black flex flex-col gap-5 overflow-hidden">
      <div className="px-4 sm:px-8 lg:px-32 flex flex-col md:flex-row md:justify-between items-center md:items-center gap-5 md:gap-0">
        <div>
          <Image src={Logo} alt="house" width={131} height={26} />
        </div>
        <div className="text-blue-500 border border-blue-500 px-4 py-1 rounded-full text-base sm:text-lg whitespace-nowrap">
          • Properly Indonesia
        </div>
        <div className="flex items-center gap-2">
          <MapPin color="grey" size={20} />
          <span className="text-gray-500 text-sm sm:text-base">
            Yogyakarta, Bali
          </span>
        </div>
      </div>

      <div className="absolute bottom-0 flex items-center justify-center z-0">
        <Image src={ImgFooter} alt="Footer" className="w-full" />
      </div>
      <div className="absolute md:bottom-6 bottom-3 w-full text-center z-10">
        <p className="text-white md:text-base text-[9px] font-light">
          Copyright ©2025
        </p>
      </div>
    </footer>
  );
}
