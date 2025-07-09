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
import Results from "@/components/Results";

const API_KEY = process.env.API_KEY;

export default async function ReviewsPage({ searchParams }: { searchParams: { genre?: string } }) {
  const genre = searchParams?.genre || 'fetchTrending';
  const res = await fetch(
    `https://api.themoviedb.org/3${
      genre === 'fetchTopRated' ? `/movie/top_rated` : `/trending/all/week`
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );
  const data = await res.json();
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const results = data.results;

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Add Progressive Blur behind the nav */}
      <ProgressiveBlur
        direction="bottom"
        blurLayers={6}
        blurIntensity={2}
        className="absolute top-0 left-0 w-full h-16"
      />
      <nav className="fixed top-0 left-0 z-20 w-full border-b backdrop-blur-3xl">
        <div className="flex justify-start items-center">
          {/* Navigation Menu */}
          <NavigationMenu>
            <NavigationMenuList className="h-12 flex space-x-4 backdrop-blur-md p-4 rounded-md relative z-10">
              <NavigationMenuItem className="px-4">
                <NavigationMenuLink
                  href="/"
                  className="text-white hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-emerald-400 hover:to-green-500 transition-all text-sm md:text-2xl xl:text-3xl duration-300 ease-in-out"
                >
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/about"
                  className="text-white hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-emerald-400 hover:to-green-500 transition-all md:text-2xl xl:text-3xl duration-300 ease-in-out"
                >
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </nav>
      {/* Add padding-top to Results to offset the fixed nav bar height (e.g., pt-24 for 6rem) */}
      <div className="pt-30">
        <Results results={results} />
      </div>
      {/* Page Content */}

    </div>
  );
}
