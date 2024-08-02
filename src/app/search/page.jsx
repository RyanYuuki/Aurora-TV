"use client";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { fetchMovieSearch, ImageFetcher } from "@/hooks/useApi";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('Avenger');
  const [searchData, setSearchData] = useState(null);
  useEffect(() => {
    const loadData = async () => {
      const data = await fetchMovieSearch(searchTerm);
      setSearchData(data);
    };
    loadData();
  }, [searchTerm]);
  return (
    <div className="flex flex-col gap-3 px-20">
      <Input
        value={searchTerm}
        onChange={() => setSearchTerm(event.target.value)}
        className="w-[500px] mt-10"
        placeholder="Search Movie..."
      />
      <div className="grid grid-cols-6 grid-rows-auto gap-5 place-items-center">
        {searchData &&
          searchData.map((data) => (
            <Link
              href={`/details/${data.id}`}
              className="h-[370px] gap-1 p-3 text-center border border-border"
              key={data.id}
            >
              <Image
                width={200}
                height={270}
                src={ImageFetcher(data.poster_path)}
                className="rounded-lg object-cover"
                alt=""
              />
              <div className="flex flex-row justify-between mt-3">
                <div className="flex flex-row">
                  <Badge className="uppercase" variant="outline">
                    {data.original_language}
                  </Badge>
                  <Badge className="uppercase" variant="outline">
                    {data.isAdult ? "18+" : "PG-13"}
                  </Badge>
                </div>
                <div className="flex flex-row">
                  <Separator orientation="vertical" />
                  <Badge className="uppercase" variant="default">
                    {data.vote_average.toString().slice(0, -2)}
                  </Badge>
                </div>
              </div>
              <h2 className="text-[15px]" >
                {data.title.length > 30
                  ? data.title.substring(0, 30) + "..."
                  : data.title}
              </h2>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Search;
