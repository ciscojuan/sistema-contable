/*
  Warnings:

  - Added the required column `valor` to the `Agua` table without a default value. This is not possible if the table is not empty.
  - Added the required column `valor` to the `Energia` table without a default value. This is not possible if the table is not empty.
  - Added the required column `valor` to the `Gas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Agua" ADD COLUMN     "valor" BIGINT NOT NULL;

-- AlterTable
ALTER TABLE "Energia" ADD COLUMN     "valor" BIGINT NOT NULL;

-- AlterTable
ALTER TABLE "Gas" ADD COLUMN     "valor" BIGINT NOT NULL;
