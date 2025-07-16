import profileImage from "../../assets/user-image.png";

function UserInfo() {
  return (
    <div className="flex items-center gap-sm">
      <div className="w-6 h-6 rounded-circle overflow-hidden">
        <img src={profileImage} alt="user image" />
      </div>

      <div className="">ByeWind</div>
    </div>
  );
}

export default UserInfo;
