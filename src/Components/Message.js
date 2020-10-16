import React from "react";
import "./CSS/Message.css";
import { Avatar } from "@material-ui/core";

function Message() {
  return (
    <div className="message">
      <Avatar />
      <div className="message__info">
        <h4>
          @happyowl<span className="message__timestamp">Timestamp...</span>
        </h4>
        <p>This is a message.</p>
      </div>
    </div>
  );
}

export default Message;
