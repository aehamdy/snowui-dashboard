import Panel from "../sharedComponents/Panel";
import RoadmapAchievements from "./RoadmapAchievements";
import RoadmapWeekdays from "./RoadmapWeekdays";

function RoadmapPanel() {
  return (
    <Panel>
      <div className="flex flex-col items-start gap-md">
        <h3 className="text-small font-strong">What's on the road?</h3>

        <RoadmapWeekdays />

        <RoadmapAchievements />
      </div>
    </Panel>
  );
}

export default RoadmapPanel;
