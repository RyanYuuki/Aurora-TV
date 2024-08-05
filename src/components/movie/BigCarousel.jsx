/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ImageFetcher } from "@/hooks/useApi";
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";

const BigCarousel = ({ data }) => {
  if (!data || data.length === 0) {
    return (
      <div className="relative flex items-center justify-center h-[500px] max-md:h-[300px]">
        <Skeleton className="absolute w-full h-full" />
      </div>
    );
  }

  return (
    <div>
      <Swiper>
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <SlideContent data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const SlideContent = ({ data }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative flex items-center justify-center h-[500px] max-md:h-[300px]">
      {!isLoaded && <Skeleton className="absolute w-full h-full" />}
      <img
        className={`object-cover w-full h-full bg-center ${isLoaded ? 'block' : 'hidden'}`}
        src={ImageFetcher(data.backdrop_path)}
        alt={data.title}
        onLoad={() => setIsLoaded(true)}
      />
      <div className="inset-0 bg-gradient-to-t from-background to-from-background/10 absolute w-full h-full" />
      <div className="absolute left-0 h-full w-1/2 max-md:w-full max-md:p-2 max-md:gap-1 p-5 flex flex-col gap-3 justify-end">
        <h1 className="flex flex-col uppercase max-md:text-[20px]">
          <p className="text-primary/50 text-[14px] font-light">{data.release_date}</p>
          {data.title}
        </h1>
        <p className="max-md:hidden">{data.overview}</p>
        <Button className="w-fit">Watch Now</Button>
      </div>
    </div>
  );
};

export default BigCarousel;
