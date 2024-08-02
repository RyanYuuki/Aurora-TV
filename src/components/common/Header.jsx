import React from "react";
import ThemeToggler from "./ThemeToggler";
import { Button } from "../ui/button";
import {
  GitHubLogoIcon,
  HomeIcon,
  MagnifyingGlassIcon,
} from "@radix-ui/react-icons";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";

const Header = () => {
  return (
    <div className="fixed w-full p-3 px-5 backdrop-blur-lg flex items-center justify-between z-50 bg-transparent">
      <div className="flex flex-row gap-5 items-center" >
        <h1>SoraTV</h1>
        <Separator orientation='vertical' />
        <Button variant="outline" className="flex flex-row items-center gap-1 font-medium bg-background/50" >
          <HomeIcon />
          HOME
        </Button>
      </div>

      <div className="flex flex-row gap-5 w-[40%] justify-end items-center">
        <Input placeholder="Search..." />
        <Button className="p-2" variant="outline" size="icon">
          <GitHubLogoIcon />
        </Button>
        <ThemeToggler />
      </div>
    </div>
  );
};

export default Header;
