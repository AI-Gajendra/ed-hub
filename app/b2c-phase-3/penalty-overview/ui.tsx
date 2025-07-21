import React from "react";

const PenaltyRecords = () => {
  const data = Array(11).fill({
    date: "12/10/25",
    reason: "Lorem ipsum",
    amount: "200",
    action: "Lorem ipsum",
  });

  return (
    <div className="w-full p-2">
      {/* Desktop Header */}
      <div className="hidden md:flex justify-around bg-[#3366ff] text-white rounded-2xl py-4 px-6 font-medium mb-2">
        <div className="text-left">Date</div>
        <div className="text-left">Reason</div>
        <div className="text-left">Penalty Amount</div>
        <div className="text-left">Action Taken</div>
      </div>

      {/* Data Rows */}
      <div className="space-y-2">
        {data.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl border border-[#e5e7eb] bg-[#faf9fb] px-6 py-4"
          >
            {/* Desktop Layout */}
            <div className="hidden md:flex justify-around  text-black">
              <div>{item.date}</div>
              <div>{item.reason}</div>
              <div>₹{item.amount}</div>
              <div>{item.action}</div>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden flex flex-col space-y-2 text-sm text-black">
              <div className="flex justify-between">
                <span className="font-medium text-black">Date:</span>
                <span>{item.date}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-black">Reason:</span>
                <span>{item.reason}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-500">Penalty:</span>
                <span className="font-normal">{item.amount}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-black">Action:</span>
                <span>{item.action}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PenaltyRecords;
