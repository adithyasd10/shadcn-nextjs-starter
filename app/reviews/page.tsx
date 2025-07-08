'use client';

import React from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import Navbar from "@/components/Navbar";

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Add Progressive Blur behind the nav */}
      <ProgressiveBlur
        direction="bottom"
        blurLayers={6}
        blurIntensity={2}
        className="absolute top-0 left-0 w-full h-16"
      />
    <nav  className=" fixed top-0 left-0 z-20 w-full border-b backdrop-blur-3xl">
        <div className="flex justify-start items-center">
        {/* Navigation Menu */}
      <NavigationMenu>
        <NavigationMenuList className="h-12 flex space-x-4 backdrop-blur-md p-4 rounded-md relative z-10">
          <NavigationMenuItem className="px-4">
            <NavigationMenuLink
              href="/"
              className="text-white hover:text-gray-300 transition-colors text-sm md:text-2xl xl:text-3xl transition-all duration-300 ease-in-out"
            >
              Home
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/about"
              className="text-white hover:text-gray-300 transition-colors md:text-2xl xl:text-3xl transition-all duration-300 ease-in-out"
            >
              About
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

    </div>
    </nav>
    <Navbar/>
      {/* Page Content */}
      <div className="pt-25 p-10 mt-8 relative z-10">
        <h1 className="text-4xl font-bold mb-4">🎬 Movie Reviews</h1>
        <p className="text-lg">
          Here’s where you’ll see all movie reviews!
        </p>
      </div>
    </div>
  );
}
