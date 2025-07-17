// import userImage from "../../assets/user-image.png";
// import user6Image from "../../assets/user6-image.png";
// import user7Image from "../../assets/user7-image.png";
// import user8Image from "../../assets/user8-image.png";
// import user9Image from "../../assets/user9-image.png";

// const inProgressStatus = "In Progress";
// const completeStatus = "Complete";
// const pendingStatus = "Pending";
// const approvedStatus = "Approved";
// const rejectedStatus = "Rejected";

// type SpendingItem = {
//   id: number;
//   image: string;
//   name: string;
//   date: string;
//   amount: string;
//   status: "In Progress" | "Complete" | "Pending" | "Approved" | "Rejected";
// };

// const spendingsList: SpendingItem[] = [
//   {
//     id: 1,
//     image: userImage,
//     name: "ByeWind",
//     date: "Jun 24, 2025",
//     amount: "942.00",
//     status: inProgressStatus,
//   },
//   {
//     id: 2,
//     image: user6Image,
//     name: "Natali Craig",
//     date: "Mar 10, 2025",
//     amount: "881.00",
//     status: completeStatus,
//   },
//   {
//     id: 3,
//     image: user7Image,
//     name: "Drew Cano",
//     date: "Nov 10, 2025",
//     amount: "409.00",
//     status: pendingStatus,
//   },
//   {
//     id: 4,
//     image: user8Image,
//     name: "Orlando Diggs",
//     date: "Dec 20, 2025",
//     amount: "953.00",
//     status: approvedStatus,
//   },
//   {
//     id: 5,
//     image: user9Image,
//     name: "Andi Lane",
//     date: "Jul 25, 2025",
//     amount: "907.00",
//     status: rejectedStatus,
//   },
// ];

// function SpendingsTable() {
//   return (
//     <table className="w-full ">
//       <tr className="text-dark-tertiary dark:text-light-tertiary border-b">
//         <th className="text-start font-regular">Manager</th>
//         <th className="text-start font-regular">Date</th>
//         <th className="text-start font-regular">Amount</th>
//         <th className="text-start font-regular">Status</th>
//       </tr>

//       {spendingsList.map((item) => (
//         <tr
//           key={item.id}
//           className="py-sm text-dark-primary dark:text-light-primary"
//         >
//           <th className="flex items-center gap-sm text-tiny font-light">
//             <div className="w-[1.5rem] h-[1.5rem] rounded-circle overflow-hidden">
//               <img src={item.image} alt="user image" />
//             </div>

//             <p className="text-start">{item.name}</p>
//           </th>

//           <th className="text-tiny font-light text-start">
//             <p className="">{item.date}</p>
//           </th>

//           <th className="text-tiny font-light text-start">
//             <p className="">{item.amount}</p>
//           </th>

//           <th className="flex items-center gap-2 text-tiny font-light text-start">
//             <div
//               className={`w-2 h-2 ${
//                 item.status === inProgressStatus
//                   ? "bg-status-inprogress"
//                   : item.status === completeStatus
//                   ? "bg-status-complete"
//                   : item.status === pendingStatus
//                   ? "bg-status-pending"
//                   : item.status === approvedStatus
//                   ? "bg-status-approved"
//                   : item.status === rejectedStatus
//                   ? "bg-status-rejected"
//                   : "bg-light-primary"
//               } rounded-circle`}
//             ></div>

//             <p
//               className={`${
//                 item.status === inProgressStatus
//                   ? "text-status-inprogress"
//                   : item.status === completeStatus
//                   ? "text-status-complete"
//                   : item.status === pendingStatus
//                   ? "text-status-pending"
//                   : item.status === approvedStatus
//                   ? "text-status-approved"
//                   : item.status === rejectedStatus
//                   ? "text-status-rejected"
//                   : "text-light-primary"
//               }`}
//             >
//               {item.status}
//             </p>
//           </th>
//         </tr>
//       ))}
//     </table>
//   );
// }

// export default SpendingsTable;

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
    <table className="w-full text-tiny font-light">
      <thead className="text-dark-tertiary dark:text-light-tertiary border-b">
        <tr>
          {headers.map((header) => (
            <th key={header.id} className="text-start font-regular py-xs">
              {header.label}
            </th>
          ))}
        </tr>
      </thead>

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
                  <span className={`${statusColor.text}`}>{item.status}</span>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default SpendingsTable;
