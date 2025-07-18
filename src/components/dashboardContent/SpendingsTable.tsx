import userImage from "../../assets/user-image.png";
import useFetchData from "../../hooks/useFetchData";

const statusColors = {
  pending: {
    dot: "bg-status-pending",
    text: "text-status-pending",
  },
  completed: {
    dot: "bg-status-complete",
    text: "text-status-complete",
  },
  approved: {
    dot: "bg-status-approved",
    text: "text-status-approved",
  },
  rejected: {
    dot: "bg-status-rejected",
    text: "text-status-rejected",
  },
} as const;

const headers = ["Client", "Date", "Total", "Status"];

function SpendingsTable() {
  const { data, loading, error } = useFetchData();

  if (loading) {
    return <p className="text-sm text-gray-500">Loading...</p>;
  }

  if (error) {
    return (
      <p className="text-sm text-red-500">
        Failed to fetch data: {error.message}
      </p>
    );
  }

  return (
    <div className="relative w-full">
      <table className="w-full text-tiny font-light">
        <thead className="sticky top-0 text-dark-tertiary dark:text-light-tertiary border-b z-10">
          <tr>
            {headers.map((label, index) => (
              <th key={index} className="text-start font-regular py-xs">
                {label}
              </th>
            ))}
          </tr>
        </thead>
      </table>

      <div className="max-h-[140px] overflow-y-auto">
        <table className="w-full text-tiny font-light">
          <tbody>
            {data?.map((item) => {
              const status =
                item.status?.toLowerCase() as keyof typeof statusColors;
              const statusColor = statusColors[status];

              return (
                <tr
                  key={item._id}
                  className="text-dark-primary dark:text-light-primary"
                >
                  <td className="py-sm">
                    <div className="flex items-center gap-sm">
                      <div className="w-[1.5rem] h-[1.5rem] rounded-circle overflow-hidden">
                        <img
                          src={item.tubeImage || userImage}
                          alt={`${item.clientName || "Client"} avatar`}
                        />
                      </div>
                      <p>{item.clientName || "Unnamed"}</p>
                    </div>
                  </td>

                  <td className="text-start py-sm">
                    {item.date
                      ? new Date(item.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })
                      : "-"}
                  </td>

                  <td className="text-start py-sm">${item.total ?? "N/A"}</td>

                  <td className="py-sm">
                    <div className="flex items-center gap-2">
                      {statusColor ? (
                        <>
                          <span
                            className={`w-2 h-2 rounded-circle ${statusColor.dot}`}
                          ></span>
                          <span className={`${statusColor.text}`}>
                            {item.status}
                          </span>
                        </>
                      ) : (
                        <span>
                          {item.status &&
                            item.status.charAt(0).toUpperCase() +
                              item.status.slice(1).toLowerCase()}
                        </span>
                      )}
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
