import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { useSearchParams } from "next/navigation";

export default function Navbar() {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  return (
    <div
      className="
        fixed
        top-12
        w-full
        flex
        justify-center
        p-4
        backdrop-blur-xl
        bg-black/70
        border-b border-grey/40
        border-t border-grey/40
        z-50
        
      "
    >
      <NavigationMenu>
        <NavigationMenuList className="h-12 flex gap-6">
          {/* Trending */}
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/?genre=fetchTrending"
              className={`
                text-white
                font-semibold
                text-sm md:text-lg xl:text-xl
                px-3 py-2
                rounded-md
                transition-all duration-300 ease-in-out
                hover:bg-clip-text
                hover:text-transparent
                hover:bg-gradient-to-r
                hover:from-emerald-400
                hover:to-green-500
                hover:underline
                hover:underline-offset-8
                hover:decoration-4
                hover:decoration-emerald-400
                ${genre === 'fetchTrending' ? 
                  'bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-green-500 underline underline-offset-8 decoration-4 decoration-emerald-400' 
                  : ''
                }
              `}
            >
              Trending
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* Top Rated */}
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/?genre=fetchTopRated"
              className={`
                text-white
                font-semibold
                text-sm md:text-lg xl:text-xl
                px-3 py-2
                rounded-md
                transition-all duration-300 ease-in-out
                hover:bg-clip-text
                hover:text-transparent
                hover:bg-gradient-to-r
                hover:from-emerald-400
                hover:to-green-500
                hover:underline
                hover:underline-offset-8
                hover:decoration-4
                hover:decoration-emerald-400
                ${genre === 'fetchTopRated' ? 
                  'bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-green-500 underline underline-offset-8 decoration-4 decoration-emerald-400' 
                  : ''
                }
              `}
            >
              Top Rated
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
