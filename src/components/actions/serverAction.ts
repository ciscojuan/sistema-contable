"use server";

import prisma from "@/lib/prisma";

export const getBienId = async (bien_id: string) => {
  const id = await prisma.bien.findFirst({
    where: {
      nombre_bien: bien_id,
    },
  });

  return id;
};

export const getRecords = async (id: string) => {
  console.log("Fetching records for ID:", id); // Log para depuración
  const records = await prisma.energia.findMany({
    where: {
      bienId: id,
    },
  });

  return records;
};
