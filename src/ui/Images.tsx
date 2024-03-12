export const Images = ({ network }: { network: string }) => {
  return (
    <img src={`assets/img/icon-${network}.svg`} alt={`logo de ${network}`} />
  );
};
export const ImagesIcon = ({ isUp }: { isUp: boolean }) => {
  return (
    <img
      src={`assets/img/icon-${isUp ? "up" : "down"}.svg`}
      alt="icon arrow"
      className="pb-[0.1rem]"
    />
  );
};
