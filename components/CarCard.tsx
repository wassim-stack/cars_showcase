"use client";
import { CarProps } from "@/types";
import { useState } from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";
import { calculateCarRent, generateCarImageUrl } from "@/utils";
import CardDetails from "./CardDetails";

interface CarCarProps {
  car: CarProps;
}
const CarCard = ({ car }: CarCarProps) => {
  const [isopen, setIsopen] = useState(false);
  const { city_mpg, drive, make, model, transmission, year } = car;
  const carRent = calculateCarRent(city_mpg, year);
  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] foont-semibold">$</span>
        {carRent}
        <span className="self-end text-[14px] foont-mediu">/day</span>
      </p>
      {/* Image */}
      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          alt="car rent"
          src={generateCarImageUrl(car)}
          fill
          priority
          className="object-contain"
        />
      </div>
      <div className="relative flex w-full mt-2">
        {/* Icons */}
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="steering-wheel.svg"
              alt="steering wheel"
              width={20}
              height={20}
            />
            <p className="text-[14px]">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="tire.svg" alt="tire" width={20} height={20} />
            <p className="text-[14px]">{drive.toUpperCase()}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="gas.svg" alt="gas" width={20} height={20} />
            <p className="text-[14px]">{city_mpg} MPG</p>
          </div>
        </div>
        {/* Button */}
        <div className="car-card__btn-container">
          <CustomButton
            title="Viem More"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsopen(true)}
          />
        </div>
      </div>
      <CardDetails
        isOpen={isopen}
        closeModal={() => setIsopen(false)}
        car={car}
      />
    </div>
  );
};

export default CarCard;
