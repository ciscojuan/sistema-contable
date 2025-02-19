"use server";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { funciones } from "..";

export const addRaw = async (consumo: number, valor: number) => {
  try {
    const acapulco = await prisma.bien.findFirst({
      where: {
        nombre_bien: "Acapulco",
      },
    });

    if (!acapulco) {
      throw new Error("Bien no encontrado");
    }

    const raw = prisma.agua.create({
      data: {
        bienId: acapulco.bien_id,
        consumo: consumo,
        valor: valor,
      },
    });
    revalidatePath("/dashboard/energia");
    return raw;
  } catch (error) {
    return {
      error,
    };
  }
};

/* ACAPULCO */
export const getAcapulcoRecords = async () => {
  const acapulcoId = await prisma.bien.findFirst({
    where: { nombre_bien: "Acapulco" },
  });

  if (!acapulcoId) {
    throw new Error("Bien not found");
  }

  const records = await prisma.agua.findMany({
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

export const getAcapulcoConsumoTotal = async () => {
  const records = await getAcapulcoRecords();

  const total = records.reduce((acc, record) => acc + record.consumo, 0);

  return total;
};

/* SOL NACIENTE */
export const getMosqueraRecords = async () => {
  const acapulcoId = await prisma.bien.findFirst({
    where: { nombre_bien: "Sol naciente" },
  });

  if (!acapulcoId) {
    throw new Error("Bien not found");
  }

  const records = await prisma.agua.findMany({
    where: {
      bienId: acapulcoId.bien_id,
    },
  });

  return records;
};

export const getMosqueraTotal = async () => {
  const records = await getMosqueraRecords();

  const total = records.reduce((acc, record) => acc + record.valor, 0);
  const vTotal = funciones.valorTotal(total);
  return vTotal;
};
