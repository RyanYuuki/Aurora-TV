'use client';
import React, { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import { Button } from "../ui/button";
import {
  GitHubLogoIcon,
  HomeIcon,
} from "@radix-ui/react-icons";
import { Separator } from "../ui/separator";
import Link from "next/link";

const Header = () => {
  return (
    <div className="fixed w-screen p-3 px-5 max-md:px-3 backdrop-blur-lg flex items-center justify-between z-50 bg-transparent">
      <div className="flex flex-row gap-5 max-md:gap-2 items-center" >
        <h1 className="font-inter" >Aurora<span className="text-sm ml-1" >Tv</span></h1>
        <Separator orientation='vertical' />
        <Link href={'/'} >
        <Button variant="outline" className="flex flex-row max-md:hidden items-center gap-1 font-medium bg-background/50" >
          <HomeIcon />
          HOME
        </Button>
        </Link>
      </div>

      <div className="flex flex-row gap-5 max-md:gap-2 w-[40%] max-md:w-[60%] justify-end items-center">
      <Link href={'/search/'} class="inline-flex items-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground px-4 py-2 relative h-8 w-full justify-start rounded-[0.5rem] bg-background text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64"><span class="hidden lg:inline-flex">Search for movies...</span><span class="inline-flex lg:hidden">Search</span><div class="pointer-events-none absolute right-[0.3rem] hidden h-6 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search h-6 w-5"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg></div></Link>
        <Button className="p-2" variant="outline" size="icon">
          <GitHubLogoIcon />
        </Button>
        <ThemeToggler />
      </div>
    </div>
  );
};

export default Header;
