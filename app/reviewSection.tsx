"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { title } from "@/components/primitives";
import { siteConfig } from "@/config/site";

export function ReviewSection() {
  return (
    <div className="mt-[8rem]">
    <h1 className={title()}>Customer Reviews</h1>
    <div className="h-[20rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={siteConfig.reviews}
        direction="right"
        speed="slow"
      />
    </div>
    </div>
  );
}
