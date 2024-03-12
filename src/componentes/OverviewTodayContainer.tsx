import data from "../../data/data.json";
import { convertNumberToK } from "../helpers/convertidor";
import { OverviewTodayCard } from "../ui";

export const OverviewTodayContainer = () => {
  return (
    <section className="mb-8 px-8 lg:px-36">
      <h2 className="mb-8 text-2xl font-bold text-Dark-Grayish-Blue dark:text-white">
        Overview - Today
      </h2>
      <article className="3xl:grid-cols-[repeat(auto-fit,_minmax(min(100%,_20rem)_,1fr))] grid grid-cols-[repeat(auto-fit,_minmax(min(100%,_18rem)_,1fr))]  justify-center gap-4 md:grid-cols-[repeat(auto-fit,_minmax(min(100%,_20rem)_,1fr))] lg:grid-cols-[repeat(auto-fit,_minmax(min(100%,_20rem)_,1fr))] xl:grid-cols-[repeat(auto-fit,_minmax(min(100%,_14rem)_,1fr))] 2xl:grid-cols-[repeat(auto-fit,_minmax(min(100%,_17rem)_,1fr))]">
        {data["overview-today"].map(
          ({ id, network, porcentage, stats, statsType, isUp }) => (
            <OverviewTodayCard
              key={id}
              network={network}
              porcentage={porcentage}
              stats={convertNumberToK(stats)}
              statsType={statsType}
              isUp={isUp}
            />
          ),
        )}
      </article>
    </section>
  );
};
