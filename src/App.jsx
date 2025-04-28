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
import Main from "./components/Main";
import Analytics from "./pages/Analytics";

function App() {
  const { isSignedIn } = useUser();
  if (isSignedIn === undefined) return null;

  return (
    <>
      {/* <Router>
        <Routes>
          <Route path="/" element={isSignedIn ? <Dashboard /> : <Home />} />
          <Route
            path="/dashboard"
            element={isSignedIn ? <Dashboard /> : <Navigate to="/" />}
          />
        </Routes>
      </Router> */}
      <Router>
        <Routes>
          <Route
            path="/"
            element={isSignedIn ? <Navigate to="/dashboard" /> : <Home />}
          />

          {isSignedIn && (
            <Route path="/dashboard" element={<Dashboard />}>
              <Route index element={<Main />} /> {/* dashboard main page */}
              <Route path="analytics" element={<Analytics />} />{" "}
              {/* dashboard/analytics page */}
            </Route>
          )}

          {!isSignedIn && (
            <Route path="/dashboard/*" element={<Navigate to="/" />} />
          )}
        </Routes>
      </Router>
    </>
  );
}

export default App;
