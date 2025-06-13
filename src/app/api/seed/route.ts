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
        { bienId: aAcapulcoId.bien_id, consumo: 6, valor: 127370 },

        { bienId: sNacienteId.bien_id, consumo: 3, valor: 100270 },
      ],
    });

    const energiaObjects = await prisma.energia.createMany({
      data: [
        { bienId: aAcapulcoId.bien_id, consumo: 91, valor: 67860 },
        { bienId: aAcapulcoId.bien_id, consumo: 12, valor: 90000 },
        { bienId: sNacienteId.bien_id, consumo: 12, valor: 10530 },
        { bienId: sNacienteId.bien_id, consumo: 8, valor: 5120 },
      ],
    });

    const gasObjects = await prisma.gas.createMany({
      data: [
        { bienId: aAcapulcoId.bien_id, consumo: 5, valor: 29210 },
        { bienId: aAcapulcoId.bien_id, consumo: 7, valor: 41080 },
        { bienId: sNacienteId.bien_id, consumo: 2, valor: 6660 },
        { bienId: sNacienteId.bien_id, consumo: 1, valor: 5420 },
      ],
    });

    const internetObjects = await prisma.internet.createMany({
      data: [
        { bienId: aAcapulcoId.bien_id, valor: 88220 },
        { bienId: aAcapulcoId.bien_id, valor: 88970 },

        { bienId: sNacienteId.bien_id, valor: 100315 },
        { bienId: sNacienteId.bien_id, valor: 95975 },
      ],
    });

    const telefonoObjects = await prisma.telefono.createMany({
      data: [
        { bienId: aAcapulcoId.bien_id, valor: 91490 },
        { bienId: aAcapulcoId.bien_id, valor: 101064 },
        { bienId: aAcapulcoId.bien_id, valor: 42900 },
      ],
    });

    const administracionObjects = await prisma.administracion.createMany({
      data: [
        { bienId: aAcapulcoId.bien_id, valor: 353000 },
        { bienId: aAcapulcoId.bien_id, valor: 353000 },
        { bienId: sNacienteId.bien_id, valor: 271500 },
        { bienId: sNacienteId.bien_id, valor: 271500 },
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
  const gas = await prisma.gas.findMany();
  const internet = await prisma.internet.findMany();
  const telefono = await prisma.telefono.findMany();
  const administracion = await prisma.administracion.findMany();
  return NextResponse.json({
    bienes,
    agua,
    energia,
    gas,
    internet,
    telefono,
    administracion,
  });
}
