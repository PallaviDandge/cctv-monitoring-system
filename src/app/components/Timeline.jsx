import React from "react";

function Timeline() {
  return (
    <div className="timeline">
      <span className="timeline-event">Unauthorized Access</span>
      <span className="timeline-event" style={{ background: "#ffa500" }}>Face Recognized</span>
      <span className="timeline-event" style={{ background: "#00bfff" }}>Gun Threat</span>
    </div>
  );
}

export default Timeline;
