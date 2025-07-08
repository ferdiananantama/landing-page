"use client";
import { useRef } from "react";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import HomeThree from "@/assets/png/img-3.png";
import HomeFour from "@/assets/png/img-4.png";
import HomeFifth from "@/assets/png/img-5.png";
import HomeSix from "@/assets/png/img-6.png";
import HomeSeven from "@/assets/png/img-7.png";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function SectionSlider() {
  const sliderRef = useRef(null);
  const [sliderInstanceRef, slider] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 20,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 1.2 },
      },
      "(min-width: 768px)": {
        slides: { perView: 2 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 2.5 },
      },
    },
  });

  const items = [
    {
      image: HomeThree,
      addrress: "Pandeyan, Yogyakarta",
      title: "BASE 1",
      desc: "2 Bedrooms",
    },
    {
      image: HomeFour,
      addrress: "Ngaglik, Yogyakarta",
      title: "BASE 2",
      desc: "3 Bedrooms",
    },
    {
      image: HomeFifth,
      addrress: "Ngemplak, Yogyakarta",
      title: "BASE 3",
      desc: "4 Bedrooms",
    },
    {
      image: HomeSix,
      addrress: "Ngaglik, Yogyakarta",
      title: "BASE 4",
      desc: "3 Bedrooms",
    },
    {
      image: HomeSeven,
      addrress: "Ngaglik, Yogyakarta",
      title: "BASE 5",
      desc: "3 Bedrooms",
    },
  ];

  return (
    <section className="flex flex-col md:gap-10 gap-6 justify-center md:pb-20 pb-12 bg-white relative min-h-screen">
      <div className="flex flex-col lg:flex-row justify-between md:gap-6 gap-2 items-start lg:items-center px-4 sm:px-8 lg:px-22">
        <h2 className="text-[32px] sm:text-[40px] lg:text-[50px] font-medium text-[#303030]">
          Upgrade Your Model.
        </h2>
        <p className="text-[#667085] text-sm sm:text-base font-light max-w-2xl">
          Enhance your model with pre-designed add-ons like the Base Deck and
          the Base Deck+. Additional items are also available through key
          partnerships.
        </p>
      </div>

      {/* Slider */}
      <div className="relative">
        <div ref={sliderInstanceRef} className="keen-slider md:px-8 lg:px-20">
          {items.map((item, i) => (
            <div key={i} className="keen-slider__slide group p-4">
              <div className="overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={622}
                  height={400}
                  className="w-full h-auto object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col gap-2 mt-5 px-2 sm:px-4">
                <p className="text-[#16161652] text-base">{item.addrress}</p>
                <h3 className="text-xl sm:text-2xl font-medium text-black">
                  {item.title}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 items-start gap-3 text-sm sm:text-base text-gray-500">
                  <div>
                    <p>{item.desc}</p>
                    <p className="text-gray-400">Pre-launch: Prices TBA</p>
                  </div>
                  <p className="text-gray-500">
                    Our flagship model encompasses all the essentials. It’s
                    compact yet spacious, efficient yet adaptable.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-2 mt-8">
          <button
            onClick={() => slider.current?.prev()}
            className="bg-white border border-slate-300 p-2 rounded-md"
          >
            <ChevronLeft color="black" />
          </button>
          <button
            onClick={() => slider.current?.next()}
            className="bg-white border border-slate-300 p-2 rounded-md"
          >
            <ChevronRight color="black" />
          </button>
        </div>
      </div>
    </section>
  );
}
