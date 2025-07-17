import DashboardPanels from "./DashboardPanels";
import MainContentTopBar from "./MainContentTopBar";

function MainContent() {
  return (
    <section className="flex flex-col gap-spaced py-sm px-sm lg:py-roomy lg:px-xl">
      <MainContentTopBar />
      <DashboardPanels />
    </section>
  );
}

export default MainContent;
