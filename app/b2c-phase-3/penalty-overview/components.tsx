"use client";

import React from "react";
import PenaltyRecords from "./ui";

const PenaltyTable = () => {
  

  return (
    <div className="overflow-x-auto p-4">
      <div className="rounded-2xl p-2 bg-white">
        <PenaltyRecords/>
      </div>
    </div>
  );
};

export default PenaltyTable;
