import { PrismaClient } from '../src/generated/prisma';
const prisma = new PrismaClient();

async function main() {
  // Optional: clear old data (handle FK dependencies carefully)
  await prisma.incident.deleteMany();
  await prisma.incidentType.deleteMany();
  await prisma.camera.deleteMany();

  // Seed cameras
  await prisma.camera.createMany({
    data: [
      { id: 1, name: "Shop Floor Camera A", location: "Ground Level" },
      { id: 2, name: "Shop Floor Camera A", location: "Back Room" },
      { id: 3, name: "Shop Floor Camera A", location: "Main Door" },
    ],
  });

  // Seed incident types
  await prisma.incidentType.createMany({
    data: [
      { id: 1, type: "Unauthorized Access", icon: "/images/bxs_door-open.png" },
      { id: 2, type: "Gun Threat", icon: "/images/Vector (1).png" },
      { id: 3, type: "Face Recognised", icon: "/images/bxs_door-open.png" },
    ],
  });

  // Seed incidents
  await prisma.incident.createMany({
    data: [
      {
        id: 101,
        cameraId: 1,
        typeId: 1,
        tsStart: new Date("2025-07-07T01:12:00"),
        tsEnd: new Date("2025-07-07T01:15:00"),
        thumbnailUrl: "/images/img6.png",
        resolved: false,
      },
      {
        id: 102,
        cameraId: 2,
        typeId: 2,
        tsStart: new Date("2025-07-07T03:05:00"),
        tsEnd: new Date("2025-07-07T03:07:00"),
        thumbnailUrl: "/images/img2.png",
        resolved: false,
      },
      {
        id: 103,
        cameraId: 3,
        typeId: 3,
        tsStart: new Date("2025-07-07T08:22:00"),
        tsEnd: new Date("2025-07-07T08:24:00"),
        thumbnailUrl: "/images/img3.jpg",
        resolved: true,
      },
      {
        id: 104,
        cameraId: 1,
        typeId: 1,
        tsStart: new Date("2025-07-07T09:30:00"),
        tsEnd: new Date("2025-07-07T09:32:00"),
        thumbnailUrl: "/images/img5.jpg",
        resolved: false,
      },
      {
        id: 105,
        cameraId: 2,
        typeId: 1,
        tsStart: new Date("2025-07-07T09:30:00"),
        tsEnd: new Date("2025-07-07T09:32:00"),
        thumbnailUrl: "/images/img5.jpg",
        resolved: false,
      },
      {
        id: 106,
        cameraId: 3,
        typeId: 1,
        tsStart: new Date("2025-07-07T09:30:00"),
        tsEnd: new Date("2025-07-07T09:32:00"),
        thumbnailUrl: "/images/img5.jpg",
        resolved: false,
      },
    ],
  });

  console.log("🌱 Seeded your database with cameras, incident types, and incidents!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
