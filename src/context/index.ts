// src/context/DashboardContext.tsx
import { createContext, useContext, useEffect, useState } from "react";
import { PrismaClient } from "@prisma/client";

// Prisma Client para la consulta (esto generalmente se hace en el servidor)
const prisma = new PrismaClient();

// Definir interfaces para los datos que vas a consultar
interface EnergiaData {
  registro_id: string;
  bienId: string;
  consumo: number;
  valor: number;
  createdAt: Date;
  updatedAt: Date;
}

interface AguaData {
  registro_id: string;
  bienId: string;
  consumo: number;
  valor: number;
  createdAt: Date;
  updatedAt: Date;
}
interface GasData {
  registro_id: string;
  bienId: string;
  consumo: number;
  valor: number;
  createdAt: Date;
  updatedAt: Date;
}
interface InternetData {
  registro_id: string;
  bienId: string;
  valor: number;
  createdAt: Date;
  updatedAt: Date;
}

interface TelefonoData {
  registro_id: string;
  bienId: string;
  valor: number;
  createdAt: Date;
  updatedAt: Date;
}

interface AdministracionData {
  registro_id: string;
  bienId: string;
  valor: number;
  createdAt: Date;
  updatedAt: Date;
}

interface DashboardContextData {
  aguaData: AguaData[];
  gasData: GasData[]; 
  energiaData: EnergiaData[];
  internetData: InternetData[];
  telefonoData: TelefonoData[];
  administracionData: AdministracionData[];

  fetchData: () => Promise<void>;
}

// Crear el contexto
const DashboardContext = createContext<DashboardContextData | undefined>(
  undefined
);

// Proveedor del contexto
export const DashboardProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [aguaData, setAguaData] = useState<AguaData[]>([]);
  const [gasData, setGasData] = useState<any[]>([]);

  // Función para obtener datos
  const fetchData = async () => {
    try {
      // Fetch desde la API en el servidor (suponiendo un endpoint /api/agua)
      const aguaResponse = await fetch("/api/agua");
      const aguaJson = await aguaResponse.json();
      setAguaData(aguaJson);

      // Similar para gas, energía, etc.
      const gasResponse = await fetch("/api/gas");
      const gasJson = await gasResponse.json();
      setGasData(gasJson);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <DashboardContext.Provider value={{ aguaData, gasData, fetchData }}>
      {children}
    </DashboardContext.Provider>
  );
};

// Hook para consumir el contexto
export const useDashboard = (): DashboardContextData => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error("useDashboard debe usarse dentro de un DashboardProvider");
  }
  return context;
};
