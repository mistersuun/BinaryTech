import React from "react";
import ModalVideo from "react-modal-video";

const VideoPopup = ({
  isVideoOpen,
  setIsVideoOpen,
  videoId = "3exrJ9_Ze_o",
}) => {
  return (
    <ModalVideo
      channel="youtube"
      autoplay
      isOpen={isVideoOpen}
      videoId={videoId}
      onClose={() => setIsVideoOpen(false)}
    />
  );
};

export default VideoPopup;
