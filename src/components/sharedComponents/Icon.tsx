import { FiChevronRight } from "react-icons/fi";
import {
  PiBell,
  PiChartPieSliceFill,
  PiChatsTeardrop,
  PiClockCounterClockwise,
  PiDotsThreeOutlineFill,
  PiDownloadSimple,
  PiFileJpg,
  PiFilePdf,
  PiFileXls,
  PiFolder,
  PiIdentificationBadge,
  PiIdentificationCard,
  PiMagnifyingGlass,
  PiNotebook,
  PiPlus,
  PiShoppingBagOpen,
  PiSidebar,
  PiStar,
  PiSunDim,
  PiUsersThree,
} from "react-icons/pi";

export type IconName =
  | "chartpie-slice"
  | "shopping-bag-open"
  | "folder"
  | "identification-badge"
  | "identification-card"
  | "users-three"
  | "notebook"
  | "chats-teardrop"
  | "chevron-right"
  | "star"
  | "sidebar"
  | "magnifying-glass"
  | "sun"
  | "bell"
  | "clock-counter-clockwise"
  | "plus"
  | "three-dots"
  | "download"
  | "pdf-file"
  | "jpg-file"
  | "xls-file";

const iconMap = {
  "chartpie-slice": PiChartPieSliceFill,
  "shopping-bag-open": PiShoppingBagOpen,
  folder: PiFolder,
  "identification-badge": PiIdentificationBadge,
  "identification-card": PiIdentificationCard,
  "users-three": PiUsersThree,
  notebook: PiNotebook,
  "chats-teardrop": PiChatsTeardrop,
  "chevron-right": FiChevronRight,
  star: PiStar,
  sidebar: PiSidebar,
  "magnifying-glass": PiMagnifyingGlass,
  sun: PiSunDim,
  bell: PiBell,
  "clock-counter-clockwise": PiClockCounterClockwise,
  plus: PiPlus,
  "three-dots": PiDotsThreeOutlineFill,
  download: PiDownloadSimple,
  "pdf-file": PiFilePdf,
  "jpg-file": PiFileJpg,
  "xls-file": PiFileXls,
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
