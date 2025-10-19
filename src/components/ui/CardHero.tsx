import { useState } from "react";
import { Image } from "astro:assets";

export type CardHeroProps = {
  name: string;
  price: string;
  category: string;
  img: ImageMetadata;
  description: string;
};

import FallbackImage from "../../images/hero/fallback.svg";

const CardHero = ({
  name,
  price,
  category,
  img,
  description,
}: CardHeroProps) => {
  const [image, setImage] = useState(img);

  const handleImageError = () => {
    setImage(FallbackImage);
  };

  return (
    <div
      id={name}
      className={`card bg-background border border-gray-700 rounded-lg flex flex-col relative h-[18rem] sm:h-[22rem] overflow-hidden w-full max-w-[19rem] sm:max-w-[23rem]`}
    >
      <div
        className={`body-card flex h-full flex-col p-2 sm:p-3 gap-2 sm:gap-3 transition-opacity duration-1000 opacity-0`}
      >
        <img
          className="aspect-video w-full rounded bg-gray-700 object-cover shrink-0"
          src={image.src}
          alt={name}
          loading="lazy"
          onError={handleImageError}
        />
        <div className="space-y-1 flex-1 flex flex-col">
          <p className="text-[0.65rem] sm:text-xs uppercase tracking-wide text-gray-400">
            {category}
          </p>
          <p className="font-bold text-base sm:text-lg text-gray-100 truncate">
            {name}
          </p>
          <p className="text-emerald-400 font-semibold text-sm sm:text-base">
            {price}
          </p>
          <p className="text-xs sm:text-sm text-gray-400 mt-1 leading-snug overflow-hidden">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardHero;

<style></style>;
