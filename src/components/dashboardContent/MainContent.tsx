import DashboardPanels from "./DashboardPanels";
import MainContentTopBar from "./MainContentTopBar";

function MainContent() {
  return (
    <section className="flex flex-col gap-spaced py-roomy px-xl">
      <MainContentTopBar />
      <DashboardPanels />
    </section>
  );
}

export default MainContent;
