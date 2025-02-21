import React, { useState } from "react";
import { bienContext } from "./Context";
import { RecordType } from "./Context";

export const BienContext = ({ children }: { children: React.ReactNode }) => {
  const [tipoBien, setTipoBien] = useState(""); // Correcto uso de useState
  const [idBien, setIdBien] = useState("");
  const [records, setRecords] = useState<RecordType[]>([]);

  return (
    <bienContext.Provider
      value={{ tipoBien, setTipoBien, idBien, setIdBien, records, setRecords }}
    >
      {children}
    </bienContext.Provider>
  );
};
