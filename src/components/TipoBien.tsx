"use client";
import React, { useState } from "react";

export const TipoBien = () => {
  const [acapulco, setAcapulco] = useState(true);
  const [mosquera, setMosquera] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;

    if (value === "Acapulco") {
      setAcapulco(true);
      setMosquera(false);
    } else if (value === "Mosquera") {
      setAcapulco(false);
      setMosquera(true);
    }
  };

  console.log(acapulco, mosquera)
  return (
    <div className="w-full max-w-sm min-w-[200px]">
      <div className="relative">
        <select
          className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-md border border-slate-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer"
          onChange={handleChange}
        >
          <option value="Mosquera">Mosquera</option>
          <option value="Acapulco">Acapulco</option>
        </select>
      </div>
    </div>
  );
};
