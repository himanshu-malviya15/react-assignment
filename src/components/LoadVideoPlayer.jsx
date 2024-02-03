import React, { useEffect, useState } from "react";

const VideoPlayer = ({ videoData }) => {
  const [promotionTimeouts, setPromotionTimeouts] = useState([]);

  useEffect(() => {
    // Initialize video player
    const player = document.getElementById("videoPlayer");
    player.controls = true;

    // Add sources to the player
    videoData.sources.forEach((source) => {
      const sourceElement = document.createElement("source");
      sourceElement.src = source.src;
      sourceElement.type = source.type;
      player.appendChild(sourceElement);
    });

    // Display metadata
    const titleElement = document.getElementById("videoTitle");
    titleElement.innerText = videoData.title;

    const descriptionElement = document.getElementById("videoDescription");
    descriptionElement.innerText = videoData.description;

    // Schedule promotional popups based on time objects
    const timeouts = videoData.promotions.map((promotion) =>
      setTimeout(() => showPromotionPopup(promotion), promotion.time)
    );
    setPromotionTimeouts(timeouts);

    // Play video
    player.play();

    return () => {
      // Cleanup logic, e.g., clear timeouts
      promotionTimeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, [videoData, promotionTimeouts]);

  const showPromotionPopup = (promotion) => {
    // Display promotion popup logic
    alert(`Promotion: ${promotion.message}`);
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div
        style={{ marginBottom: "10px", fontSize: "20px", fontWeight: "bold" }}
        id="videoTitle"
      ></div>
      <div style={{ marginBottom: "10px" }} id="videoDescription"></div>
      <video
        style={{ marginBottom: "10px" }}
        id="videoPlayer"
        width="640"
        height="360"
      ></video>
    </div>
  );
};

export default VideoPlayer;
