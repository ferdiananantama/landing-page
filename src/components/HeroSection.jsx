import Image from "next/image";
import ImgMaps from "@/assets/png/maps.png";
import IconLocation from "@/assets/png/icons-location.png";
import IconHome from "@/assets/png/icon-home.png";
import IconSearch from "@/assets/png/icon-search.png";
import HomeOne from "@/assets/png/img-1.png";
import HomeTwo from "@/assets/png/img-2.png";
import HomeTwoAgain from "@/assets/png/img-2-again.png";
import IconSquareFoot from "@/assets/png/square_foot.png";
import IconBed from "@/assets/png/king_bed.png";
import IconBathTub from "@/assets/png/bathtub.png";
import HighlightHotel from "@/components/HighlightHotel";

export default function HeroSection() {
  return (
    <section className="flex md:flex-col-reverse lg:grid lg:grid-cols-2 gap-10 items-center bg-white md:h-screen h-[600px] px-6 lg:px-0 md:pt-20 pt-8">
      {/* Text Section */}
      <div className="flex flex-col gap-10 lg:gap-36 lg:pl-22">
        <div>
          <h1 className="text-3xl lg:text-[60px] font-medium leading-tight text-[#303030]">
            Let’s Find The Most <br />
            <span className="text-[#429BF4]">Suitable Home</span> For You!
          </h1>
          <p className="text-[#667085] md:text-base text-xs md:mt-4 mt-3 tracking-wide">
            We offer the best resident for you with a strategic location and the
            best home developer. Find your home right now!
          </p>

          <div className="flex md:flex-wrap md:gap-8 md:mt-8 gap-4 mt-6">
            <InfoItem value="29" label="Success Partners" />
            <InfoItem value="92+" label="Strategic Location" />
            <InfoItem value="120K" label="Satisfying Customer" />
          </div>
        </div>

        {/* Form */}
        <div className="p-4 border border-slate-50 shadow-sm rounded-md flex flex-col md:flex-row md:justify-between md:items-center gap-4 items-stretch w-full lg:w-auto">
          <InputWithIcon
            icon={IconLocation}
            label="Location"
            placeholder="Type your location"
            type="input"
          />
          <div className="h-[1px] md:h-5 md:w-[1px] bg-gray-300 hidden md:block" />
          <InputWithIcon
            icon={IconHome}
            label="Type"
            type="select"
            options={["2 Room", "3 Room"]}
          />
          <button className="bg-[#429BF4] text-white px-4 py-3 rounded-md flex items-center gap-3 justify-center w-full md:w-auto">
            <Image src={IconSearch} alt="Search" width={20} height={20} />
            Search
          </button>
        </div>
      </div>

      {/* Map Section */}
      <div className="md:relative md:w-full md:overflow-hidden hidden md:block">
        <Image
          src={ImgMaps}
          alt="Map"
          width={798}
          height={180}
          className="object-cover"
        />
        <HighlightHotel
          src={HomeTwo}
          width={120}
          height={120}
          alt="Home Preview"
          className="absolute top-12 right-18"
        />
        <HighlightHotel
          src={HomeTwo}
          width={120}
          height={120}
          alt="Home Preview"
          className="absolute top-5 left-60"
        />
        <HighlightHotel
          src={HomeTwoAgain}
          width={100}
          height={100}
          alt="Home Preview"
          className="absolute bottom-54 left-78"
        />
        <HighlightHotel
          src={HomeTwoAgain}
          width={100}
          height={100}
          alt="Home Preview"
          className="absolute bottom-75 right-38"
        />
        <div className="absolute top-75 border-[1.5px] border-[#A8AEE5] right-30 bg-white shadow-lg rounded-lg p-4 w-[420px]">
          <div className="flex gap-5 items-center">
            <Image
              src={HomeOne}
              width={105}
              height={133}
              alt="Home Preview"
              className="rounded mb-2"
            />
            <div className="flex flex-col gap-2">
              <p className="text-sm text-gray-500">Pandeyan, Yogyakarta</p>
              <p className="text-xl font-medium text-[#303030]">
                Palm Tree Resident
              </p>
              <div className="flex text-xs mt-2 gap-4 text-gray-600">
                <div className="flex gap-1 items-end">
                  <Image
                    src={IconSquareFoot}
                    alt="Square Foot"
                    width={20}
                    height={20}
                  />
                  <span className="text-sm text-[#303030A3]">120 M²</span>
                </div>
                <div className="flex gap-1 items-end">
                  <Image
                    src={IconBathTub}
                    alt="Bath Tub"
                    width={20}
                    height={20}
                  />
                  <span className="text-sm text-[#303030A3]">2 Room</span>
                </div>
                <div className="flex gap-1 items-end">
                  <Image src={IconBed} alt="Bed" width={20} height={20} />
                  <span className="text-sm text-[#303030A3]">4 Room</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InputWithIcon({ icon, label, placeholder, type, options }) {
  return (
    <div className="flex gap-3 md:items-center items-start w-full md:w-auto">
      <Image src={icon} alt={label} width={55} height={55} />
      <div className="flex flex-col w-full">
        <label className="text-sm md:text-base text-[#303030] mb-1">
          {label}
        </label>
        {type === "input" ? (
          <input
            type="text"
            placeholder={placeholder}
            className="text-sm md:text-base font focus:outline-none pb-1 text-[#667085]"
          />
        ) : (
          <select className="text-sm pb-1 md:text-base focus:outline-none text-[#667085]">
            <option>Select your type</option>
            {options.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </select>
        )}
      </div>
    </div>
  );
}

function InfoItem({ value, label }) {
  return (
    <div className="flex items-center md:gap-3 gap-2">
      <span className="text-xl md:text-2xl lg:text-3xl font-light text-[#264968]">
        {value}
      </span>
      <p className="md:text-sm text-[#667085] font-light text-[10px]">
        {label}
      </p>
    </div>
  );
}
