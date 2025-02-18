"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

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

export const getWaterRaws = async () => {
  try {
    const raw = await prisma.agua.findMany();
    return raw;
  } catch (error) {
    return {
      error,
    };
  }
};
