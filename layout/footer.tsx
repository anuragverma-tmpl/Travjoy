import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageCircle, Mail } from "lucide-react";

const Footer = () => {
  return (
    <div className="w-full bg-white bottom-0 min-h-[430px] md:h-[430px]">
      <div className="mx-auto max-w-full mb-0 h-full rounded-4xl bg-[#1D002F] px-4 md:px-5">
        <div className="flex justify-center mb-10">
          <Image
            src="/footerlogo.png"
            alt="footer"
            width={120}
            height={120}
            className="mt-12"
          ></Image>
        </div>
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-center lg:gap-16">
          <div className="flex flex-wrap flex-row gap-4 md:gap-8 text-neutral-300 m-4 md:m-8 text-sm md:text-base">
            <p className="flex flex-row gap-2">
              CITIES <ArrowRight size={20} />
            </p>
            <Link href="/">Dubai</Link>
            <Link href="/">Delhi</Link>
            <Link href="/">Jaipur</Link>
            <Link href="/">Goa</Link>
            <Link href="/">Udhaipur</Link>
            <Link href="/">San Francisco</Link>
          </div>
          <div className="flex flex-row gap-3 text-neutral-300 text-sm">
            <p className="flex flex-row gap-2">
              TRAVJOY <ArrowRight size={20} />
            </p>
            <Link href="/">About Us</Link>
          </div>
        </div>
        <div className="border-b-2 mx-4 md:mx-[120px] border-neutral-200">
          <div className="flex flex-col items-center m-6 md:m-12 gap-20 md:flex-row md:justify-center">
            <p className="text-neutral-300 flex flex-row gap-2 text-sm md:text-base">
              <MessageCircle className="text-yellow-200" /> Chat with us
            </p>
            <p className="text-neutral-300 flex flex-row gap-2 text-sm md:text-base">
              <Mail className="text-yellow-200" /> support@travjoy.com
            </p>
          </div>
        </div>
        <div className="mt-6 pb-4 flex flex-col items-center gap-3 mx-4 md:mx-[120px] text-sm text-neutral-300 md:flex-row md:justify-between">
          <div className="text-neutral-300 items-end flex">
            <p>All right reserved 2026 Travjoy</p>
          </div>
          <div className="text-neutral-300 items-end flex flex-row gap-2">
            <p>Terms & Service </p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
