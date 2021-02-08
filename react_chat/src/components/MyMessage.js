import React from "react";

function MyMessage({ message }) {
  if (message?.attachments?.lenth > 0) {
    return (
      <img
        src={message.attachments[0].file}  // 이미지 파일
        alt="message-attachment"
        className="message-image"
        style={{ float: "right" }}
      />
    );
  }
  return (
    <div
      className="message"
      style={{
        float: "right",
        marginRight: "18px",
        color: "white",
        backgroundColor: "#3B2A50",
      }}
    >
      {message.text}
    </div>
  );
}

export default MyMessage;
