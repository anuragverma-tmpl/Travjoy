import Image from "next/image";
import { Heart } from "lucide-react";
import { Button } from "../button";
import { useState } from "react";
import Link from "next/link";

const TourCard = ({ data2 }) => {
  const [open, setOpen] = useState(false)

  return (
    <Link href={`/expers/${data2.slug}`}>
    <div className="flex gap-6  bg-white rounded-2xl border shadow-sm p-3 pr-4  hover:shadow-lg transition flex-row">
      <div className="w-full">
        <h3 className="text-2xl font-bold ">{data2.title}</h3>
        <div className="flex flex-col lg:flex-row sm:gap-4 gap-6 mt-2 ">
          <div className="relative w-full h-[250px] lg:w-[430px] rounded-xl">
            <Image
              src={data2?.image?.[0]?.url}
              alt={data2?.title || "Tour Image"}
              fill
              className="object-cover rounded-2xl"
            />
            <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1">
              ⭐ {data2?.tag}
            </span>
          </div>

          <div className="flex flex-col w-full">
            <div className="flex-1 space-y-3">
              <div className="flex items-center justify-between w-auto md:w-[380px] gap-4 text-sm text-gray-600">
                <span className="gap-[5px]">⭐{data2?.rating || "4.9"} (2,354)</span>
                <span>⏱ 4 hrs</span>
                <span className="text-green-600">✔ Free Cancellation</span>
              </div>

              <ul className="list-disc pl-5 text-sm text-[#303030] font-normal space-y-1">
                <li>Visit the Sheikh Zayed Grand Mosque</li>
                <li>Panoramic drive along the Corniche</li>
                <li>Stops at Dates Market & Heritage Village</li>
                <li>Hotel pickup with audio guide</li>
              </ul>
            </div>

            <div className="w-full flex flex-row justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">Starting from</p>
                <div className="flex flex-row items-end gap-2 ">
                  <p className="text-2xl font-bold text-purple-600">
                    ₹{data2?.price || "0"}
                  </p>
                  <p className="text-xs text-gray-500">(Per Person)</p>
                </div>
              </div>
              <div>
                <p className="text-xs text-gray-500 mt-2">
                  Serviced by <span className="font-semibold">Viator</span>
                </p>
              </div>
              <div className="flex items-center flex-col lg:flex-row gap-[10px] mt-4">
                <button onClick={()=>setOpen(true)} className="flex items-center gap-2 font-bold px-2 py-2 border border-[#30303026]  rounded text-[#303030] hover:bg-none">
                  <Heart size={16} className="shrink-0" />
                  Add to Wishlist
                </button>
                {open && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center w-auto h-auto z-50">
                  <div className="fixed inset-0 bg-black opacity-50 blur-sm "></div>
                  <div className="relative bg-white w-[500px] rounded-xl p-4 shadow-lg">
                    {/* Close Button */}
                    <button
                      onClick={() => setOpen(false)}
                      className="absolute top-5 right-8 text-gray-500 hover:text-black"
                    >
                      ✕
                    </button>
                    <div className="py-2 flex w-full items-center justify-center mt-2 flex-col gap-1">
                      <h3 className="text-lg font-extrabold text-[#7C00CC]">
                        Enter Your Phone Number
                      </h3>
                      <p className="text-sm px-5 text-black">
                        We'll send a confirmation code to verify your identity.
                      </p>

                      <div className="space-y-3 items-center w-full">
                        <div className="flex w-full items-center flex-col pt-4 gap-2">
                          <div className="flex w-[90%] items-center ">
                            <div className="text-lg  text-gray-600 rounded-lg rounded-r-none px-3 py-4 border focus:outline-none focus:ring-2 focus:ring-purple-500">
                              +91
                            </div>
                            <input
                              type="text"
                              placeholder="Enter your phone number"
                              className="border text-lg rounded-lg rounded-l-none px-3 py-4 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                          </div>
                          <Button className="w-auto h-auto mt-2 bg-[#7C00CC] text-white p-4 rounded-lg font-semibold">
                            Send OTP on WhatsApp
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

                <button onClick={()=> setOpen(true)} className="flex-1 bg-[#7C00CC0D] px-6 ring-1 ring-[#7C00CC] py-2 rounded text-[#7C00CC] text-sm font-bold hover:bg-[#7C00CC0D]">
                  Book Now
                </button>
                {open && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center w-auto h-auto z-50">
                  <div className="fixed inset-0 bg-black opacity-40 blur-sm "></div>
                  <div className="relative bg-white w-[500px] rounded-xl p-4 shadow-lg">
                    {/* Close Button */}
                    <button
                      onClick={() => setOpen(false)}
                      className="absolute top-5 right-8 text-gray-500 hover:text-black"
                    >
                      ✕
                    </button>
                    <div className="py-2 flex w-full items-center justify-center mt-2 flex-col gap-1">
                      <h3 className="text-lg font-extrabold text-[#7C00CC]">
                        Enter Your Phone Number
                      </h3>
                      <p className="text-sm px-5 text-black">
                        We'll send a confirmation code to verify your identity.
                      </p>

                      <div className="space-y-3 items-center w-full">
                        <div className="flex w-full items-center flex-col pt-4 gap-2">
                          <div className="flex w-[90%] items-center ">
                            <div className="text-lg  text-gray-600 rounded-lg rounded-r-none px-3 py-4 border focus:outline-none focus:ring-2 focus:ring-purple-500">
                              +91
                            </div>
                            <input
                              type="text"
                              placeholder="Enter your phone number"
                              className="border text-lg rounded-lg rounded-l-none px-3 py-4 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                          </div>
                          <Button className="w-auto h-auto mt-2 bg-[#7C00CC] text-white p-4 rounded-lg font-semibold">
                            Send OTP on WhatsApp
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default TourCard;
