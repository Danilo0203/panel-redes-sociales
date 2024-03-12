import { networkColors } from "../helpers/networkColors";
import { Images, ImagesIcon } from "./Images";

type NetworkType = keyof typeof networkColors;

export const OverviewCard = ({
  user,
  audienceType,
  audience,
  network,
  isUp,
  today,
}: {
  user: string;
  audienceType: string;
  audience: string | number;
  network: NetworkType | string;
  isUp: boolean;
  today: string;
}) => {
  const networkColorClass =
    typeof network === "string" && network in networkColors
      ? networkColors[network as NetworkType]
      : "";
  return (
    <article className="flex flex-grow cursor-pointer flex-col overflow-hidden rounded bg-Light-Grayish-Blue hover:brightness-95 dark:bg-Dark-Desaturated-Blue hover:dark:brightness-125">
      <div className={`h-1 ${networkColorClass}`}></div>
      <div className="flex flex-grow flex-col items-center justify-evenly gap-1">
        <div className="flex items-center justify-center gap-2">
          <Images network={network} />
          <p className="text-xs font-bold text-Dark-Grayish-Blue dark:text-Desaturated-Blue">
            {user}
          </p>
        </div>
        <div className=" flex flex-col gap-1 text-center">
          <p className="text-6xl font-bold text-Very-Dark-Blue dark:text-white">
            {audience}
          </p>
          <p className="text-xs uppercase tracking-[5px] text-Dark-Grayish-Blue dark:text-Desaturated-Blue">
            {audienceType}
          </p>
        </div>
        <div className="flex items-center justify-center gap-1">
          <ImagesIcon isUp={isUp} />
          <p
            className={`text-xs font-bold ${isUp ? "text-Lime-Green" : "text-Bright-Red"} `}
          >
            {today} Today
          </p>
        </div>
      </div>
    </article>
  );
};
