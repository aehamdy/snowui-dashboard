import Panel from "../sharedComponents/Panel";
import Logo from "../../assets/logo.png";
import ImagesStack from "./ImagesStack";

function SummaryPanel() {
  const inProgressVal = 51;

  return (
    <Panel>
      <div className="flex justify-between items-center">
        <h3 className="mb-md text-heading font-strong">SnowUI</h3>
        <img src={Logo} alt="snow ui logo" />
      </div>

      <div className="flex justify-between items-center">
        <div className="flex justify-between items-center gap-xl">
          <div className="flex flex-col items-start gap-1">
            <p className="font-extralight">Status</p>

            <div
              className={`py-1 px-[5.5px] bg-linear-to-r from-0% to-[${inProgressVal}%] from-accent to-dark-faint from-[${inProgressVal}%] to-100% dark:bg-light-soft rounded-regular`}
            >
              <p className="font-strong">
                In Progress <span className="">/</span> {inProgressVal}%
              </p>
            </div>
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
