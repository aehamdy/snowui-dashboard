import Icon from "../sharedComponents/Icon";
import type { IconName } from "../sharedComponents/Icon";

type FileItem = {
  id: number;
  icon: IconName;
  name: string;
  label: string;
};

const filesList: FileItem[] = [
  {
    id: 1,
    icon: "pdf-file",
    name: "Project tech requirements.pdf",
    label: "5.6 MB / Just now / Karina Clark",
  },
  {
    id: 1,
    icon: "jpg-file",
    name: "Dashboard-design.jpg",
    label: "2.3 MB / 59 minutes ago / Marcus Blake",
  },
  {
    id: 1,
    icon: "pdf-file",
    name: "Completed Project Stylings.pdf",
    label: "4.6 MB / 12 hours ago / Terry Barry",
  },
  {
    id: 1,
    icon: "xls-file",
    name: "Create Project Wireframes.xls",
    label: "1.2 MB / Today, 11:59 AM / Roth Bloom",
  },
  {
    id: 1,
    icon: "pdf-file",
    name: "Project tech requirements.pdf",
    label: "2.8 MB / Yesterday / Natali Craig",
  },
];

function LatestFilesList() {
  return (
    <ul className="w-full space-y-narrow">
      {filesList.map((file) => (
        <li className="group flex justify-between items-center">
          <div className="flex items-center gap-sm">
            <div className="p-[6px] text-dark-primary bg-[#E6F1FD] rounded-medium">
              <Icon name={file.icon} className="" />
            </div>

            <div className="text-tiny font-light text-start ">
              <p className="text-dark-primary dark:text-light-primary">
                {file.name}
              </p>
              <p className="text-dark-tertiary dark:text-light-tertiary">
                {file.label}
              </p>
            </div>
          </div>

          <div className="duration-300">
            <Icon
              name="download"
              className="lg:invisible lg:group-hover:visible duration-300"
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default LatestFilesList;
