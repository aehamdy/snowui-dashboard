import profileImage from "../../assets/user-image.png";
import { useSidebar } from "../../contexts/SidebarContext";
import Icon from "../sharedComponents/Icon";

function UserInfo() {
  const { toggle: toggleSidebar } = useSidebar();

  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-sm">
        <div className="w-6 h-6 rounded-circle overflow-hidden">
          <img src={profileImage} alt="user image" />
        </div>

        <div className="">ByeWind</div>
      </div>

      <button onClick={toggleSidebar} className="lg:hidden">
        <Icon name="chevron-left" />
      </button>
    </div>
  );
}

export default UserInfo;
