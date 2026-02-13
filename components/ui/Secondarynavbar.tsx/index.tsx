"use client";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Globe, User, LayoutGrid, Filter } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";
import { House } from "lucide-react";
import Filteroption from "./Filteroption";
import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import Trigger from "@/components/ui/Secondarynavbar.tsx/Trigger";
import { Filter_URL } from "@/apis/Api_endpoints";

const Secondarynavbar = ({
  selectedInterests,
  setSelectedInterests,
  selectedTravelTypes,
  setSelectedTravelTypes,
  selectedLocations,
  setSelectedLocations,
  resultCount,
  onShowResults,
  previewCount,
}) => {
  const clearAllFilters = () => {
    setSelectedInterests([]);
    setSelectedTravelTypes([]);
    setSelectedLocations([]);
  };

  const [interests, setInterests] = useState([]);
  const [travelTypes, setTravelTypes] = useState([]);
  const [locations, setLocations] = useState([]);

  const fetchFilters = async () => {
    if (
      interests.length > 0 ||
      travelTypes.length > 0 ||
      locations.length > 0
    ) {
      return;
    }
    console.log("Fetching filters...");
    try {
      const res = await fetch(`${Filter_URL}`);

      const json = await res.json();

      const data = json?.data || [];

      // 🔥 Convert backend data into UI format
      const interestArr = [];
      const travelArr = [];
      const locationArr = [];

      data.forEach((item) => {
        const filterObj = {
          label: item.name,
          slug: item.slug,
          iconImage: item?.iconImage?.url,
        };

        if (item.myFilterType === "Interest") {
          interestArr.push(filterObj);
        }

        if (item.myFilterType === "Traveler-Type") {
          travelArr.push(filterObj);
        }
        if (item.myFilterType === "Location") {
          locationArr.push(filterObj);
        }
      });

      setInterests(interestArr);
      setTravelTypes(travelArr);
      setLocations(locationArr);
    } catch (error) {
      console.error("Filter fetch error", error);
    }
  };

  const togglevalue = (type, slug) => {
    console.log(type, "type");
    if (type == "interest") {
      setSelectedInterests((prev) =>
        prev.includes(slug)
          ? prev.filter((item) => item !== slug)
          : [...prev, slug],
      );
    }
    if (type == "traveltype") {
      setSelectedTravelTypes((prev) =>
        prev.includes(slug)
          ? prev.filter((item) => item !== slug)
          : [...prev, slug],
      );
    }
    if (type == "locations") {
      setSelectedLocations((prev) =>
        prev.includes(slug)
          ? prev.filter((item) => item !== slug)
          : [...prev, slug],
      );
    }
  };

  return (
    <div className="w-full xl:h-[90px] h-auto z-40 fixed top-[85px] bg-[#FFFDFD] ">
      <div className="flex xl:h-[55px] h-auto my-[16px] ml-[57px] mr-[52px] bg-[#FFFDFD] justify-between xl:flex-row flex-col   ">
        {/* {Breadcrumb} */}
        <div className="">
          <span className="h-[20px] ">
            <Breadcrumb>
              <BreadcrumbList className="sm:gap-1">
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">
                    <House size={15} />
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Dubai</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
              </BreadcrumbList>
            </Breadcrumb>
          </span>
          <span className="border-none ">
            <Trigger />
          </span>
        </div>
        {/* {Filters} */}
        <div className="flex pb-0 pt-2 h-[48px] gap-[15px]  items-center overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-hide ">
          <div className="w-[160px]  bg-[#FFF7C5] h-full p-[10px 35px 10px 35px] shrink-0 gap-5 border-0 rounded-[100px] overflow-hidden ">
            <Popover>
              <PopoverTrigger
                onClick={fetchFilters}
                className="bg-[#FFF7C5] hover:bg-[#FFF7C5] w-full h-full border-0 "
              >
                <div className="flex items-center justify-center gap-2 ">
                  <span>
                    <LayoutGrid size={18} className="" />
                  </span>
                  <span className="text-sm">Interest</span>
                  <ChevronDown />
                </div>
              </PopoverTrigger>
              <PopoverContent className="w-auto h-auto">
                <Filteroption
                  items={interests}
                  selectedvalues={selectedInterests}
                  onToggle={togglevalue}
                  type="interest"
                />
                <div className="h-[35px] flex items-center justify-between ">
                  <Button
                    className=" mt-4 text-sm text-[#7C00CC] border-0 bg-transparent underline hover:bg-transparent"
                    onClick={clearAllFilters}
                  >
                    CLEAR ALL
                  </Button>
                  <Button
                    onClick={onShowResults}
                    className="h-9 w-27 mt-4 right-6 px-5 ml-1  bg-[#7C00CC] hover:bg-violet-800 "
                  >
                    Show {previewCount} results
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          </div>
          <div className="w-[182px]  bg-[#FFF7C5] h-full p-[10px 35px 10px 35px] shrink-0 gap-5 border-0 rounded-[100px] overflow-hidden ">
            <Popover>
              <PopoverTrigger
                onClick={fetchFilters}
                className="bg-[#FFF7C5] hover:bg-[#FFF7C5] w-full h-full"
              >
                <div className="flex items-center justify-center gap-1">
                  <span>
                    <User size={18} className="" />
                  </span>
                  <span className="">TravelType</span>
                  <ChevronDown />
                </div>
              </PopoverTrigger>
              <PopoverContent className="w-auto h-auto">
                <Filteroption
                  items={travelTypes}
                  selectedvalues={selectedTravelTypes}
                  onToggle={togglevalue}
                  type="traveltype"
                />
                <div className="h-[35px] flex items-center justify-between ">
                  <Button
                    className=" mt-4 text-sm text-[#7C00CC] border-0 bg-transparent underline hover:bg-transparent"
                    onClick={clearAllFilters}
                  >
                    CLEAR ALL
                  </Button>
                  <Button
                    onClick={onShowResults}
                    className="h-9 w-27 mt-5 right-6 px-5 ml-1  bg-[#7C00CC] hover:bg-violet-800 "
                  >
                    Show {previewCount} results
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          </div>
          <div className="w-[165px]  bg-[#FFF7C5] h-full p-[10px 35px 10px 35px] shrink-0 gap-5 border-0 rounded-[100px] overflow-hidden ">
            <Popover>
              <PopoverTrigger
                onClick={fetchFilters}
                className="bg-[#FFF7C5] border-0 hover:bg-[#FFF7C5] w-full h-full"
              >
                <div className="flex items-center justify-center gap-2">
                  <span>
                    <Globe size={18} className="" />
                  </span>
                  <span className="">Locations</span>
                  <ChevronDown />
                </div>
              </PopoverTrigger>
              <PopoverContent className="w-auto h-auto">
                <Filteroption
                  items={locations}
                  selectedvalues={selectedLocations}
                  onToggle={togglevalue}
                  type="locations"
                />
                <div className="h-[35px] flex items-center justify-between ">
                  <Button
                    className=" mt-4 text-sm text-[#7C00CC] border-0 bg-transparent underline hover:bg-transparent"
                    onClick={clearAllFilters}
                  >
                    CLEAR ALL
                  </Button>
                  <Button
                    onClick={onShowResults}
                    className="h-9 w-27 mt-4 right-6 px-5 ml-1  bg-[#7C00CC] hover:bg-violet-800 "
                  >
                    Show {previewCount} results
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          </div>
          <Image
            src="/i.png"
            alt="icon"
            width={29}
            height={29}
            className="shrink-0"
          />
        </div>
        <div className="w-[100px]"></div>
      </div>
    </div>
  );
};

export default Secondarynavbar;
