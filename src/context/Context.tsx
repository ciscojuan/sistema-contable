import { createContext, Dispatch, SetStateAction } from "react";

// Define el tipo de registro del record a guardar
export interface RecordType {
  registro_id: string;
  bienId: string;
  consumo: number;
  valor: number;
  createdAt: Date;
  updatedAt: Date;
}

// Define el tipo del contexto
interface BienContextType {
  tipoBien: string;
  records: RecordType[];
  idBien: string;
  setIdBien: Dispatch<SetStateAction<string>>;
  setTipoBien: Dispatch<SetStateAction<string>>;
  setRecords: Dispatch<SetStateAction<RecordType[]>>;
}

// Crea el contexto con un valor por defecto
export const bienContext = createContext<BienContextType>({
  tipoBien: "Acapulco",
  idBien: "",
  records: [],
  setTipoBien: () => {},
  setIdBien: () => {},
  setRecords: () => {},
});
