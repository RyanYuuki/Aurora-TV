"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ImageFetcher } from "@/hooks/useApi";
import { VideoIcon } from "@radix-ui/react-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";

const Metadata = ({ data }) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex flex-row gap-3 bg-neutral-700/20 p-2 w-full">
        <div className="flex flex-col gap-2 flex-shrink-0">
          {!data ? (
            <Skeleton className="w-full max-w-[200px] h-[300px] max-md:max-w-[140px] max-md:h-[200px] object-cover" />
          ) : (
            <img
              className="w-full max-w-[200px] h-[300px] max-md:max-w-[140px] max-md:h-[200px] object-cover"
              src={ImageFetcher(data?.poster_path)}
              alt=""
            />
          )}
          <Link href={`/watch/${data?.id}`}>
            <Button
              variant="outline"
              size="lg"
              className="flex flex-row gap-1 w-full"
            >
              <VideoIcon />
              Watch
            </Button>
          </Link>
        </div>
        {!data ? (
          <div className="flex flex-col gap-1 p-2 w-full">
            <Skeleton className="w-full h-[20px] rounded mb-1" />
            <Skeleton className="w-full h-[24px] rounded mb-2" />
            <div className="flex flex-row gap-2 max-md:gap-[2px] max-md:mb-0 mb-3 mt-1 items-center">
              <Skeleton className="w-[60px] h-[20px] rounded-full mx-1" />
              <Separator color="black" orientation="vertical" />
              <Skeleton className="w-[40px] h-[20px] rounded-full mx-1" />
            </div>
            <Skeleton className="w-full h-[60px] rounded" />
            <div className="grid grid-cols-3 max-md:grid-cols-1 grid-rows-auto mt-2 font-regular text-primary/50 max-md:text-[12px]">
              {[...Array(3)].map((_, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-3 items-center max-md:gap-0"
                >
                  <Skeleton className="w-[19%] h-[20px] rounded" />
                  <Skeleton className="w-[19%] h-[20px] rounded" />
                  <Skeleton className="w-[19%] h-[20px] rounded" />
                  <Skeleton className="w-[19%] h-[20px] rounded" />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-1 p-2 flex-grow">
            <p>{data?.release_date}</p>
            <h1 className="max-md:text-base">{data?.title}</h1>
            <div className="flex flex-row gap-2 max-md:gap-[2px] max-md:mb-0 mb-3 mt-1 items-center">
              {data?.genres?.map((genre) => (
                <Badge
                  className="max-md:text-[8px]"
                  variant={"outline"}
                  key={genre.name}
                >
                  {genre.name}
                </Badge>
              ))}
              <Separator color="black" orientation="vertical" />
              <Badge className="rounded-sm max-md:text-[8px] max-md:w-fit h-fit">
                {data?.vote_average?.toString().slice(0, 3)}
              </Badge>
            </div>

            <Badge
              variant={"outline"}
              className="text-base font-normal italic p-2 max-md:hidden"
            >
              {data?.overview + " " + data?.tagline}
            </Badge>
            <div className="grid grid-cols-3 max-md:grid-cols-1 grid-rows-auto mt-2 font-regular text-primary/50 max-md:text-[12px]">
              <div className="flex flex-col gap-3 max-md:gap-0">
                <div>
                  Rating :{" "}
                  <Badge variant="outline">
                    {data?.isAdult ? "18+" : "PG-13"}
                  </Badge>
                </div>
                <div>
                  Origin :{" "}
                  <Badge variant="outline">{data?.origin_country}</Badge>
                </div>
                <div>
                  Popularity :{" "}
                  <Badge variant="outline">{data?.popularity}</Badge>
                </div>
                <div>
                  Budget : <Badge variant="outline">{data?.budget}</Badge>
                </div>
              </div>
              <div className="flex flex-col gap-3 max-md:gap-0">
                <div>
                  Revenue :{" "}
                  <Badge variant="outline">
                    <FontAwesomeIcon icon={faDollarSign} />
                    {data?.revenue}
                  </Badge>
                </div>
                <div>
                  Language :
                  <Badge className="uppercase" variant="outline">
                    {data?.original_language}
                  </Badge>
                </div>
                <div>
                  Duration :<Badge variant="outline">{data?.runtime}m</Badge>
                </div>
                <div>
                  Status :<Badge variant="outline">{data?.status}</Badge>
                </div>
              </div>
              <div className="flex flex-col justify-between max-md:hidden">
                {data?.production_companies?.map((company) => (
                  <Badge
                    className="w-fit"
                    key={company.name}
                    variant="secondary"
                  >
                    {company.name}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      {!data && (
        <div className="hidden max-md:block p-2 bg-neutral-700/30">
          <Skeleton className="w-full h-[60px] rounded mb-4" />
          <div className="grid grid-cols-3 grid-rows-auto gap-5 mt-5">
            {[...Array(3)].map((_, index) => (
              <div key={index}>
                <Skeleton className="w-full h-[20px] rounded mb-2" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Metadata;
