import { ButtonDarkMode } from "../ui";

export const Header = () => {
  return (
    <>
      <header className="h-[235px] rounded-b-[20px] bg-Very-Pale-Blue px-6 pt-8 dark:bg-Very-Dark-Blue xl:flex xl:items-baseline xl:justify-between">
        <div>
          <h1 className="mb-1 text-xl font-bold text-Very-Dark-Blue dark:text-Very-Pale-Blue">
            Panel de Redes Sociales
          </h1>
          <p className="mb-6 text-[0.8rem] font-bold text-black dark:text-Desaturated-Blue">
            Total de Seguidores: 23,004
          </p>
        </div>
        <hr className="mb-[19px] h-[0.15rem] bg-black dark:bg-Desaturated-Blue xl:hidden" />
        <div className="flex justify-between xl:items-center xl:gap-4">
          <label
            htmlFor="darkMode"
            className="font-bold text-Dark-Grayish-Blue dark:text-Desaturated-Blue"
          >
            Dark Mode
          </label>
          <ButtonDarkMode />
        </div>
      </header>
    </>
  );
};
