import { useGlobalStore } from "../store/global-state";
import wallpapers from "../utils/Wallpapers";

const Wallpapers = () => {
  const changeWallpaperId = useGlobalStore((state) => state.changeWallpaperId);
  return (
    <div className="h-full flex flex-row justify-start items-center overflow-x-scroll">
      {Object.keys(wallpapers).map((wallpaperId) => (
        <div
          key={wallpaperId}
          className="h-[50%] aspect-video"
          onClick={() => changeWallpaperId(Number(wallpaperId))}
        >
          {wallpapers[Number(wallpaperId)]}
        </div>
      ))}
    </div>
  );
};

export default Wallpapers;
