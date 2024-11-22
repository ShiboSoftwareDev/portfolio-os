import callToast from "../lib/toast";
import { useGlobalStore } from "../store/global-state";
import desktopWallpapers from "../utils/DesktopWallpapers";

const DesktopWallpapers = () => {
  const changeDesktopWallpaperId = useGlobalStore(
    (state) => state.changeDesktopWallpaperId,
  );

  return (
    <div className="h-full flex flex-col justify-start items-center py-[3%] gap-[2%] overflow-y-scroll">
      {Object.keys(desktopWallpapers).map((desktopWallpaperId) => (
        <div
          key={desktopWallpaperId}
          className="h-[50%] aspect-video border"
          onClick={() => {
            changeDesktopWallpaperId(Number(desktopWallpaperId));
            callToast("Wallpaper changed");
          }}
        >
          {desktopWallpapers[Number(desktopWallpaperId)]}
        </div>
      ))}
    </div>
  );
};

export default DesktopWallpapers;
