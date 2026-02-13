import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { useCarousel } from "@/components/ui/carousel";

const Sliderdot = () => {
  const { api, selectedIndex } = useCarousel();

  if (!api) return null;

  const slidesCount = api.scrollSnapList().length;
  return (
    <Pagination>
      <PaginationContent className=" gap-2">
        {Array.from({ length: slidesCount }).map((_, index) => (
          <PaginationItem key={index}>
            <PaginationLink
              size="default"
              isActive={false}
              onClick={() => api.scrollTo(index)}
              className="p-0 m-0 h-auto w-auto min-w-0 bg-transparent hover:bg-transparent "
            >
              <span
                className={`w-[10px] h-[10px]  rounded-full ${
                  selectedIndex === index
                    ? "bg-[#7C00CC]"
                    : "bg-white border  border-[#7C00CC]"
                }`}
              />
            </PaginationLink>
          </PaginationItem>
        ))}
      </PaginationContent>
    </Pagination>
  );
};

export default Sliderdot;
