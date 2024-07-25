import { useEffect, useState } from "react";
import { getCurrentUser } from "../api/authService";
import {
  connect,
  disconnect,
  onMessageReceived,
  sendMessage,
} from "../api/socketService";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    connect();
    onMessageReceived((message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      disconnect();
    };
  }, []);

  const handleSendMessage = () => {
    sendMessage({ text: newMessage, user: getCurrentUser().username });
    setNewMessage("");
  };

  return (
    <div>
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index}>
            {msg.user}: {msg.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default Chat;
