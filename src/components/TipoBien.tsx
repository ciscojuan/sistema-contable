"use client";

import { useContext, useEffect, useState } from "react";
import { bienContext } from "@/context/Context";
import { serverActions } from ".";

export const TipoBien = () => {
  const [nombreBien, setNombreBien] = useState("");
  const { idBien, setIdBien } = useContext(bienContext);

  useEffect(() => {
    const getIdBien = async () => {
      const id = await serverActions.getBienId(nombreBien).then((id) => {
        setIdBien(id?.bien_id || "");
      });
      return id;
    };
    getIdBien();
  }, [nombreBien]);


  return (
    <div className="w-full max-w-sm min-w-[200px]">
      <div className="relative">
        <select
          className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-md border border-slate-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer"
          value={nombreBien}
          onChange={({ target }) => setNombreBien(target.value)}
        >
          <option value="Sol naciente">Sol Naciente</option>
          <option value="Acapulco">Acapulco</option>
        </select>
      </div>
    </div>
  );
};
