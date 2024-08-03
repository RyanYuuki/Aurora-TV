"use client";
import MetaData from "@/components/movie/details/MetaData";
import Poster from "@/components/movie/details/Poster";
import { fetchMovieInfo, ImageFetcher } from "@/hooks/useApi";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Details = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [posterSrc, setPosterSrc] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchMovieInfo(id);
      console.log(data);
      setData(data);
      setPosterSrc(ImageFetcher(data.backdrop_path))
    };
    loadData();
  }, [id]);

  if(!data) return <h1>Loading..</h1>

  return (
    <div className="flex flex-col items-center px-10 max-md:px-1 max-md:gap-[2px] gap-2 min-h-screen" >
      <Poster src={posterSrc} />
      <MetaData data={data} />
    </div>
  );
};

export default Details;
