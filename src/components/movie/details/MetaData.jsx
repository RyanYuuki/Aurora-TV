/* eslint-disable @next/next/no-img-element */
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ImageFetcher } from "@/hooks/useApi";
import { VideoIcon } from "@radix-ui/react-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign, faHeart } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const MetaData = ({ data }) => {
  return (
    <div className="flex flex-row gap-3 w-full bg-neutral-700/20 p-2">
      <div className="flex flex-col gap-2 flex-shrink-0">
        <img
          className="w-[200px] h-[300px] object-cover"
          src={ImageFetcher(data.poster_path)}
          alt=""
        />
        <Link href={`/watch/${data.id}`}>
          <Button variant="outline" size="lg" className="flex flex-row gap-1 w-full">
            <VideoIcon />
            Watch
          </Button>
        </Link>
      </div>
      <div className="flex flex-col gap-1 p-2">
        <p>{data.release_date}</p>
        <h1>{data.title}</h1>
        <div className="flex flex-row gap-2 mb-3">
          {data.genres.map((genre) => (
            <Badge variant={"outline"} key={genre.id}>
              {genre.name}
            </Badge>
          ))}
          <Separator color="black" orientation="vertical" />
          <Badge className="rounded-sm">
            {data.vote_average.toString().slice(0, 3)}
          </Badge>
        </div>

        <p className="text-base bg-zinc-700/50 italic p-2">
          {data.overview + " " + data.tagline}
        </p>
        <div className="grid grid-cols-3 grid-rows-auto mt-2 font-regular text-primary/50">
          <div className="flex flex-col gap-3">
            <div>
              Rating :{" "}
              <Badge variant="outline">{data.isAdult ? "18+" : "PG-13"}</Badge>
            </div>
            <div>
              Origin : <Badge variant="outline">{data.origin_country}</Badge>
            </div>
            <div>
              Popularity : <Badge variant="outline">{data.popularity}</Badge>
            </div>
            <div>
              Budget : <Badge variant="outline">{data.budget}</Badge>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div>
              Revenue :{" "}
              <Badge variant="outline">
                <FontAwesomeIcon icon={faDollarSign} />
                {data.revenue}
              </Badge>
            </div>
            <div>
              Language :
              <Badge variant="outline">{data.original_language}</Badge>
            </div>
            <div>
              Duration :<Badge variant="outline">{data.runtime}m</Badge>
            </div>
            <div>
              Status :<Badge variant="outline">{data.status}</Badge>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            {data.production_companies.map((company) => (
              <Badge className="w-fit" key={company} variant="secondary">
                {company.name}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetaData;
