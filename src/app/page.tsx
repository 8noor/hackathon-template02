"use client";
import React from "react";
import Home from "./products/page";
import Hero from "./components/Hero";
import Touch from "./components/Touch";
import Brand from "./components/Brand";

import Benefit from "./components/Banefit";
import FeaturedCategories from "./components/FeaturedCategories";

export default function page() {
  return (
    <div>
      <Hero />
      <Brand />

      <Home />
      <FeaturedCategories />

      <Benefit />

      <Touch />
      {/* <Page/> */}
    </div>
  );
}
