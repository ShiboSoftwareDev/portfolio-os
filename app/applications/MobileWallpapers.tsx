import { useChangeApplicationState } from "../helpers/useChangeApplicationState";
import { useGlobalStore } from "../store/global-state";
import mobileWallpapers from "../utils/MobileWallpapers";

const MobileWallpapers = () => {
  const changeMobileWallpaperId = useGlobalStore(
    (state) => state.changeMobileWallpaperId,
  );
  const changeApplicationState = useChangeApplicationState("MobileWallpapers");

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
        {Object.keys(mobileWallpapers).map((mobileWallpaperId) => (
          <div
            key={mobileWallpaperId}
            className="relative aspect-[9/16] rounded-xl overflow-hidden group border border-slate-600"
            onClick={() => {
              changeMobileWallpaperId(Number(mobileWallpaperId));
              changeApplicationState("minimized");
            }}
          >
            <div className="absolute inset-0 transition-transform group-active:scale-95">
              {mobileWallpapers[Number(mobileWallpaperId)]}
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40 opacity-0         
 group-hover:opacity-100 transition-opacity" />
            <div
              className="absolute bottom-2 left-2 text-sm text-white font-medium opacity-0 group-hover:opacity-100        
 transition-opacity"
              style={{
                textShadow:
                  "-0.5px -0.5px 0 rgba(0,0,0,0.5), 0.5px -0.5px 0 rgba(0,0,0,0.5), -0.5px 0.5px 0 rgba(0,0,0,0.5), 0.5px 0.5px 0 rgba(0,0,0,0.5)",
              }}
            >
              Wallpaper {Number(mobileWallpaperId) + 1}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileWallpapers;
