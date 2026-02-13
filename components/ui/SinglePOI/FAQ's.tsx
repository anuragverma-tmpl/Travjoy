import Image from "next/image";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SmallCard, SmallCard2 } from "../smallcards";
import Link from "next/link";

export const similarOptions = [
  {
    id: 1,
    title: "Dubai Marina High-Speed Boat Tour",
    rating: 5,
    image: "https://images.unsplash.com/photo-1504215680853-026ed2a45def",
  },
  {
    id: 2,
    title: "Dubai Night Tour",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
  },
  {
    id: 3,
    title: "Big Bus Hop-On Hop-Off Tour",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1504274066651-8d31a536b11a",
  },
  {
    id: 4,
    title: "Old and New Dubai Sightseeing Tour",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1526495124232-a04e1849168c",
  },
  {
    id: 5,
    title: "Abu Dhabi Tour From Dubai",
    rating: 5,
    image: "https://images.unsplash.com/photo-1548013146-72479768bada",
  },
  {
    id: 6,
    title: "Dubai Night Tour",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
  },
];

const SimilarOptionCard = ({ data }) => {
  return (
    <Link href={`/expers/${data.slug}`}>
    <div className="relative min-w-[240px] h-[140px] rounded-xl overflow-hidden group cursor-pointer">
      <Image
        src={data?.image?.[0]?.url || "/placeholder.jpg"}
        alt={data?.title || "Similar Option Image"}
        fill
        className="object-cover group-hover:scale-105 transition duration-300"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

      <div className="absolute bottom-3 left-3 right-3 text-white">
        <p className="text-sm font-semibold leading-tight line-clamp-2">
          {data?.title}
        </p>

        <div className="flex items-center gap-1 text-xs mt-1">
          <span className="text-yellow-400">⭐</span>
          <span>{data?.rating}</span>
        </div>
      </div>
    </div>
    </Link>
  );
};
const FAQcomponents = ({ Data2, Data }) => {
  const [activeTab, setActiveTab] = useState("getting");

  return (
    <>
      <div className="my-2 mt-4">
        <h1 className="font-bold text-lg ">Plan Your Visit(FAQ's)</h1>
        <div className="grid sm:grid-cols-1 gap-4 mt-2 md:grid-cols-2 lg:grid-cols-2">
          <div className="rounded-xl p-6 shadow-sm hover:shadow-lg transition bg-[#FFFFFF]">
            <h1 className="font-bold mb-2 gap-4 flex flex-row items-center w-full]">
              <div className="w-[32px] h-[32px] shrink-0">
                <p className="relative h-full w-full bg-[#7a00cc1d] rounded-full">
                  <Image
                    src="/question.png"
                    alt=""
                    className="absolute top-1.5 left-1.5"
                    width={20}
                    height={20}
                  />
                </p>
              </div>
              How long do Abu Dhabi day trip from Dubai takes?
              <div className="w-[30px] h-[30px] shrink-0 ">
                <div className="h-full w-full bg-[#F3F3F3] rounded-full flex items-center justify-center">
                  <ChevronDown className="absolute text-[#7C00CC]" />
                </div>
              </div>
            </h1>
            <p className="font-normal">
              Most Abu Dhabi tours from Dubai last about 8–11 hours including
              round-trip transport.
            </p>
          </div>
          <div className="rounded-xl p-6 shadow-sm hover:shadow-lg transition bg-[#FFFFFF] ">
            <h1 className="font-bold mb-2 gap-4 flex flex-row items-center w-full">
              <div className="w-[32px] h-[32px] shrink-0">
                <p className="relative h-full w-full bg-[#7a00cc1d] rounded-full">
                  <Image
                    src="/question.png"
                    alt=""
                    className="absolute top-1.5 left-1.5"
                    width={20}
                    height={20}
                  />
                </p>
              </div>
              How long do Abu Dhabi day trip from Dubai takes?
              <div className="w-[30px] h-[30px] shrink-0 ">
                <div className="h-full w-full bg-[#F3F3F3] rounded-full flex items-center justify-center">
                  <ChevronDown className="absolute text-[#7C00CC]" />
                </div>
              </div>
            </h1>
            <p className="font-normal">
              Most Abu Dhabi tours from Dubai last about 8–11 hours including
              round-trip transport.
            </p>
          </div>
          <div className="rounded-xl p-6 shadow-sm hover:shadow-lg transition bg-[#FFFFFF] ">
            <h1 className="font-bold mb-2 gap-4 flex flex-row items-center w-full">
              <div className="w-[32px] h-[32px] shrink-0">
                <p className="relative h-full w-full bg-[#7a00cc1d] rounded-full">
                  <Image
                    src="/question.png"
                    alt=""
                    className="absolute top-1.5 left-1.5"
                    width={20}
                    height={20}
                  />
                </p>
              </div>
              How long do Abu Dhabi day trip from Dubai takes?
              <div className="w-[30px] h-[30px] shrink-0">
                <div className="h-full w-full bg-[#F3F3F3] rounded-full flex items-center justify-center">
                  <ChevronDown className="absolute text-[#7C00CC]" />
                </div>
              </div>
            </h1>
            <p className="font-normal">
              Most Abu Dhabi tours from Dubai last about 8–11 hours including
              round-trip transport.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 mb-8 ">
        <div className="">
          <div className="flex gap-3 mb-2">
            <button
              onClick={() => setActiveTab("getting")}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeTab === "getting"
                  ? "bg-yellow-100 text-yellow-800"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              Getting There
            </button>

            <button
              onClick={() => setActiveTab("amenities")}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeTab === "amenities"
                  ? "bg-yellow-100 text-yellow-800"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              Amenities
            </button>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start">
            <div className="m-2 ml-0 w-full md:w-1/2">
              {activeTab === "getting" && (
                <ul className="list-disc pl-8 space-y-5 text-md text-gray-700">
                  <li>Most tours include hotel pickup in Dubai.</li>
                  <li>Big Bus hop-on-hop-off buses stop at Yas Island.</li>
                  <li>Show tickets at Sheikh Zayed Mosque entrances.</li>
                  <li>Free parking at Mosque.</li>
                </ul>
              )}

              {activeTab === "amenities" && (
                <ul className="list-disc pl-8 space-y-5 text-md text-gray-700">
                  <li>
                    {" "}
                    Most tours include hotel pickup in Dubai, then coach travel
                    (1.5–2 hours) to Abu Dhabi.{" "}
                  </li>{" "}
                  <li>
                    {" "}
                    Big Bus hop-on-hop-off buses stop at Yas Island, Corniche,
                    Marina Mall.{" "}
                  </li>{" "}
                  <li>
                    {" "}
                    Show tickets at Sheikh Zayed Mosque and Louvre parking
                    entrances.{" "}
                  </li>{" "}
                  <li>
                    {" "}
                    If driving, free parking at the Mosque; paid parking at
                    Louvre and malls.{" "}
                  </li>
                </ul>
              )}
            </div>

            <div className="relative mt-6 md:mt-0 md:pl-10 w-full md:w-1/2 h-[220px] sm:h-[260px]">
              <Image
                src={
                  activeTab === "getting"
                    ? "https://images.unsplash.com/photo-1524492412937-b28074a5d7da"
                    : "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
                }
                alt="tab-image"
                fill
                className="rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-10 mt-4 flex-col">
        <div className="food&coffe mt-4">
          <h2 className="text-lg font-bold mb-2">Food & Coffee Stops</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <SmallCard description="Louvre Abu Dhabi Le Café – scenic waterfront coffee and pastry shop" />
            <SmallCard description="Yas Mall Food Court – diverse casual eateries and fast-food options" />
            <SmallCard description="Emirates Palace Lobby Lounge – luxurious tea and coffee in a palatial setting" />
          </div>
        </div>
        <div className="Insider Tips mt-4">
          <h2 className="text-lg font-bold mb-2">Insider Tips</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            <SmallCard2
              title="Best Time"
              description="Weekday mornings — attractions are cooler and less crowded."
            />
            <SmallCard2
              title="Hack"
              description="Carry long sleeves/pants for the mosque (robes/scarves are loaned free of charge)."
            />
            <SmallCard2
              title="Hidden Gem"
              description="Walk the Corniche breakwater for unobstructed skyline photos of the Mosque and city."
            />
            <SmallCard2
              title="Tip"
              description="Many tours let you meet at Dubai Mall or Metro stations instead of hotel pickup."
            />
          </div>
        </div>
        <div className="Photography Tips mt-4">
          <h2 className="text-lg font-bold mb-2">Photography Tips</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            <SmallCard2
              title="No drones or tripods"
              description="No drones or tripods inside sites; turn off flash in the mosque to respect worshippers."
            />
            <SmallCard2
              title="Best light"
              description="Dawn illuminates the Grand Mosque’s domes; golden hour enhances Louvre’s lattice dome."
            />
            <SmallCard2
              title="Angles"
              description="Capture the mosque’s reflection from the Corniche breakwater; stand under Louvre’s dome for its ‘rain of light’ effect."
            />
            <SmallCard2
              title="Tip" 
              description="No tripods or drone allowed.Use Steady hands or monopod."
            />
          </div>
        </div>
        <div className="Things to do nearby mt-4 mb-4">
          <h2 className="text-lg font-bold mb-2">Things to do Nearby</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 mg:grid-col-3 lg:grid-cols-3 gap-6">
            <SmallCard description="Louvre Abu Dhabi — world-class art museum and striking architecture" />
            <SmallCard description="Qasr Al Watan — tour the presidential palace’s grand halls and gardens" />
            <SmallCard description="Yas Island — enjoy theme parks like Ferrari World and Yas Waterworld" />
            <SmallCard description="Corniche Beach — relax on the city’s waterfront beach with skyline views" />
          </div>
        </div>
      </div>
      <div className="mt-16">
        <h2 className="text-lg font-bold mb-4">Similar Options you’d love</h2>

        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
           
          {(Data2 || [])
            .filter((item) => item.slug !== Data?.slug)
            .slice(0, 6)
            .map((card) => (
              <SimilarOptionCard key={card.id} data={card} />
            ))}
            
        </div>
      </div>
    </>
  );
};

export default FAQcomponents;
