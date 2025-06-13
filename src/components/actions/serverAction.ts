"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

interface Props {
  month: string;
  valor: number;
  consumo: number;
  bienId: string;
}

export const getBienId = async (bien_id: string) => {
  const id = await prisma.bien.findFirst({
    where: {
      nombre_bien: bien_id,
    },
  });

  return id;
};

export const getBienes = async () => {
  const bienes = await prisma.bien.findMany();
  return bienes;
};

export const getRecords = async (
  id: string | null,
  pathName: string,
  page: number = 1,
  limit: number = 12
) => {
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
      orderBy: { createdAt: "asc" },
      skip: (page - 1) * limit,
      take: limit,
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
    water: prisma.agua,
    energia: prisma.energia,
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
    // Consultas a todas las tablas en paralelo para optimizar tiempos y guardar el resultado en una variable
    const modelos = await Promise.all([
      prisma.agua.findMany({ where: { bienId } }),
      prisma.energia.findMany({ where: { bienId } }),
      prisma.gas.findMany({ where: { bienId } }),
      prisma.internet.findMany({ where: { bienId } }),
      prisma.telefono.findMany({ where: { bienId } }),
      prisma.administracion.findMany({ where: { bienId } }),
    ]);
    // desestructurar cada entidad de records
    const [agua, energia, gas, internet, telefono, administracion] = modelos;

    // Función para sumar los valores
    const sumValues = (records: { valor: number }[]) =>
      records.reduce((acc, record) => acc + record.valor, 0);

    // Función para sumar los consumos
    const sumConsumes = (records: { consumo?: number }[]) =>
      records.reduce((acc, record) => acc + (record.consumo || 0), 0);

    // Calcular totales
    const vtotals = {
      agua: sumValues(agua),
      energia: sumValues(energia),
      gas: sumValues(gas),
      internet: sumValues(internet),
      telefono: sumValues(telefono),
      administracion: sumValues(administracion),
    };

    // Calcular totales de consumos
    const consumos = {
      agua: sumConsumes(agua),
      energia: sumConsumes(energia),
      gas: sumConsumes(gas),
    };

    return { vtotals, consumos };
  } catch (error) {
    console.error("❌ Error al calcular los valores totales:", error);
    return null;
  }
};
