import user1Image from "../../assets/user-image.png";
import user2Image from "../../assets/user2-image.png";
import user3Image from "../../assets/user3-image.png";
import user4Image from "../../assets/user4-image.png";
import user5Image from "../../assets/user5-image.png";

const users = [
  {
    id: 1,
    image: user1Image,
  },
  {
    id: 2,
    image: user2Image,
  },
  {
    id: 3,
    image: user3Image,
  },
  {
    id: 4,
    image: user4Image,
  },
  {
    id: 5,
    image: user5Image,
  },
];

function ImagesStack() {
  const visibleUsers = users.slice(0, 2);
  const remainingCount = users.length - visibleUsers.length;

  return (
    <div className="flex items-center">
      {visibleUsers.map((user, index) => (
        <div
          key={user.id}
          className={`w-7 h-7 rounded-full dark:border-dark-background ${
            index !== 0 ? "-ml-4" : ""
          } overflow-hidden z-${10 - index}`}
        >
          <img
            src={user.image}
            alt="user"
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {remainingCount > 0 && (
        <div
          className={`flex items-center justify-center w-7 h-7 -ml-3 text-xs font-semibold text-dark-primary bg-[#F9F9FA] dark:bg-[#EDEEFC] border border-light-primary dark:border-transparent rounded-circle z-0`}
        >
          +{remainingCount}
        </div>
      )}
    </div>
  );
}

export default ImagesStack;
