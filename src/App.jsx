import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Chat from "./components/Chat";
import Login from "./components/Login";
import { getCurrentUser } from "./api/authService";

function App() {
  const currentUser = getCurrentUser();

  return (
    <Router>
      <Route path="/login" component={Login} />
      <Route
        path="/chat"
        render={() => (currentUser ? <Chat /> : <Redirect to="/login" />)}
      />
    </Router>
  );
}

export default App;
