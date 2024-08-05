'use client';
import { fetchMoviePopular, fetchMovieTopRated, fetchMovieTrending, fetchMovieUpcoming } from "@/hooks/useApi";
import BigCarousel from "@/components/movie/BigCarousel";
import DataTabs from "@/components/movie/DataTabs";
import { useEffect, useState } from "react";

export default function Home() {
  const [CarouselData, setCarouselData] = useState(null);
  const [tabsData, setTabsData] = useState(null);
  useEffect(() => {
    const loadData = async () => {
      const data = await fetchMovieTopRated();
      const TrendingData = await fetchMovieTrending();
      const PopularData = await fetchMoviePopular();
      const UpcomingData = await fetchMovieUpcoming();
      setCarouselData(TrendingData);
      setTabsData([TrendingData, PopularData, data ,UpcomingData]);
    }
    loadData();
  },[])

  return (
    <main className="flex flex-col gap-5 min-h-screen px-20 max-md:px-3">
      <BigCarousel data={CarouselData} />
      <DataTabs data={tabsData} />
    </main>
  );
}
