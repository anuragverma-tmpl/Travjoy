"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function AppliedFilter({
  selectedInterests = [],
  selectedTravelTypes = [],
  selectedLocations = [],
}) {
  const totalFilters =
    selectedInterests.length +
    selectedTravelTypes.length +
    selectedLocations.length;

  return (
    <Popover>
      <PopoverTrigger className="w-auto ">
        <Button
          variant="outline"
          className="gap-2 w-auto px-2 rounded-2xl border-2 bg-[#EBEBEB]"
        > 
          <Image src="/adjus.png" width={15} height={15} alt="filter" />
          Filter applied {totalFilters > 0 && <div className="inline-block w-5 h-5 text-white bg-black rounded-full flex items-center justify-center">{totalFilters}</div>}
          <ChevronDown size={16} />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-60 p-3 space-y-3">
        {totalFilters === 0 && (
          <p className="text-sm text-gray-500">No filters applied</p>
        )}

        {/* Interest */}
        {selectedInterests.length > 0 && (
          <div>
            <p className="font-semibold text-sm mb-1">Interest</p>
            <div className="flex flex-wrap gap-2">
              {selectedInterests.map((item, i) => (
                <span
                  key={i}
                  className="px-2 py-1 text-xs bg-[#F8F8F8] ring-2 ring-gray-200 hover:bg-[#F8F8F8] rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Travel Type */}
        {selectedTravelTypes.length > 0 && (
          <div>
            <p className="font-semibold text-sm mb-1">Travel Type</p>
            <div className="flex flex-wrap gap-2">
              {selectedTravelTypes.map((item, i) => (
                <span
                  key={i}
                  className="px-2 py-1 text-xs bg-[#F8F8F8] ring-2 ring-gray-200 hover:bg-[#F8F8F8] rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Location */}
        {selectedLocations.length > 0 && (
          <div>
            <p className="font-semibold text-sm mb-1">Location</p>
            <div className="flex flex-wrap gap-2">
              {selectedLocations.map((item, i) => (
                <span
                  key={i}
                  className="px-2 py-1 text-xs bg-[#F8F8F8] ring-2 ring-gray-200 hover:bg-[#F8F8F8] rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
}
