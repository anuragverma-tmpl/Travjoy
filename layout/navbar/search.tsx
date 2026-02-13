import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  
} from "@/components/ui/input-group";
import { SearchIcon } from "lucide-react";

export function InputWithButton() {
  return (
    <div className="flex w-70 xl:w-180 rounded-full items-center gap-2 bg-[#FFFCF9] ">
      <InputGroup className="rounded-full bg-[#EFEFEF] ">
        <InputGroupInput className="w-50" placeholder="Search..." />
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
       
      </InputGroup>
    </div>
  );
}
