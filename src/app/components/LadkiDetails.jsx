"use client";
import { useState } from "react";
import ScratchText from "../components/ScratchText";
import MarriageCountdown from "../components/MarriageCountdown";
import LadkiEvents from "../components/LadkiEvents";
import Wardrobe from "../components/Wardrobe";
import PhotoGallery from "../components/PhotoGallery";
import Venue from "../components/Venues";
import LadkiWeather from "../components/LadkiWeather";

export default function LadkiDetails() {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="mx-auto w-full max-w-4xl text-center md:p-2">
      <p className="text-[17px] md:text-2xl text-[#B35800] font-cormorant-garamond">
        We cordially invite you to the wedding ceremony of
      </p>

      <div className="mt-8 text-center">
        <h2 className="text-[#B35800] font-pinyon-script text-center mt-14 md:text-4xl text-[38px] lg:text-[60px] leading-tight font-bold">
          Ria
        </h2>

        <p className="text-[#B35800] font-cormorant-garamond lg:text-[30px] md:text-2xl text-[16px]">
          (Grand D/o Late Smt. Pushpa Devi & Late Sh. Krishan Lal Chugh)
        </p>
        {/* <p className="text-[#B35800] font-cormorant-garamond lg:text-[30px] md:text-2xl mt-2 text-[16px]">
          (D/o Shri Hitesh Sanghvi & Smt. Rashmi Sanghvi)
        </p> */}

        <h2 className="text-[#B35800] font-pinyon-script text-center text-[38px] sm:text-7xl lg:text-[60px] leading-tight font-bold">
          <span className="text-[#B35800] font-cormorant-garamond text-center md:text-3xl text-[28px] lg:text-[36px] leading-tight font-medium">
            With
          </span>
          <br />
          Ankush
        </h2>

        {/* <p className="text-[#B35800] font-cormorant-garamond lg:text-[30px] md:text-2xl text-[16px]">
          (Grand S/o Mrs. Deepa Mahavir Prasad Dhanuka & Late Krishna Devi Dhanuka)
        </p> */}
        <p className="text-[#B35800] font-cormorant-garamond lg:text-[30px] md:text-2xl text-[16px]">
          (S/o Mrs. Deepa & Mr. Vikas Mahindru)
        </p>

        <ScratchText onReveal={() => setRevealed(true)} />

        {revealed && (
          <div className="countdown-fade-in">
            <MarriageCountdown />
          </div>
        )}

        <LadkiEvents />
        {/* <Wardrobe /> */}
        <PhotoGallery />
        <LadkiWeather />
        <Venue />
      </div>
    </div>
  );
}
