import { useGlobalStore } from "../store/global-state";
import desktopWallpapers from "../utils/DesktopWallpapers";
import callToast from "../lib/toast";

const MobileWallpapers = () => {
  const changeDesktopWallpaperId = useGlobalStore(
    (state) => state.changeDesktopWallpaperId,
  );

  return (
    <div className="h-full bg-slate-800 overflow-scroll">
      <header className="w-full h-14 flex items-center px-4 backdrop-blur-md mt-4">
        <span
          className="text-lg text-white text-center w-full font-medium"
          style={{
            textShadow:
              "-0.5px -0.5px 0 rgba(0,0,0,0.5), 0.5px -0.5px 0 rgba(0,0,0,0.5), -0.5px 0.5px 0 rgba(0,0,0,0.5), 0.5px 0.5px 0 rgba(0,0,0,0.5)",
          }}
        >
          Wallpapers
        </span>
      </header>

      <div className="grid grid-cols-2 gap-2 px-2 pb-2 overflow-y-auto">
        {Object.keys(desktopWallpapers).map((desktopWallpaperId) => (
          <div
            key={desktopWallpaperId}
            className="relative aspect-video overflow-hidden group border border-slate-600"
            onClick={() => {
              changeDesktopWallpaperId(Number(desktopWallpaperId));
              callToast("Wallpaper Changed");
            }}
          >
            <div className="absolute inset-0 transition-transform group-active:scale-95">
              {desktopWallpapers[Number(desktopWallpaperId)]}
            </div>
            <div
              className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40 opacity-0         
 group-hover:opacity-100 transition-opacity"
            />
            <div
              className="absolute bottom-2 left-2 text-sm text-white font-medium opacity-0 group-hover:opacity-100        
 transition-opacity"
              style={{
                textShadow:
                  "-0.5px -0.5px 0 rgba(0,0,0,0.5), 0.5px -0.5px 0 rgba(0,0,0,0.5), -0.5px 0.5px 0 rgba(0,0,0,0.5), 0.5px 0.5px 0 rgba(0,0,0,0.5)",
              }}
            >
              Wallpaper {Number(desktopWallpaperId) + 1}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileWallpapers;
