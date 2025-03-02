import React from "react";

const SketchfabEmbed = ({ modelId }) => {
  return (
    <div style={{ width: "100%", height: "500px", position: "relative" }}>
      <iframe
        title="3D Model"
        width="100%"
        height="100%"
        allowFullScreen
        frameBorder="0"
        src={`https://sketchfab.com/models/${modelId}/embed`}
        style={{ border: "none" }}

      
    </div>
  );
};

export default SketchfabEmbed;

