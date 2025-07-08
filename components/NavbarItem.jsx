import ProgressiveBlur from '@/components/ui/progressive-blur';

export default function NavbarWithBlur() {
  return (
    <div className="relative">
      {/* Progressive Blur behind navbar */}
      <ProgressiveBlur
        direction="bottom"
        blurLayers={6}
        blurIntensity={2}
        className="absolute top-0 left-0 w-full h-16 z-0"
      />

      <nav className="relative z-10 flex justify-center bg-black/70 backdrop-blur-xl p-4 border-b border-black/40">
        {/* your nav items here */}
      </nav>
    </div>
  );
}
