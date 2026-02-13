"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Check, ChevronDown } from "lucide-react";
import Image from "next/image";

const sortOptions = [
  { label: "Popularity", value: "createdAt:desc" },
  { label: "Low to High", value: "price:asc" },
  { label: "High to Low", value: "price:desc" },
  { label: "Rating", value: "rating:desc" },
];

export default function SortButton({ onSortChange }) {
  const [selected, setSelected] = useState(sortOptions[0]);

  const handleSelect = (option) => {
    setSelected(option);
    onSortChange(option.value); // ✅ Call parent
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="gap-2 w-30 px-2 rounded-2xl border-2 bg-[#EBEBEB] hover:bg-gray-200 text-black"
        >
          <Image src="/sort.png" width={15} height={15} alt="sort" />
          Sort By
          <ChevronDown size={16} />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-56 p-2">
        {sortOptions.map((option) => (
          <div
            key={option.value}
            onClick={() => handleSelect(option)}
            className="flex items-center justify-between px-3 py-2 rounded-md cursor-pointer hover:bg-gray-100"
          >
            {option.label}

            {selected.value === option.value && (
              <Check size={16} />
            )}
          </div>
        ))}
      </PopoverContent>
    </Popover>
  );
}