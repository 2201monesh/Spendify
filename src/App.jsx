import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Header />
      <div className="w-screen flex justify-center">
        <div
          className="w-[75%] h-screen border-l border-r border-dashed p-4"
          style={{ height: "calc(100vh - 60px)" }}
        >
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Router>
        </div>
      </div>
    </>
  );
}

export default App;
