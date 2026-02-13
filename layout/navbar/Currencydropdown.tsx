import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Currencydropdown = () => {
  return (
    <div className="">
      <Select>
        <SelectTrigger className="w-[95px] rounded-4xl m-1 ml-0  bg-[#EFEFEF] ">
          <SelectValue placeholder="AED" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Dubai">INR<span><i> - Indian Rupee</i></span></SelectItem>
          <SelectItem value="Goa">USD<span><i> - Dollar</i></span></SelectItem>
          <SelectItem value="Euro">EURO<span><i> - Europien</i></span></SelectItem>
          <SelectItem value="TRY">TRY<span><i> - Turkish Lira</i></span></SelectItem>
          <SelectItem value="RUB">RUB<span><i> - Russian Ruble</i></span></SelectItem>
          <SelectItem value="AED">AED<span><i>  </i></span></SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Currencydropdown;
