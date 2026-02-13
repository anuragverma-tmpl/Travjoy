"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { InputWithButton } from "./search";
import Link from "next/link";
import Citydropdown from "@/layout/navbar/Citydropdown";
import Currencydropdown from "@/layout/navbar/Currencydropdown";
import { SearchIcon, Heart, Menu } from "lucide-react";
import Hamburger from "./Hamburger";

const Navbar = () => {
  return (
    <>
      <div className=" w-full min-h-[85px] fixed top-0 z-50 bg-[#FFFCF9] shadow-[0_6px_20px_rgba(0,0,0,0.08)] ">
       
        <div
          className=" flex min-h-[48px] items-center py-[20px] md:ml-[57px] md:mr-[60px] sm:ml-[30px] sm:mr-[30px]  justify-between bg-[#FFFCF9] flex-wrap md:flex-nowrap"
        >
          <div className="flex items-center gap-3 flex-shrink:0 ">
            <Hamburger/>
            <Link href="/expers" className="text-xl font-bold flex-shrink-0 ">
              <Image
                src="/logo1.svg"
                alt="Logo"
                width={89}
                height={48}
                className="bg-[#FFFCF9] "
              />
            </Link>
            <div className="hidden md:flex items-center gap-2">
              <Citydropdown />
              <Currencydropdown />
            </div>
          </div>
          <div className=" hidden lg:flex w-full w-[290px] xl:w-[400px] ">
            <InputWithButton />
          </div>

          <div className="flex w-auto  items-center gap-2">
            <div className="flex items-center justify-center">
              <button className="md:hidden flex p-2 rounded-full hover:bg-gray-50">
                <SearchIcon />
                Search
              </button>
              <Button className="h-9 pl-0 pr-5  border-none text-black text-sm bg-[#FFFCF9] hover:bg-gray-50">
                <Heart></Heart>My Wishtlist
              </Button>
              <Button className=" hidden md:flex h-9 w-27 px-5   bg-[#7C00CC] hover:bg-violet-800 ">
                Sign in
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
