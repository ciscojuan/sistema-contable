"use server";

import prisma from "@/lib/prisma";

/* export const addRaw = async (monto, valor) =>{
    try{
        const raw = prisma.agua.create({
        data: {
            consumo: monto,
            valor: valor
        }
    })

    return raw
    }catch(error){
        return {
            error
        }
    }
} */

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
