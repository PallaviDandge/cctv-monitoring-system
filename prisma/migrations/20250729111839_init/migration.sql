-- CreateTable
CREATE TABLE "Camera" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,

    CONSTRAINT "Camera_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IncidentType" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "icon" TEXT NOT NULL,

    CONSTRAINT "IncidentType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Incident" (
    "id" SERIAL NOT NULL,
    "cameraId" INTEGER NOT NULL,
    "typeId" INTEGER NOT NULL,
    "tsStart" TIMESTAMP(3) NOT NULL,
    "tsEnd" TIMESTAMP(3) NOT NULL,
    "thumbnailUrl" TEXT NOT NULL,
    "resolved" BOOLEAN NOT NULL,

    CONSTRAINT "Incident_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Incident" ADD CONSTRAINT "Incident_cameraId_fkey" FOREIGN KEY ("cameraId") REFERENCES "Camera"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Incident" ADD CONSTRAINT "Incident_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "IncidentType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
