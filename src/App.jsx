import { Route, Routes, Navigate } from "react-router-dom";
import Chat from "./components/Chat";
import Login from "./components/Login";
import { getCurrentUser } from "./api/authService";
import io from "socket.io-client";

const socket = io("https://bsp-mini-chat-backend.onrender.com", {
  transports: ["websocket"],
  withCredentials: true,
});

function App() {
  const currentUser = getCurrentUser();

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/chat"
        element={
          currentUser ? <Chat socket={socket} /> : <Navigate to="/login" />
        }
      />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
