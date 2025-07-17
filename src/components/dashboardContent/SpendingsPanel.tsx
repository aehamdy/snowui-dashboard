import Panel from "../sharedComponents/Panel";
import SpendingsTable from "./SpendingsTable";

function SpendingsPanel() {
  return (
    <Panel>
      <div className="flex flex-col items-start gap-md">
        <h3 className="text-small font-strong">What's on the road?</h3>

        <SpendingsTable />
      </div>
    </Panel>
  );
}

export default SpendingsPanel;
