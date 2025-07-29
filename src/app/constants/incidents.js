export const CAMERAS = [
  { id: 1, name: "Shop Floor Camera A", location: "Ground Level" },
  { id: 2, name: "Shop Floor Camera A", location: "Back Room" },
  { id: 3, name: "Shop Floor Camera A", location: "Main Door" }
];

export const INCIDENT_TYPES = [
  { type: "Unauthorized Access", icon: "/images/bxs_door-open.png" },
  { type: "Gun Threat", icon: "/images/Vector (1).png" },
  { type: "Face Recognised", icon: "/images/bxs_door-open.png" }
];

export const SEEDED_INCIDENTS = [
  {
    id: 101,
    cameraId: 1,
    camera:"Shop Floor Camera A",
    cameraImg: "/images/camera.png",
    type: INCIDENT_TYPES[0].type,
    icon: INCIDENT_TYPES[0].icon,
    tsStart: "2025-07-07T01:12:00",
    tsEnd: "2025-07-07T01:15:00",
    thumbnailUrl: "/images/img6.png",
    resolved: false
  },
  {
    id: 102,
    cameraId: 2,
    camera:"Shop Floor Camera A",
    cameraImg: "/images/camera.png",
    type: INCIDENT_TYPES[1].type,
    icon: INCIDENT_TYPES[1].icon,
    tsStart: "2025-07-07T03:05:00",
    tsEnd: "2025-07-07T03:07:00",
    thumbnailUrl: "/images/img2.png",
    resolved: false
  },
  {
    id: 103,
    cameraId: 3,
    camera:"Shop Floor Camera A",
    cameraImg: "/images/camera.png",
    type: INCIDENT_TYPES[2].type,
    icon: INCIDENT_TYPES[2].icon,
    tsStart: "2025-07-07T08:22:00",
    tsEnd: "2025-07-07T08:24:00",
    thumbnailUrl: "/images/img3.jpg",
    resolved: true
  },
  {
    id: 104,
    cameraId: 4,
    camera:"Shop Floor Camera A",
    cameraImg: "/images/camera.png",
    type: INCIDENT_TYPES[0].type,
    icon: INCIDENT_TYPES[0].icon,
    tsStart: "2025-07-07T09:30:00",
    tsEnd: "2025-07-07T09:32:00",
    thumbnailUrl: "/images/img5.jpg",
    resolved: false
  },
  {
    id: 105,
    cameraId: 5,
    camera:"Shop Floor Camera A",
    cameraImg: "/images/camera.png",
    type: INCIDENT_TYPES[0].type,
    icon: INCIDENT_TYPES[0].icon,
    tsStart: "2025-07-07T09:30:00",
    tsEnd: "2025-07-07T09:32:00",
    thumbnailUrl: "/images/img5.jpg",
    resolved: false
  },
  {
    id: 106,
    cameraId: 6,
    camera:"Shop Floor Camera A",
    cameraImg: "/images/camera.png",
    type: INCIDENT_TYPES[0].type,
    icon: INCIDENT_TYPES[0].icon,
    tsStart: "2025-07-07T09:30:00",
    tsEnd: "2025-07-07T09:32:00",
    thumbnailUrl: "/images/img5.jpg",
    resolved: false
  }
];
