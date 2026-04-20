"use client";

import { useState } from "react";
import EnquiryFormSec from "./EnquiryForm";

export default function FloatingEnquiry() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* RIGHT SIDE VERTICAL TAB */}
      <div className="fixed bottom-6 right-0 z-50 overflow-visible">
        <button
          onClick={() => setOpen(!open)}
          className="relative bg-orange-500 hover:bg-orange-600 text-white
               px-2 py-4 rounded-l-md shadow-lg
               [writing-mode:vertical-rl]
               tracking-wide font-bold"
        >
          Quick Connect
        </button>
      </div>


      {/* SLIDE PANEL */}
      <div
        className={`fixed top-0 right-0 h-full w-[380px] bg-white z-50
                    shadow-2xl transition-transform duration-500 ease-in-out
                    ${open ? "translate-x-0" : "translate-x-full"}`}
      >

        <h3 className="absolute top-4 left-4 font-bold">Quick Connect</h3>
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-gray-600 hover:text-black text-sm font-bold"
        >
          ✕
        </button>




        {/* CONTENT */}
        <div className="h-full overflow-y-auto pt-12">
          <EnquiryFormSec isDrawer />
        </div>
      </div>
    </>
  );
}