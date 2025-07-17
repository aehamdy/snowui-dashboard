import DashboardPanels from "./DashboardPanels";
import MainContentTopBar from "./MainContentTopBar";

function MainContent() {
  return (
    <section className="flex flex-col gap-spaced p-xl">
      <MainContentTopBar />
      <DashboardPanels />
    </section>
  );
}

export default MainContent;
