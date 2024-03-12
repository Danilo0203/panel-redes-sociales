import {
  Header,
  OverviewContainer,
  OverviewTodayContainer,
} from "./componentes";
import { Footer } from "./ui";

export const App = () => {
  return (
    <>
      <Header />
      <OverviewContainer />
      <OverviewTodayContainer />
      <Footer />
    </>
  );
};
