import prisma from "@/lib/prisma";
import { funciones } from "..";

export const getAcapulcoRecords = async () => {
  const acapulcoId = await prisma.bien.findFirst({
    where: { nombre_bien: "Acapulco" },
  });

  if (!acapulcoId) {
    throw new Error("Bien not found");
  }

  const records = await prisma.administracion.findMany({
    where: {
      bienId: acapulcoId.bien_id,
    },
  });

  return records;
};

export const getAcapulcoTotal = async () => {
  const records = await getAcapulcoRecords();

  const total = records.reduce((acc, record) => acc + record.valor, 0);
  const vTotal = funciones.valorTotal(total);
  return vTotal;
};
