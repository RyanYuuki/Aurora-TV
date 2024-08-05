/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ImageFetcher } from "@/hooks/useApi";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { Skeleton } from "../ui/skeleton";

const MovieItem = ({ movie }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const formattedDesc =
    movie.overview.length > 200
      ? movie.overview.substring(0, 200) + "..."
      : movie.overview;
  const CheckRating =
    movie.vote_average.toString().slice(0, 3).length != 3
      ? movie.vote_average.toString().slice(0, 3) + ".0"
      : movie.vote_average.toString().slice(0, 3);
  const formattedRating = CheckRating || "0.0";

  return (
    <Link href={`/details/${movie.id}`} key={movie.id} className="h-[350px]">
      <div className="relative w-full h-[250px]">
        {!isLoaded && <Skeleton className="absolute inset-0 w-full h-full" />}
        <img
          className={`w-full h-full object-cover ${isLoaded ? "block" : "hidden"}`}
          src={ImageFetcher(movie.backdrop_path)}
          alt={movie.title}
          onLoad={() => setIsLoaded(true)}
        />
      </div>
      <div className="flex flex-col mt-2">
        <div className="flex flex-row justify-between">
          <h2 className="text-base">{movie.title}</h2>
          <Badge variant={"outline"}>{formattedRating}</Badge>
        </div>
        <p className="mt-1">{formattedDesc}</p>
      </div>
    </Link>
  );
};

export default function TabsDemo({ data }) {
  const MetaData = [
    {
      tab: "trending",
      title: "Trending",
      description: "Movies Sorted by Trend",
    },
    {
      tab: "popular",
      title: "Popular",
      description: "Movies Sorted by Popularity",
    },
    {
      tab: "top-rated",
      title: "Top Rated",
      description: "Movies Sorted by Rating",
    },
    { tab: "upcoming", title: "Upcoming", description: "Upcoming Movies" },
  ];

  if (!data || data.length === 0) {
    return (
      <div className="grid grid-cols-3 max-md:grid-cols-1 max-md:gap-y-2 gap-y-8 gap-x-5">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="h-[350px]">
            <div className="relative w-full h-[250px]">
              <Skeleton className="absolute inset-0 w-full h-full" />
            </div>
            <div className="flex flex-col mt-2">
              <Skeleton className="h-6 w-3/4 mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <Tabs defaultValue="trending" className="w-full">
      <TabsList className="grid w-full grid-cols-4 bg-primary-foreground/50">
        {MetaData.map((meta) => (
          <TabsTrigger key={meta.tab} value={meta.tab}>
            {meta.title}
          </TabsTrigger>
        ))}
      </TabsList>
      {MetaData.map((meta, index) => (
        <TabsContent key={meta.tab} value={meta.tab}>
          <div className="my-5">
            <h2 className="text-2xl font-semibold font-mono">{meta.title}</h2>
            <p className="text-base mt-1 font-mono">{meta.description}</p>
          </div>
          <div className="grid grid-cols-3 max-md:grid-cols-1 max-md:gap-y-2 gap-y-8 gap-x-5">
            {data[index]?.map((movie) => (
              <MovieItem key={movie.id} movie={movie} />
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
