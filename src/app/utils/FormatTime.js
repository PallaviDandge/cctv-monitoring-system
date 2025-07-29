
'use client';
const formatIncidentTime = (start, end) =>{
  const options = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  };

  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  const startDate = new Date(start);
  const endDate = new Date(end);

  const timeRange = `${startDate.toLocaleTimeString([], options)} - ${endDate.toLocaleTimeString([], options)}`;
  const formattedDate = `${startDate.getDate()}-${months[startDate.getMonth()]}-${startDate.getFullYear()}`;

  return `${timeRange} on ${formattedDate}`;
}

export default formatIncidentTime;