import {
  PiChartPieSliceFill,
  PiChatsTeardrop,
  PiFolder,
  PiIdentificationBadge,
  PiIdentificationCard,
  PiShoppingBagOpen,
  PiUsersThree,
} from "react-icons/pi";

export type IconName =
  | "chartpie-slice"
  | "shopping-bag-open"
  | "folder"
  | "identification-badge"
  | "identification-card"
  | "users-three"
  | "chats-teardrop";

const iconMap = {
  "chartpie-slice": PiChartPieSliceFill,
  "shopping-bag-open": PiShoppingBagOpen,
  folder: PiFolder,
  "identification-badge": PiIdentificationBadge,
  "identification-card": PiIdentificationCard,
  "users-three": PiUsersThree,
  "chats-teardrop": PiChatsTeardrop,
};
interface IconProps {
  name: IconName;
  size?: string | number;
  className?: string;
}

function Icon({
  name,
  size = 24,
  className = "text-dark-primary dark:text-light-primary",
}: IconProps) {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    console.warn(
      `Icon ${name} is not defined in iconMap, check your name prop or iconMap.`
    );
    return null;
  }

  return <IconComponent size={size} className={className} />;
}

export default Icon;
