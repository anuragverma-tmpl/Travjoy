import { Button } from "@/components/ui/button";

const Filteroption = ({ items, selectedvalues = [], onToggle, type }) => {

  return (
    <div className="w-auto gap-2 px-2 grid grid-cols-3  border-b-2 pb-5">
      {items.map((item) => {
        const isSelected = selectedvalues.includes(item.slug);

        return (
          <Button
            key={item.slug}
            onClick={() => onToggle(type ,item.slug)}
            className={`w-35 rounded-2xl ${isSelected?"bg-[#F8F8F8] ring-2 ring-gray-200 hover:bg-[#F8F8F8] ":"bg-[#F8F8F8] hover:bg-[#F8F8F8] "} text-black`}
          >
            <img src={item?.iconImage} alt="" className="" />
            <span className="line-clamp-3 text-md">{item.label}</span>{" "}
          </Button>
        );
      })}
    </div>
  );
};

export default Filteroption;
