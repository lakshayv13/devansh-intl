import { PinContainer } from "@/components/ui/3dPin";
import { Phone, Mail, MapPin } from "lucide-react";
import React from "react";

interface Props {
  location: string;
  state: string;
  name: string;
  number: number;
  mail: string;
  address: string;
}

export default function PinCard(props: Props) {
  return (
    <div className="h-[30rem] flex items-center justify-center z-40">
      <PinContainer title="View Location" href={props.location}>
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[22rem] h-[22rem] bg-white dark:bg-zinc-900 rounded-3xl border border-slate-200 dark:border-zinc-800 overflow-hidden relative">
          <div className="mb-4">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-100 dark:bg-zinc-800 text-slate-900 dark:text-white mb-4">
              <MapPin className="h-5 w-5" />
            </span>
            <h2 className="font-bold text-xl text-slate-900 dark:text-white">
              {props.state}
            </h2>
            <p className="text-sm font-medium text-slate-500 mt-1">
              {props.location}
            </p>
          </div>

          <div className="space-y-3 mt-2">
            <div className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 dark:bg-zinc-800/50">
              <div className="p-2 bg-white dark:bg-zinc-700 rounded-lg shadow-sm">
                <Phone className="w-4 h-4 text-violet-500" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Phone
                </p>
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                  {props.number}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 dark:bg-zinc-800/50">
              <div className="p-2 bg-white dark:bg-zinc-700 rounded-lg shadow-sm">
                <Mail className="w-4 h-4 text-emerald-500" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Email
                </p>
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-200 truncate pr-2">
                  {props.mail}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 dark:bg-zinc-800/50">
              <div className="p-2 bg-white dark:bg-zinc-700 rounded-lg shadow-sm">
                <div className="w-4 h-4 text-blue-500 font-bold text-xs flex items-center justify-center">
                  @
                </div>
              </div>
              <div className="flex-1">
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Manager
                </p>
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                  {props.name}
                </p>
              </div>
            </div>
          </div>

          <div className="absolute top-4 right-4 text-xs font-semibold px-2 py-1 bg-slate-100 dark:bg-zinc-800 rounded-md text-slate-500">
            {props.address}
          </div>
        </div>
      </PinContainer>
    </div>
  );
}
