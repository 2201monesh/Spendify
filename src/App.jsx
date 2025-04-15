import "./App.css";
import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import { useUser } from "@clerk/clerk-react";
import Dashboard from "./pages/Dashboard";

function App() {
  const { isSignedIn } = useUser();

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={isSignedIn ? <Dashboard /> : <Home />} />
          <Route
            path="/dashboard"
            element={isSignedIn ? <Dashboard /> : <Navigate to="/" />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
