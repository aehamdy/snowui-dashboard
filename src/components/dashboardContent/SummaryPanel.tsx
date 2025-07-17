import APP_CONSTANTS from "../../constants";
import Logo from "../sharedComponents/Logo";
import Panel from "../sharedComponents/Panel";
import ImagesStack from "./ImagesStack";
import ProgressStatus from "./ProgressStatus";

function SummaryPanel() {
  return (
    <Panel>
      <div className="flex justify-between items-center mb-5 lg:mb-0">
        <h3 className="mb-md text-heading font-strong">{APP_CONSTANTS.NAME}</h3>

        <div className="hidden lg:flex ">
          <Logo />
        </div>

        <div className="lg:hidden">
          <ProgressStatus />
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex justify-between items-center gap-xl">
          <div className="hidden lg:flex">
            <ProgressStatus />
          </div>

          <div className="flex flex-col items-start gap-1">
            <p className="font-extralight">Total Tasks</p>
            <p className="font-strong">
              15<span className="">/</span>48
            </p>
          </div>

          <div className="flex flex-col items-start gap-1">
            <p className="font-extralight">Due Date</p>
            <p className="font-strong">29 Jan, 2005</p>
          </div>

          <div className="flex flex-col items-start gap-1">
            <p className="font-extralight">Budget Spent</p>
            <p className="font-strong">$15,000</p>
          </div>
        </div>

        <ImagesStack />
      </div>
    </Panel>
  );
}

export default SummaryPanel;
