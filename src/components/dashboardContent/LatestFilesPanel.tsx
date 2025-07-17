import Panel from "../sharedComponents/Panel";
import LatestFilesList from "./LatestFilesList";
import LatestFilesUpload from "./LatestFilesUpload";

function LatestFilesPanel() {
  return (
    <Panel>
      <div className="flex flex-col items-start gap-md">
        <h3 className="text-start text-small font-strong">Latest Files</h3>

        <LatestFilesList />

        <LatestFilesUpload />
      </div>
    </Panel>
  );
}

export default LatestFilesPanel;
