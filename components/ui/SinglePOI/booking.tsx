import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const BookingCard = ({ data }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Booking Card */}
      <div className="absolute right-0 w-[325px] top-18 border rounded-xl p-6 shadow-sm bg-white">
        <h3 className="font-semibold mb-2">3 Curated Booking Options</h3>

        <p className="text-sm text-gray-500 opacity-[70%]">Starts from</p>
        <p className="text-2xl font-bold text-purple-600">
          &#8377;{data.price}
        </p>
        <p className="text-xs text-gray-500 mb-4">(Per Person)</p>

        <button
          onClick={() => setOpen(true)}
          className="w-full bg-[#7C00CC0D] ring-1 ring-[#7C00CC] text-[#7C00CC] py-3 rounded-lg font-semibold"
        >
          See Ticketing Options
        </button>
      </div>
      {open && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center w-auto h-auto z-50">
                  <div className="fixed inset-0 bg-black opacity-70 blur-sm "></div>
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
    </>
  );
};
const LinkdinCard = () => (
  <div className=" absolute right-0  w-[325px]  mt-2 top-74 border rounded-xl p-6 shadow-sm bg-white">
    <div className="flex flex-col w-full">
      <div className="flex ">
        <div className="">
          <Image
            src={"/link.png"}
            alt=""
            width={74}
            height={20}
            className="mb-4 rounded-xl h-18 w-24 "
          />
        </div>
        <div className="flex w-auto flex-col w-full ml-3 ">
          <h3 className="font-bold mt-5 ">Laura Caughlin</h3>
          <p className="w-auto text-sm text-gray-500 opacity-[80%] mb-2">
            Our Dubai Local Expert
          </p>
        </div>
      </div>

      <div className="w-full">
        <span className=" relative w-full opacity-80 text-sm">
          <span>
            The Burj Khalifa stands as a pinnacle of modern architecture and
            engineering, recognized globally as the tallest structure in the
            world.
          </span>
        </span>
      </div>
    </div>
  </div>
);

export { BookingCard, LinkdinCard };
