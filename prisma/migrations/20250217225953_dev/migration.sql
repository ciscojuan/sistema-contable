/*
  Warnings:

  - Added the required column `valor` to the `Administracion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `valor` to the `Internet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `valor` to the `Telefono` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Administracion" ADD COLUMN     "valor" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Internet" ADD COLUMN     "valor" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Telefono" ADD COLUMN     "valor" INTEGER NOT NULL;
