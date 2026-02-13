"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Citydropdown from "./Citydropdown";
import Currencydropdown from "./Currencydropdown";

const Hamburger = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        onClick={() => setOpen(!open)}
        className="md:hidden w-auto ml-4 bg-[#F8F8F8] text-black p-2 rounded-full"
      >
        {open ? <X /> : <Menu />}
      </Button>

      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black md:hidden"
              onClick={() => setOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "-50%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 460 , damping: 50 }}
              className="fixed top-0 left-0 h-full w-64 bg-[#FFFCF9]    shadow-lg md:hidden"
            >
              <div className="p-4">
                <p className="flex items-center justify-between">
                  
                  <Image
                    src="/logo1.svg"
                    alt="Logo"
                    width={89}
                    height={48}
                    className="bg-[#FFFCF9] "
                  />

                  <button onClick={() => setOpen(false)}>
                    <X />
                  </button>
                </p>

                <ul className="flex flex-col gap-4 mt-6">
                  <li>
                    <Citydropdown></Citydropdown>
                  </li>
                  <li>
                    <Currencydropdown></Currencydropdown>
                  </li>
                  <li>Contact</li>
                </ul>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Hamburger;
