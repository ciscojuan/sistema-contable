"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const getBienId = async (bien_id: string) => {
  const id = await prisma.bien.findFirst({
    where: {
      nombre_bien: bien_id,
    },
  });

  return id;
};

export const getRecords = async (id: string | null, pathName: string) => {
  if (!id) {
    console.error("El ID es inválido:", id);
    return null;
  }

  const path = pathName?.split("/")[2];
  if (!path) {
    console.error("No se pudo extraer el path del pathname:", pathName);
    return null;
  }

  console.log(`Buscando registros para ID: ${id}, Path: ${path}`);

  const mapping: Record<string, any> = {
    water: prisma.agua,
    energia: prisma.energia,
    gas: prisma.gas,
    internet: prisma.internet,
    mobil: prisma.telefono,
    maintenance: prisma.administracion,
  };

  const model = mapping[path];

  if (!model) {
    console.error(`Modelo no encontrado para la ruta: ${path}`);
    return null;
  }

  try {
    const records = await model.findMany({
      where: { bienId: id },
      orderBy: { createdAt: "desc" },
    });

    return records ?? [];
  } catch (error) {
    console.error("Error al leer los registros:", error);
    return null;
  }
};

export const addRecord = async (
  valor: number,
  consumo: number,
  id: string,
  pathname: string
) => {
  const path = pathname.split("/")[2];

  const mapping: Record<string, any> = {
    water: prisma.energia,
    energia: prisma.agua,
    gas: prisma.gas,
    internet: prisma.internet,
    mobil: prisma.telefono,
    maintenance: prisma.administracion,
  };

  const model = mapping[path];
  if (!model)
    return console.error(`Modelo no encontrado para la ruta: ${path}`);

  try {
    const data: any = { bienId: id, valor };
    if (["water", "energia", "gas"].includes(path)) data.consumo = consumo;

    const newRecord = await model.create({ data });
    revalidatePath("/dashboard/");
    return newRecord;
  } catch (error) {
    console.error("Error al crear el registro:", error);
  }
};

export const getTotalValues = async (bienId: string) => {
  if (!bienId) {
    console.error("🔴 Error: El ID del bien es inválido.");
    return null;
  }

  try {
    // Consultas a todas las tablas en paralelo para optimizar tiempos
    const [agua, energia, gas, internet, telefono, administracion] =
      await Promise.all([
        prisma.agua.findMany({ where: { bienId } }),
        prisma.energia.findMany({ where: { bienId } }),
        prisma.gas.findMany({ where: { bienId } }),
        prisma.internet.findMany({ where: { bienId } }),
        prisma.telefono.findMany({ where: { bienId } }),
        prisma.administracion.findMany({ where: { bienId } }),
      ]);

    // Función para sumar los valores
    const sumValues = (records: { valor: number }[]) =>
      records.reduce((acc, record) => acc + record.valor, 0);

    // Calcular totales
    const totals = {
      agua: sumValues(agua),
      energia: sumValues(energia),
      gas: sumValues(gas),
      internet: sumValues(internet),
      telefono: sumValues(telefono),
      administracion: sumValues(administracion),
    };

    return totals;
  } catch (error) {
    console.error("❌ Error al calcular los valores totales:", error);
    return null;
  }
};