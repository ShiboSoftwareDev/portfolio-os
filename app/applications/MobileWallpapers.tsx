import { useChangeApplicationState } from "../helpers/useChangeApplicationState";
import { useGlobalStore } from "../store/global-state";
import mobileWallpapers from "../utils/MobileWallpapers";

const MobileWallpapers = () => {
  const changeMobileWallpaperId = useGlobalStore(
    (state) => state.changeMobileWallpaperId,
  );
  const changeApplicationState = useChangeApplicationState("MobileWallpapers");
  return (
    <div className="h-full flex flex-col justify-start items-center pt-[10%] gap-[2%] overflow-y-scroll">
      {Object.keys(mobileWallpapers).map((mobileWallpaperId) => (
        <div
          key={mobileWallpaperId}
          className="w-[90%] aspect-[9/16]"
          onClick={() => {
            changeMobileWallpaperId(Number(mobileWallpaperId));
            changeApplicationState("minimized");
          }}
        >
          {mobileWallpapers[Number(mobileWallpaperId)]}
        </div>
      ))}
    </div>
  );
};

export default MobileWallpapers;
