import Image from "next/image";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import Sliderdot from "./sliderdot";
import Link from "next/link";
import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";
import AppliedFilter from "./Appliedfilter";
import { useState } from "react";

import SortButton from "@/components/ui/CardContent/short";
import App from "@/pages/_app";
import Skeletonloading from "./Skeleton";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 1,
    },
  },
};

const CardComponenet = ({
  items,
  selectedInterests,
  selectedTravelTypes,
  selectedLocations,
}) => {
  const [visibleItems, setVisibleItems] = useState(12);

  const totalFilters =
    selectedInterests.length +
    selectedTravelTypes.length +
    selectedLocations.length;

  const LoadMore = () => {
    setVisibleItems((prev) => prev + 12);
  };
  const displayedItems = items ? items.slice(0, visibleItems) : [];

  return (
    <div className=" mt-[175px] ms:mt-[220px] bg-[#F8F8F8] w-full ">
      <div className="mt-[35px] mb-[30px] pl-[55px] pr-[60px]  ">
        <div className="flex items-center justify-between pt-2 flex-wrap">
          <div>
            <span className="font-light opacity-[80%] ">32 Experiences</span>
          </div>
          <div className="flex m-2 gap-4 items-center ">
            {totalFilters > 0 && (
              <div>
                <AppliedFilter
                  selectedInterests={selectedInterests}
                  selectedTravelTypes={selectedTravelTypes}
                  selectedLocations={selectedLocations}
                />
              </div>
            )}

            <div>
              <SortButton
                onSortChange={(value) => {
                  console.log("Selected sort:", value);
                }}
              />
            </div>
          </div>
        </div>

        <motion.div
          className="grid gap-x-4  py-4 pb-10 px-2 gap-y-8  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {!items || items.length === 0 ? (
            <Skeletonloading />
          ) : (
            displayedItems.map((item, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    delay: index * 0.1,
                  }}
                  whileHover={{ scale: 1.03 }}
                  className="w-[300px] lg:w-auto md:w-auto rounded-3xl sm:w-auto h-[325px]"
                >
                  <Card className="relative group p-0 rounded-2xl gap-2 h-auto hover:scale-102 transition duration-300 ">
                    <Carousel opts={{ loop: true }} className="rounded-[15px]">
                      <CarouselContent className="rounded-[15px]">
                        {item?.image?.map((img, i) => (
                          <CarouselItem
                            key={i}
                            className="relative group rounded-[15px]"
                          >
                            <Image
                              src={img?.url}
                              alt={item.title}
                              className="w-full h-[180px] sm:h-[180px] object-cover rounded-[15px]"
                              width={300}
                              height={180}
                            />
                          </CarouselItem>
                        ))}
                      </CarouselContent>

                      <div className="absolute flex items-center top-0  w-full justify-between ">
                        <div className="flex w-auto mt-[10px] border-none ring-0 ml-[10px] h-auto gap-1  ">
                          {item.tag === "Popular" && (
                            <div className="flex gap-1 rounded-[3px] bg-[#D2FFDE]">
                              <Image
                                src="/flame.png"
                                alt=""
                                width={20}
                                height={8}
                                className="p-1 "
                              />
                              <p className=" ml-0 pr-1 text-[#34A853] text-sm ">
                                {item.tag}
                              </p>
                            </div>
                          )}
                          {item.tag === "Iconic" && (
                            <div className="flex gap-[1px] bg-[#E1ECFF] rounded-[3px] ">
                              <Image
                                src="/crown.png"
                                alt=""
                                width={20}
                                height={8}
                                className=" p-1 "
                              />
                              <p className="  pr-1 text-[#007FFF] text-sm ">
                                {item.tag}
                              </p>
                            </div>
                          )}
                          {item.tag === "Top Pick" && (
                            <Image
                              src={item?.tagImage?.url || "/top.png"}
                              alt=""
                              width={90}
                              height={110}
                              className=" "
                            />
                          )}
                          {item.tag === null && (
                            <p className="text-xs text-gray-500"></p>
                          )}
                        </div>
                        <div className="bg-[#00000040] rounded-full w-[32px] h-[32px] mt-[10px] mr-[10px]">
                          <img
                            src="/heart.png"
                            className="w-[20px] h-[20px] m-1.5 "
                          />
                        </div>
                      </div>
                      {item.image.length > 1 && (
                        <div className="opacity-0 group-hover:opacity-100">
                          <div className="absolute w-full h-full inset-0 z-10">
                            <CarouselPrevious className="absolute left-0" />
                            <CarouselNext className="absolute right-0" />
                            <div className="absolute w-full items-center justify-center  bottom-0">
                              <Sliderdot />
                            </div>
                          </div>
                        </div>
                      )}
                    </Carousel>

                    <Link href={`/expers/${item.slug}`}>
                      <div className="flex flex-col gap-2 pt-0 px-3 ">
                        <CardTitle className="font-extrabold line h-[22px]  leading-normal overflow-hidden hover:h-auto text-[#303030] text">
                          {item.title}
                        </CardTitle>
                        <CardDescription className="h-[50px] line-clamp-2 text-md text-[#303030] overflow-hidden ">
                          {item.shortDescription}
                        </CardDescription>
                        <div className="flex items-center justify-between my-2 ">
                          <div className="flex gap-[4px] items-center ">
                            <Image
                              width={16}
                              height={18}
                              className="inline"
                              alt="Star"
                              src="/Star.png"
                            />
                            <p className=" flex items-center w-[27px] h-[25px]">
                              {" "}
                              {item.rating}{" "}
                              <span className="opacity-60 text-sm">(254)</span>
                            </p>
                          </div>
                          <div className=" flex gap-[6px] w-auto  ">
                            <p className="w-[28px] h-[22px] opacity-[40%] text-sm ">
                              from
                            </p>
                            <p className=" text-[#7C00CC] font-bold w-auto h-[27px] ">
                              &#8377;{item.price}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </Card>
                </motion.div>
              );
            })
          )}
        </motion.div>

        <div className="flex items-center justify-center m-2 ">
          <Button
            onClick={LoadMore}
            className=" p-2 w-full h-[60px] border-0 bg-[#F8F8F8] text-lg underline font-bold hover:bg-[#F8F8F8]  text-black "
          >
            Load More
          </Button>
        </div>
      </div>
    </div>
  );
};

export { CardComponenet as default };
