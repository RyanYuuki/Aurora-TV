import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const Poster = ({ src }) => {
  if(!src) return (
    <Skeleton className="w-full object-cover object-top h-[400px]" />
  )
  return (
    <div className="w-full" >
      <img className="w-full object-cover object-top h-[400px]" src={src} alt="" />
    </div>
  );
};

export default Poster;
