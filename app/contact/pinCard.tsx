import { PinContainer } from "@/components/ui/3dPin";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import React from "react";

interface Props {
    location: string,
    state: string,
    name: string,
    number: number,
    mail: string,
    address: string
}

export default function PinCard(props: Props) {
    return (
    <div className="h-[30rem] flex items-center justify-center z-40">
        <PinContainer
          title="View Location"
          href={props.location}
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[27rem] h-[17rem] xl:h-[15rem] xl:w-[35rem]">
            <h2 className="max-w-xs !pb-1 !m-0 font-bold text-xl dark:text-slate-100 text-slate-900">
              {props.state}
            </h2>
            <h2 className="max-w-xs !m-0 font-semibold text-md text-slate-500">
              {props.name}
            </h2>
            <div className="text-base !m-0 !p-0 font-normal">
              <p className="flex items-center gap-x-3 text-slate-500 mt-8 mb-3">
                <FaPhoneAlt />
                +91 {props.number}
              </p>
              <p className="flex items-center gap-x-3 text-slate-500 mb-3">
                <MdEmail />
                {props.mail}
              </p>
              <p className="flex gap-x-3 text-slate-500 mt-3">
                <FaLocationDot className="mt-1" />
                {props.address}
              </p>
            </div>
            {/* <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" /> */}
          </div>
        </PinContainer>
    </div>
    )
}