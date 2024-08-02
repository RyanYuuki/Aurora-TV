"use client";
import { BreadcrumbWithCustomSeparator } from "@/components/movie/watch/BreadCrumb";
import { ServerSelect } from "@/components/movie/watch/Select";
import { useParams } from "next/navigation";
import React, { useState } from "react";

const Watch = () => {
  const { id } = useParams();
  const videoSources = {
    autoembed: `https://player.autoembed.cc/embed/movie/${id}`,
    vidsrcpro: `https://vidsrc.pro/embed/movie/${id}`,
    vidsrc: `https://vidsrc.in/embed/movie/${id}`,
    superembed: `https://multiembed.mov/?video_id=${id}&tmdb=1`,
  };
  const [videoSource, setVideoSource] = useState(videoSources.autoembed);

  const handleServer = (value) => {
    setVideoSource(videoSources[value]);
  };

  return (
    <div className="flex flex-col gap-5 items-center">
      <BreadcrumbWithCustomSeparator id={id} />
      <ServerSelect onChange={handleServer} />
      <iframe
        src={videoSource}
        referrerPolicy="origin"
        allowFullScreen
        width="100%"
        height="450"
        scrolling="no"
        className="max-w-3xl mx-auto px-4 pt-6"
      />
    </div>
  );
};

export default Watch;
