import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "../breadcrumb";
import { House, Heart, Forward, Download, Copy } from "lucide-react";
import Imagegallery from "./ImageGall";
import TourMarkdown from "./contentsection";
import Image from "next/image";
import TourCard from "./Tourcard";
import FAQcomponents from "./FAQ's";
import { Button } from "@/components/ui/button";
import { BookingCard, LinkdinCard } from "./booking";
import { useState, useEffect } from "react";
import SinglePOISkeleton from "./SinglePOISkeleton";

const SinglePOI = ({ Data, Data2 }) => {
  console.log(Data);
  const [open, setOpen] = useState(false);
  const [share, setShare] = useState(false);
  const [link, setLink] = useState("");

  useEffect(() => {
    setLink(window.location.href);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(link);
  };

  if (!Data) {
    return <SinglePOISkeleton />;
  }

  return (
    <div className="h-auto mt-[89px] flex flex-col sm:w-full md:w-full lg:w-full xl:w-full bg-[#F8F8F8]">
      <div className="px-3 sm:px-4 md:px-8 lg:pl-[60px] lg:pr-[65px] bg-[#F8F8F8]">
        <div className="h-[425px] w-full ">
          <div className="bg-[#F8F8F8] mt-2 flex flex-col gap-2 ">
            <div className="">
              <span className="h-[20px] ">
                <Breadcrumb>
                  <BreadcrumbList className="sm:gap-1">
                    <BreadcrumbItem>
                      <BreadcrumbLink href="/">
                        <House size={15} />
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbLink href="/allexperience">
                        Dubai
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbLink href="/allexperience/all">
                        All Experiences
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                  </BreadcrumbList>
                </Breadcrumb>
              </span>
            </div>
            <Imagegallery
              items={
                Data?.image?.length ? Data.image.map((img) => img.url) : []
              }
            />
          </div>
        </div>
        <div className="relative h-auto w-full  bg-[#F8F8F8] ">
          <div className="">
            <div className="w-full max-w-[800px] pt-2 gap-1 flex flex-wrap items-center">
              <span className="text-xl sm:text-2xl md:text-3xl font-bold">{Data.title}</span>

              {Data.tag === "Popular" && (
                <div className="flex gap-1 mt-3 rounded-[3px] bg-[#D2FFDE] items-center">
                  <Image
                    src="/flame.png"
                    alt="popolar"
                    width={14}
                    height={14}
                    className="p-[4px] pb-0 w-[24px] h-[22px] text-sm "
                  />
                  <p className=" ml-0 pr-1 text-[#34A853] text-sm ">
                    {Data.tag}
                  </p>
                </div>
              )}
              {Data.tag === "Iconic" && (
                <div className="flex gap-1 bg-[#E1ECFF] rounded-[3px] ">
                  <Image
                    src="/crown.png"
                    alt="Iconic"
                    width={18}
                    height={18}
                    className="p-[4px] pb-0 w-[24px] h-[22px] text-sm "
                  />
                  <p className=" ml-0 pr-1 text-[#007FFF] text-lg ">
                    {Data.tag}
                  </p>
                </div>
              )}
              {Data.tag === null && (
                <Image
                  src={Data?.tagImage?.url}
                  alt="Tag"
                  width={90}
                  height={120}
                  className="pt-[2px] pl-[2px] "
                />
              )}
            </div>
            <div className="flex gap-6">
              <div className="flex items-center gap-4 text-sm text-gray-600 mt-2">
                <p className="text-[15px] flex gap-2 text-gray-600 ">
                  <span>
                    <Image
                      src="/star.png"
                      alt="Star"
                      width={12}
                      height={12}
                      className="inline mr-1"
                    />{" "}
                    {Data.rating} (453){" "}
                    <span className="opacity-70">reviews</span>
                  </span>

                  <span
                    onClick={() =>
                      window.open(Data?.location?.location1, "_blank")
                    }
                    className="mx-1 underline inline-flex text-[15px] cursor-pointer hover:text-[#7C00CC] items-center"
                  >
                    <Image
                      src="/location.png"
                      alt={Data?.location?.title}
                      width={14}
                      height={26}
                      className=""
                    />
                    {Data?.location?.title}
                  </span>
                </p>
                <p className="text-[15px]">
                  <Image
                    src="/clock.png"
                    alt="Clock"
                    width={16}
                    height={16}
                    className="inline mr-1"
                  />
                  {Data.time} hours
                </p>
                <div className="flex">
                  <div className="bg-[#7C00CC0D] rounded-full w-10 h-10">
                    <Image
                      src={"/chair.png"}
                      alt=""
                      width={16}
                      height={16}
                      className="mt-3 ml-3 bg-[#7C00CC0D]"
                    />
                  </div>
                  <div className="flex flex-col ml-1">
                    <p>WheelchairAccessibility:</p>
                    <p>
                      {Data?.WheelchairAccessibility
                        ?.WheelchairAccessibility === true ? (
                        <span className="font-semibold text-[#7C00CC]">
                          Yes
                        </span>
                      ) : (
                        <span className="font-semibold text-[#7C00CC]">No</span>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-auto md:w-[600px] lg:w-[600px] xl:w-[850px] mt-2 h-auto bg-[#F8F8F8] ">
            <TourMarkdown
              content={Data.newDescription}
              className="intropoilist"
            />

            <div className="lg:hidden flex flex-col  gap-4 mt-4 ">
              <div className="grid grid-rows-1 sm:grid-rows-2 gap-2 px-4 pl-0 ">
                <Button
                  onClick={() => setOpen(true)}
                  className="flex p-2 border items-center gap-2 text-black text-lg font-bold bg-white hover:bg-gray-50"
                >
                  <Heart></Heart>My Wishtlist
                </Button>
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
                        <h3 className="text-lg font-bold text-[#7C00CC] ">
                          Enter Your Phone Number
                        </h3>
                        <p className="text-sm px-5 text-black">
                          We'll send a confirmation code to verify your
                          identity.
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
                                className="border text-lg rounded-lg rounded-l-none px-3 py-4 w-full focus:outline-none focus:ring-2 focus:ring-[#7C00CC]"
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
                <Button
                  onClick={() => setShare(true)}
                  className="flex px-4 gap-4 border text-black font-bold text-lg bg-white hover:bg-gray-50"
                >
                  <Forward />
                  Share
                </Button>
                {share && (
                  <div className="fixed inset-0 bg-black/40 flex items-center justify-center w-auto h-auto z-50">
                    <div className="fixed inset-0 bg-black opacity-70 blur-sm "></div>
                    <div className="relative bg-white w-[500px] rounded-xl p-4 shadow-lg">
                      {/* Close Button */}
                      <button
                        onClick={() => setShare(false)}
                        className="absolute top-5 right-8 text-gray-500 hover:text-black"
                      >
                        ✕
                      </button>
                      <div className="py-2 flex w-full items-center justify-center mt-2 flex-col gap-1">
                        <h3 className="text-lg font-bold text-[#7C00CC]">
                          Share this Link
                        </h3>
                        <p className="text-sm px-5 text-black opacity-80">
                          Choose a platform to share this experience with your
                          friends.
                        </p>
                        <div className="flex gap-4 mt-4">
                          <Button className=" bg-transparent font-bold text-lg bg- hover:bg-transparent">
                            <Image
                              src={"/x.png"}
                              alt="Twitter"
                              width={30}
                              height={32}
                            />
                          </Button>
                          <Button className="bg-transparent font-bold text-lg  hover:bg-transparent">
                            <Image
                              src={"/facebook.png"}
                              alt="Facebook"
                              width={30}
                              height={32}
                            />
                          </Button>
                          <Button className="  bg-transparent font-bold text-lg  hover:bg-transparent">
                            <Image
                              src={"/linkedin.png"}
                              alt="LinkedIn"
                              width={30}
                              height={32}
                            />
                          </Button>
                          <Button className=" bg-transparent font-bold text-lg  hover:bg-transparent">
                            <Image
                              src={"/gmail.png"}
                              alt="Email"
                              width={30}
                              height={32}
                            />
                          </Button>

                          <Button className="bg-transparent text-sm hover:bg-transparent">
                            <Image
                              src={"/whatsapp.png"}
                              alt="WhatsApp"
                              width={30}
                              height={32}
                            />
                          </Button>
                        </div>
                        <div className="flex items-center gap-2 justify-center py-2 w-full">
                          <input
                            type="text"
                            value={link}
                            readOnly
                            className="border text-sm rounded-lg px-2 py-2 w-[80%] focus:outline-none focus:ring-2 focus:ring-purple-500"
                          />

                          <button
                            onClick={handleCopy}
                            className="bg-[#7C00CC] text-white p-2 rounded-lg font-semibold"
                          >
                            <Copy />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <Button className="flex px-4 border text-black  font-bold bg-white hover:bg-gray-50">
                  <Download />
                  Save as PDF
                </Button>
              </div>
              <div className="w-full px-4 pl-0">
                <BookingCard data={Data} />
              </div>
            </div>
          </div>
          <div className="absolute top-2 right-0  hidden lg:block">
            <div className="flex flex-row  gap-3">
              <Button
                onClick={() => setOpen(true)}
                className="flex h-12 w-40 px-2 border-2 text-black text-lg font-bold bg-[#F8F8F8] hover:bg-[#F8F8F8]"
              >
                <Heart></Heart>My Wishtlist
              </Button>
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
              <Button
                onClick={() => setShare(true)}
                className="flex h-12 w-30 px-4 gap-2 border-2 text-black text-lg font-bold  bg-[#F8F8F8] hover:bg-[#F8F8F8]"
              >
                <Forward />
                Share
              </Button>
              {share && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center w-auto h-auto z-50">
                  <div className="fixed inset-0 bg-black opacity-70 blur-sm "></div>
                  <div className="relative bg-white w-[500px] rounded-xl p-4 shadow-lg">
                    {/* Close Button */}
                    <button
                      onClick={() => setShare(false)}
                      className="absolute top-5 right-8 text-gray-500 hover:text-black"
                    >
                      ✕
                    </button>
                    <div className="py-2 flex w-full items-center justify-center mt-2 flex-col gap-1">
                      <h3 className="text-lg font-bold text-[#7C00CC]">
                        Share this Link
                      </h3>
                      <p className="text-sm px-5 text-black opacity-80">
                        Choose a platform to share this experience with your
                        friends.
                      </p>
                      <div className="flex gap-4 mt-4">
                        <Button className=" bg-transparent font-bold text-lg bg- hover:bg-transparent">
                          <Image
                            src={"/x.png"}
                            alt="Twitter"
                            width={30}
                            height={32}
                          />
                        </Button>
                        <Button className="bg-transparent font-bold text-lg  hover:bg-transparent">
                          <Image
                            src={"/facebook.png"}
                            alt="Facebook"
                            width={30}
                            height={32}
                          />
                        </Button>
                        <Button className="  bg-transparent font-bold text-lg  hover:bg-transparent">
                          <Image
                            src={"/linkedin.png"}
                            alt="LinkedIn"
                            width={30}
                            height={32}
                          />
                        </Button>
                        <Button className=" bg-transparent font-bold text-lg  hover:bg-transparent">
                          <Image
                            src={"/gmail.png"}
                            alt="Email"
                            width={30}
                            height={32}
                          />
                        </Button>

                        <Button className="bg-transparent text-sm hover:bg-transparent">
                          <Image
                            src={"/whatsapp.png"}
                            alt="WhatsApp"
                            width={30}
                            height={32}
                          />
                        </Button>
                      </div>
                      <div className="flex items-center gap-2 justify-center py-2 w-full">
                        <input
                          type="text"
                          value={link}
                          readOnly
                          className="border text-sm rounded-lg px-2 py-2 w-[80%] focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />

                        <button
                          onClick={handleCopy}
                          className="bg-[#7C00CC] text-white p-2 rounded-lg font-semibold"
                        >
                          <Copy />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <Button className="flex h-12 px-4  border-2 text-black  font-bold text-lg bg-[#F8F8F8] hover:bg-[#F8F8F8]">
                <Download />
                Save as PDF
              </Button>
            </div>
            <div className="ml-32 right-0 mt-4">
              <BookingCard data={Data} />
              <LinkdinCard data={Data} />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-5 mt-4 my-4">
          {(Data2 || [])
            .filter((item) => item.slug === Data?.slug)
            .map((tour) => (
              <TourCard key={tour.id} data2={tour} />
            ))}

          {/* Other Cards */}
          {(Data2 || [])
            .filter((item) => item.slug !== Data?.slug)
            .slice(0, 4)
            .map((tour) => (
              <TourCard key={tour.id} data2={tour} />
            ))}
        </div>
        <div className="mt-2">
          <FAQcomponents Data2={Data2} Data={Data} />
        </div>
      </div>
    </div>
  );
};

export default SinglePOI;
