-- CreateTable
CREATE TABLE "bien" (
    "bien_id" TEXT NOT NULL,
    "nombre_bien" TEXT NOT NULL,

    CONSTRAINT "bien_pkey" PRIMARY KEY ("bien_id")
);

-- CreateTable
CREATE TABLE "Agua" (
    "registro_id" TEXT NOT NULL,
    "bienId" TEXT NOT NULL,
    "consumo" BIGINT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Agua_pkey" PRIMARY KEY ("registro_id")
);

-- CreateTable
CREATE TABLE "Gas" (
    "registro_id" TEXT NOT NULL,
    "bienId" TEXT NOT NULL,
    "consumo" BIGINT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Gas_pkey" PRIMARY KEY ("registro_id")
);

-- CreateTable
CREATE TABLE "Energia" (
    "registro_id" TEXT NOT NULL,
    "bienId" TEXT NOT NULL,
    "consumo" BIGINT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Energia_pkey" PRIMARY KEY ("registro_id")
);

-- CreateTable
CREATE TABLE "Internet" (
    "registro_id" TEXT NOT NULL,
    "bienId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Internet_pkey" PRIMARY KEY ("registro_id")
);

-- CreateTable
CREATE TABLE "Telefono" (
    "registro_id" TEXT NOT NULL,
    "bienId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Telefono_pkey" PRIMARY KEY ("registro_id")
);

-- CreateTable
CREATE TABLE "Administracion" (
    "registro_id" TEXT NOT NULL,
    "bienId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Administracion_pkey" PRIMARY KEY ("registro_id")
);

-- AddForeignKey
ALTER TABLE "Agua" ADD CONSTRAINT "Agua_bienId_fkey" FOREIGN KEY ("bienId") REFERENCES "bien"("bien_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Gas" ADD CONSTRAINT "Gas_bienId_fkey" FOREIGN KEY ("bienId") REFERENCES "bien"("bien_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Energia" ADD CONSTRAINT "Energia_bienId_fkey" FOREIGN KEY ("bienId") REFERENCES "bien"("bien_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Internet" ADD CONSTRAINT "Internet_bienId_fkey" FOREIGN KEY ("bienId") REFERENCES "bien"("bien_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Telefono" ADD CONSTRAINT "Telefono_bienId_fkey" FOREIGN KEY ("bienId") REFERENCES "bien"("bien_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Administracion" ADD CONSTRAINT "Administracion_bienId_fkey" FOREIGN KEY ("bienId") REFERENCES "bien"("bien_id") ON DELETE RESTRICT ON UPDATE CASCADE;
