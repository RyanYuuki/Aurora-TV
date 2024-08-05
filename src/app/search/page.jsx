"use client";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { fetchMovieSearch, ImageFetcher } from "@/hooks/useApi";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('Avenger');
  const [searchData, setSearchData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const data = await fetchMovieSearch(searchTerm);
      setSearchData(data);
      setLoading(false);
    };
    loadData();
  }, [searchTerm]);

  return (
    <div className="flex flex-col gap-5 px-5 max-md:px-2">
      <Input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-[500px] mt-10 max-md:w-[60%] max-md:mt-5"
        placeholder="Search Movie..."
      />
      {loading || searchData.length == 0 ? (
        <div className="grid grid-cols-6 max-md:grid-cols-2 grid-rows-auto gap-5 place-items-center bg-neutral-700/30 p-5 rounded-t-3xl">
          {[...Array(13)].map((_, index) => (
            <div key={index} className="flex flex-col gap-1 p-3 max-md:p-0 text-center">
              <Skeleton className="w-[200px] h-[270px] max-md:w-[150px] max-md:h-[230px] rounded-lg" />
              <div className="flex flex-row justify-between items-center my-1">
                <div className="flex flex-row items-center">
                  <Skeleton className="w-[30px] h-[30px] rounded-full mx-1" />
                  <Skeleton className="w-[30px] h-[30px] rounded-full mx-1" />
                </div>
                <div className="flex flex-row">
                  <Separator orientation="vertical" />
                  <Skeleton className="w-[40px] h-[30px] rounded-md mx-1" />
                </div>
              </div>
              <Skeleton className="w-[150px] h-[20px] rounded" />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-6 max-md:grid-cols-2 grid-rows-auto gap-5 place-items-center bg-neutral-700/30 p-5 rounded-t-3xl">
          {searchData &&
            searchData.map((data) => (
              <Link
                href={`/details/${data.id}`}
                className="flex flex-col gap-1 p-3 text-center"
                key={data.id}
              >
                <Image
                  width={200}
                  height={270}
                  src={ImageFetcher(data?.poster_path)}
                  className="rounded-lg object-cover"
                  alt=""
                />
                <div className="flex flex-row justify-between items-center my-1">
                  <div className="flex flex-row items-center">
                    <Badge className="uppercase" variant="outline">
                      {data?.original_language}
                    </Badge>
                    <Badge className="uppercase" variant="outline">
                      {data?.isAdult ? "18+" : "PG-13"}
                    </Badge>
                  </div>
                  <div className="flex flex-row">
                    <Separator orientation="vertical" />
                    <Badge className="uppercase" variant="default">
                      {data?.vote_average?.toString().slice(0, -2) || '0.0'}
                    </Badge>
                  </div>
                </div>
                <h2 className="text-[15px]" >
                  {data?.title?.length > 30
                    ? data?.title.substring(0, 30) + "..."
                    : data?.title}
                </h2>
              </Link>
            ))}
        </div>
      )}
    </div>
  );
};

export default Search;
