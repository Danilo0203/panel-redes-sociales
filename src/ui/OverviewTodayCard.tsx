import { Images, ImagesIcon } from "./Images";

export const OverviewTodayCard = ({
  network,
  statsType,
  stats,
  porcentage,
  isUp,
}: {
  network: string;
  statsType: string;
  stats: string | number;
  porcentage: number;
  isUp: boolean;
}) => {
  return (
    <article className="flex flex-col gap-5 rounded bg-Light-Grayish-Blue p-7 hover:brightness-95 dark:bg-Dark-Desaturated-Blue hover:dark:brightness-125">
      <div className="flex items-center justify-between">
        <p className="font-medium text-Dark-Grayish-Blue dark:text-Desaturated-Blue">
          {statsType}
        </p>
        <Images network={network} />
      </div>
      <div className="flex items-end justify-between">
        <p className="text-5xl font-bold text-Very-Dark-Blue dark:text-white">
          {stats}
        </p>
        <div className="flex items-center justify-center gap-1">
          <ImagesIcon isUp={isUp} />
          <p
            className={`text-xs font-bold ${isUp ? "text-Lime-Green" : "text-Bright-Red"} `}
          >
            {porcentage} Today
          </p>
        </div>
      </div>
    </article>
  );
};
