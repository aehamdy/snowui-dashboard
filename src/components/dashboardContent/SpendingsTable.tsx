import userImage from "../../assets/user-image.png";
import user6Image from "../../assets/user6-image.png";
import user7Image from "../../assets/user7-image.png";
import user8Image from "../../assets/user8-image.png";
import user9Image from "../../assets/user9-image.png";

const statusColors = {
  "In Progress": {
    dot: "bg-status-inprogress",
    text: "text-status-inprogress",
  },
  Complete: {
    dot: "bg-status-complete",
    text: "text-status-complete",
  },
  Pending: {
    dot: "bg-status-pending",
    text: "text-status-pending",
  },
  Approved: {
    dot: "bg-status-approved",
    text: "text-status-approved",
  },
  Rejected: {
    dot: "bg-status-rejected",
    text: "text-status-rejected",
  },
};

type SpendingStatus = keyof typeof statusColors;

type HeaderItem = {
  id: number;
  label: string;
};

type SpendingItem = {
  id: number;
  image: string;
  name: string;
  date: string;
  amount: string;
  status: SpendingStatus;
};

const headers: HeaderItem[] = [
  { id: 1, label: "Manager" },
  { id: 2, label: "Date" },
  { id: 3, label: "Amount" },
  { id: 4, label: "Status" },
];

const spendingsList: SpendingItem[] = [
  {
    id: 1,
    image: userImage,
    name: "ByeWind",
    date: "Jun 24, 2025",
    amount: "942.00",
    status: "In Progress",
  },
  {
    id: 2,
    image: user6Image,
    name: "Natali Craig",
    date: "Mar 10, 2025",
    amount: "881.00",
    status: "Complete",
  },
  {
    id: 3,
    image: user7Image,
    name: "Drew Cano",
    date: "Nov 10, 2025",
    amount: "409.00",
    status: "Pending",
  },
  {
    id: 4,
    image: user8Image,
    name: "Orlando Diggs",
    date: "Dec 20, 2025",
    amount: "953.00",
    status: "Approved",
  },
  {
    id: 5,
    image: user9Image,
    name: "Andi Lane",
    date: "Jul 25, 2025",
    amount: "907.00",
    status: "Rejected",
  },
];

function SpendingsTable() {
  return (
    <div className="relative w-full">
      <table className="w-full text-tiny font-light">
        <thead className="sticky top-0 text-dark-tertiary dark:text-light-tertiary border-b z-10">
          <tr>
            {headers.map((header) => (
              <th key={header.id} className="text-start font-regular py-xs">
                {header.label}
              </th>
            ))}
          </tr>
        </thead>
      </table>

      <div className="max-h-[140px] overflow-y-auto">
        <table className="w-full text-tiny font-light">
          <tbody>
            {spendingsList.map((item) => {
              const statusColor = statusColors[item.status];
              return (
                <tr
                  key={item.id}
                  className="text-dark-primary dark:text-light-primary"
                >
                  <td className="py-sm">
                    <div className="flex items-center gap-sm">
                      <div className="w-[1.5rem] h-[1.5rem] rounded-circle overflow-hidden">
                        <img src={item.image} alt={`${item.name} avatar`} />
                      </div>
                      <p>{item.name}</p>
                    </div>
                  </td>
                  <td className="text-start py-sm">{item.date}</td>
                  <td className="text-start py-sm">${item.amount}</td>
                  <td className="py-sm">
                    <div className="flex items-center gap-2">
                      <span
                        className={`w-2 h-2 rounded-circle ${statusColor.dot}`}
                      ></span>
                      <span className={`${statusColor.text}`}>
                        {item.status}
                      </span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SpendingsTable;
