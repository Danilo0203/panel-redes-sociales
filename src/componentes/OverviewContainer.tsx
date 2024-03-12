import data from "../../data/data.json";
import { convertNumberToK } from "../helpers/convertidor";
import { OverviewCard } from "../ui";

export const OverviewContainer = () => {
  return (
    <section className="relative -top-12 grid auto-rows-[216px] grid-cols-[repeat(auto-fit,_minmax(min(100%,_15rem)_,1fr))] justify-center gap-4 px-8 md:grid-cols-[repeat(auto-fit,_minmax(min(100%,_20rem)_,1fr))] lg:grid-cols-[repeat(auto-fit,_minmax(min(100%,_20rem)_,1fr))] lg:px-36 xl:grid-cols-[repeat(auto-fit,_minmax(min(100%,_12rem)_,1fr))]">
      {data.overview.map(
        ({ id, audience, audienceType, user, network, isUp, today }) => (
          <OverviewCard
            key={id}
            user={user}
            audienceType={audienceType}
            audience={convertNumberToK(audience)}
            network={network}
            isUp={isUp}
            today={today}
          />
        ),
      )}
    </section>
  );
};
