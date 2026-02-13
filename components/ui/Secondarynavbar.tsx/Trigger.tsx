import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Trigger = () => {
  return (
    <div className="border-none shadow-0 ">
      <Select>
        <SelectTrigger
          className="w-[210px] p-0 border-0 shadow-none text-lg font-bold focus-visible:ring-0 focus-visible:outline-none ">
          <SelectValue className="font-bold" placeholder="All Experiences" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="All Experiences ">
            <span>All Experiences</span>
          </SelectItem>
          <SelectItem value="Top 20 Experiences">
            <span>Top 20 Experiences</span>
          </SelectItem>
          <SelectItem value="Transfers & Car Hires">
            <span>Transfers & Car Hires</span>
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Trigger;
