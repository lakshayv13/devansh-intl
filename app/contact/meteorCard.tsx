import React from "react";
import { Meteors } from "@/components/ui/meteors";
import { Phone, Mail, MapPin } from "lucide-react";

interface Props {
  location: string;
  state: string;
  name: string;
  number: number;
  mail: string;
}

export function MeteorCard(props: Props) {
  return (
    <div className="w-full relative max-w-sm">
      <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-slate-200 to-slate-100 dark:from-slate-900 dark:to-slate-800 transform scale-[0.95] rounded-3xl blur-xl opacity-50" />
      <div className="relative shadow-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 px-6 py-8 h-full overflow-hidden rounded-3xl flex flex-col justify-between">
        <div className="mb-6">
          <div className="flex items-center gap-x-2 mb-4">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-900 dark:text-white ring-1 ring-inset ring-slate-200 dark:ring-zinc-700">
              <MapPin className="h-4 w-4" />
            </span>
            <h2 className="font-semibold text-lg text-slate-900 dark:text-white tracking-tight">
              {props.state}
            </h2>
          </div>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400 pl-10 -mt-2 mb-6">
            {props.location}
          </p>
        </div>

        <div className="space-y-4 relative z-40">
          <div className="flex items-start gap-4 p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-zinc-800/50 transition-colors group">
            <div className="mt-1 p-2 rounded-xl bg-violet-50 dark:bg-violet-900/20 text-violet-600 dark:text-violet-400 group-hover:scale-110 transition-transform">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-0.5">
                Contact
              </p>
              <p className="text-sm font-semibold text-slate-900 dark:text-white">
                {props.number}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-zinc-800/50 transition-colors group">
            <div className="mt-1 p-2 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-0.5">
                Email
              </p>
              <p className="text-sm font-semibold text-slate-900 dark:text-white break-all">
                {props.mail}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-zinc-800/50 transition-colors group">
            <div className="mt-1 p-2 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
              <div className="w-4 h-4 flex items-center justify-center font-bold text-xs">
                @
              </div>
            </div>
            <div>
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-0.5">
                Manager
              </p>
              <p className="text-sm font-semibold text-slate-900 dark:text-white">
                {props.name}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-slate-100 dark:border-zinc-800">
          <a
            href={`https://maps.google.com/?q=${props.location}`}
            target="_blank"
            rel="noreferrer"
            className="flex w-full items-center justify-center gap-2 px-4 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-medium text-sm hover:opacity-90 transition-opacity"
          >
            <MapPin className="w-4 h-4" />
            View on Map
          </a>
        </div>

        <Meteors number={10} className="opacity-30" />
      </div>
    </div>
  );
}
