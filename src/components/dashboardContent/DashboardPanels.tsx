import LatestFilesPanel from "./LatestFilesPanel";
import RoadmapPanel from "./RoadmapPanel";
import SpendingsPanel from "./SpendingsPanel";
import SummaryPanel from "./SummaryPanel";

function DashboardPanels() {
  return (
    <section className="space-y-cozy lg:space-y-xl">
      <SummaryPanel />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-cozy lg:gap-xl">
        <RoadmapPanel />
        <LatestFilesPanel />
      </div>

      <SpendingsPanel />
    </section>
  );
}

export default DashboardPanels;
