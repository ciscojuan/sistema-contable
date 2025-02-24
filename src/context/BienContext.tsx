import React, { useState } from "react";
import { bienContext } from "./Context";
import { RecordType } from "./Context";

export const BienContext = ({ children }: { children: React.ReactNode }) => {
  const [tipoBien, setTipoBien] = useState("Acapulco"); // Correcto uso de useState
  const [idBien, setIdBien] = useState("cb208634-6223-4294-92f2-0a13c880db3a");
  const [records, setRecords] = useState<RecordType[]>([]);

  return (
    <bienContext.Provider
      value={{ tipoBien, setTipoBien, idBien, setIdBien, records, setRecords }}
    >
      {children}
    </bienContext.Provider>
  );
};
