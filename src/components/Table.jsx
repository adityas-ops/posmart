const TableData = [
  {
    customer: "John Doe",
    Sessions: ["Yoga Class", "Personal Training Session"],
    totalPayment: 150,
    status: "Completed",
  },
  {
    customer: "Jane Smith",
    Sessions: ["Meditation Class", "Individual Therapy Session"],
    totalPayment: 180,
    status: "Pending",
  },
  {
    customer: "Alex Johnson",
    Sessions: ["Couples Counseling", "Career Counseling"],
    totalPayment: 300,
    status: "Completed",
  },
  {
    customer: "Sarah Brown",
    Sessions: ["Yoga Class", "Personal Training Session"],
    totalPayment: 150,
    status: "Completed",
  },
  {
    customer: "Mike Davis",
    Sessions: ["Yoga Class", "Personal Training Session"],
    totalPayment: 150,
    status: "Pending",
  },
  {
    customer: "Emily Wilson",
    Sessions: ["Couples Counseling", "Career Counseling"],
    totalPayment: 300,
    status: "Pending",
  },
];

function Table() {
  return (
    <div className="w-full h-fit bg-[#1F1D2B] p-[20px] min-w-[800px]  rounded-lg">
      <h1 className="text-2xl text-white font-bold">Order Report</h1>
      <div className="mt-[20px] border-[0.5px] border-gray-700"></div>
      <table className="w-full mt-[20px]  overflow-x-scroll bg-[#1F1D2B]    text-white">
        <thead className="border-b-[0.5px] border-gray-700">
          <tr>
            <th className="py-2">Customer</th>
            <th className="py-2">Sessions</th>
            <th className="py-2">Total Payment</th>
            <th className="py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {TableData.map((row) => (
            <tr key={row.customer} className="border-b border-gray-700 last:border-b-0">
              <td className="py-2 text-center">{row.customer}</td>
              <td className="py-2 text-center">
                {row.Sessions.map((session, index) => (
                  <span key={index} className="block text-center">
                    {session}
                  </span>
                ))}
              </td>
              <td className="py-2 text-center">${row.totalPayment}.00</td>
              <td className="py-2 text-center flex justify-center">
                {row.status === "Pending" ? (
                  <div className=" w-[120px] bg-[#FFB572]/10 px-4 py-2 rounded-full text-[#FFB572]">
                    Pending
                  </div>
                ) : (
                  <div className="bg-[#50D1AA]/10 w-[120px] px-4 py-2 rounded-full text-[#50D1AA]">
                    Completed
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
