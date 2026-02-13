import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Citydropdown = () => {
  return (
    <div className="">
      <Select>
        <SelectTrigger className="lg:w-[150px] w-auto rounded-4xl m-1 ml-0 mx-0.5 bg-[#EFEFEF] ">
          <SelectValue placeholder="Dubai" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Dubai">Dubai</SelectItem>
          <SelectItem value="Goa">Goa</SelectItem>
          <SelectItem value="Delhi NCR">Delhi NCR</SelectItem>
          <SelectItem value="Singapore">Singapore</SelectItem>
          <SelectItem value="San Francisco">San Francisco</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Citydropdown;
