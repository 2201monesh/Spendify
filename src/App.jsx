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
      <Header />
      <div className="w-screen flex justify-center">
        <div
          className="w-[75%] h-screen border-l border-r border-dashed"
          style={{ height: "calc(100vh - 60px)" }}
        >
          <Router>
            <Routes>
              <Route path="/" element={isSignedIn ? <Dashboard /> : <Home />} />
              <Route
                path="/dashboard"
                element={isSignedIn ? <Dashboard /> : <Navigate to="/" />}
              />
            </Routes>
          </Router>
        </div>
      </div>
    </>
  );
}

export default App;
