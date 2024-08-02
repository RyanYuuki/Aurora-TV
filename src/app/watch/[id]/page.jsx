"use client";
import { useParams } from "next/navigation";
import React from "react";

const Watch = () => {
  const { id } = useParams();

  return (
    <div>
      <iframe
        src={`https://vidsrc.pro/embed/movie/${id}`}
        referrerPolicy="origin"
        allowFullScreen
        width="100%"
        height="450"
        scrolling="no"
        className="max-w-3xl mx-auto px-4 pt-6"
      ></iframe>
    </div>
  );
};

export default Watch;
