/*
  Warnings:

  - You are about to alter the column `consumo` on the `Agua` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `valor` on the `Agua` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `consumo` on the `Energia` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `valor` on the `Energia` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `consumo` on the `Gas` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `valor` on the `Gas` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Agua" ALTER COLUMN "consumo" SET DATA TYPE INTEGER,
ALTER COLUMN "valor" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "Energia" ALTER COLUMN "consumo" SET DATA TYPE INTEGER,
ALTER COLUMN "valor" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "Gas" ALTER COLUMN "consumo" SET DATA TYPE INTEGER,
ALTER COLUMN "valor" SET DATA TYPE INTEGER;
