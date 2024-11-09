import React from "react";
import { Meteors } from "@/components/ui/meteors";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

interface Props {
    location: string,
    state: string,
    name: string,
    number: number,
    mail: string,
}

export function MeteorCard(props: Props) {
  return (
    <div className="text-wrap">
      <div className="w-full relative max-w-xs">
        <div className="absolute inset-0 h-full w-full bg-white bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full" />
        <div className="relative shadow-sm dark:shadow-xl bg-gray-100 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <h1 className="font-bold text-xl text-black dark:text-white mb-4 relative z-40">
            <div className="flex items-center gap-x-2 mb-2">
            <div className="h-5 w-5 rounded-full border flex items-center justify-center border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none" 
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2 w-2 text-gray-500 dark:text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div>
            {props.state}
            </div>
            <p className="font-normal text-base text-slate-500 mb-4 relative z-40">
            {props.name}
          </p>
          </h1>

          <p className="flex gap-x-2 items-center font-normal text-base text-slate-500 mb-4 relative z-40">
            <FaPhoneAlt />
            {props.number}
          </p>

          <p className="flex gap-x-2 items-center font-normal text-base text-slate-500 mb-4 relative z-40">
            <MdEmail />
            {props.mail}
          </p>

          <p className="flex gap-x-2 h-[7rem] items-start font-normal text-base text-slate-500 mb-4 relative z-40">
            {props.location}
          </p>

          <button className="flex items-center gap-x-2 border px-4 py-1 rounded-lg border-gray-500 text-gray-500 dark:text-gray-300">
          <FaLocationDot />
            View Location
          </button>

          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
}
