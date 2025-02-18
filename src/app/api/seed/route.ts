import prisma from "@/lib/prisma";

import { NextResponse, NextRequest } from "next/server";

export async function POST(request: Request) {
  try {
    await prisma.administracion.deleteMany();
    await prisma.agua.deleteMany();
    await prisma.gas.deleteMany();
    await prisma.energia.deleteMany();
    await prisma.telefono.deleteMany();
    await prisma.internet.deleteMany();

    await prisma.bien.deleteMany();

    const createdBienes = await prisma.bien.createMany({
      data: [{ nombre_bien: "Acapulco" }, { nombre_bien: "Sol naciente" }],
    });

    // Fetch 'Acapulco' bien
    const aAcapulcoId = await prisma.bien.findFirst({
      where: { nombre_bien: "Acapulco" },
    });

    const sNacienteId = await prisma.bien.findFirst({
      where: { nombre_bien: "Sol naciente" },
    });

    if (!aAcapulcoId) {
      throw new Error("No se encontró un bien con el nombre Acapulco");
    }
    if (!sNacienteId) {
      throw new Error("No se encontró un bien con el nombre Sol Naciente");
    }

    const aguaObjects = await prisma.agua.createMany({
      data: [
        { bienId: aAcapulcoId.bien_id, consumo: 15, valor: 150000 },
        { bienId: aAcapulcoId.bien_id, consumo: 20, valor: 200000 },
        { bienId: aAcapulcoId.bien_id, consumo: 25, valor: 250000 },
        { bienId: sNacienteId.bien_id, consumo: 30, valor: 300000 },
        { bienId: sNacienteId.bien_id, consumo: 35, valor: 350000 },
        { bienId: sNacienteId.bien_id, consumo: 1, valor: 150000 },
      ],
    });

    const energiaObjects = await prisma.energia.createMany({
      data: [
        { bienId: aAcapulcoId.bien_id, consumo: 15, valor: 150000 },
        { bienId: aAcapulcoId.bien_id, consumo: 20, valor: 200000 },
        { bienId: aAcapulcoId.bien_id, consumo: 25, valor: 250000 },
        { bienId: sNacienteId.bien_id, consumo: 30, valor: 300000 },
        { bienId: sNacienteId.bien_id, consumo: 35, valor: 350000 },
        { bienId: sNacienteId.bien_id, consumo: 1, valor: 150000 },
      ],
    });

    const gasObjects = await prisma.gas.createMany({
      data: [
        { bienId: aAcapulcoId.bien_id, consumo: 15, valor: 150000 },
        { bienId: aAcapulcoId.bien_id, consumo: 20, valor: 200000 },
        { bienId: aAcapulcoId.bien_id, consumo: 25, valor: 250000 },
        { bienId: sNacienteId.bien_id, consumo: 30, valor: 300000 },
        { bienId: sNacienteId.bien_id, consumo: 35, valor: 350000 },
        { bienId: sNacienteId.bien_id, consumo: 1, valor: 150000 },
      ],
    });

    const internetObjects = await prisma.internet.createMany({
      data: [
        { bienId: aAcapulcoId.bien_id, valor: 150000 },
        { bienId: aAcapulcoId.bien_id, valor: 200000 },
        { bienId: aAcapulcoId.bien_id, valor: 250000 },
        { bienId: sNacienteId.bien_id, valor: 300000 },
        { bienId: sNacienteId.bien_id, valor: 350000 },
        { bienId: sNacienteId.bien_id, valor: 150000 },
      ],
    });

    const telefonoObjects = await prisma.telefono.createMany({
      data: [
        { bienId: aAcapulcoId.bien_id, valor: 150000 },
        { bienId: aAcapulcoId.bien_id, valor: 200000 },
        { bienId: aAcapulcoId.bien_id, valor: 250000 },
        { bienId: sNacienteId.bien_id, valor: 300000 },
        { bienId: sNacienteId.bien_id, valor: 350000 },
        { bienId: sNacienteId.bien_id, valor: 150000 },
      ],
    });

    const administracionObjects = await prisma.administracion.createMany({
      data: [
        { bienId: aAcapulcoId.bien_id, valor: 150000 },
        { bienId: aAcapulcoId.bien_id, valor: 200000 },
        { bienId: aAcapulcoId.bien_id, valor: 250000 },
        { bienId: sNacienteId.bien_id, valor: 300000 },
        { bienId: sNacienteId.bien_id, valor: 350000 },
        { bienId: sNacienteId.bien_id, valor: 150000 },
      ],
    });

    //  Correctly format the response
    return NextResponse.json({
      message: "Seed applied Successfully.",
      createdBienes,
      aguaObjects, // Send the actual result object
    });
  } catch (error) {
    return NextResponse.json({ message: "Error while applying seed.", error });
  }
}

export async function GET(request: Request) {
  const bienes = await prisma.bien.findMany();
  const agua = await prisma.agua.findMany();
  const energia = await prisma.energia.findMany();
  return NextResponse.json({ bienes, agua, energia });
}
