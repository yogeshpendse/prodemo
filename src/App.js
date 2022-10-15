import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Protected } from "./routes/Protected";
import { Protpage } from "./pages/Protpage";
import { Dashboard } from "./pages/Dashboard";
import { Databoard } from "./pages/Databoard";
import { Report } from "./pages/Report";
import { Hompage } from "./pages/Hompage";
import { Signin } from "./pages/Signin";
import { Signup } from "./pages/Signup";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Protected>
              <Hompage />
            </Protected>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Signin />} />
        <Route
          path="/report"
          element={
            <Protected>
              <Report />
            </Protected>
          }
        />
        <Route
          path="/report/:name"
          element={
            <Protected>
              <Report />
            </Protected>
          }
        />
        <Route
          path="/visualize"
          element={
            <Protected>
              <Dashboard />
            </Protected>
          }
        />
        <Route
          path="/visualization/:name"
          element={
            <Protected>
              <Dashboard />
            </Protected>
          }
        />
        <Route
          path="/databoard"
          element={
            <Protected>
              <Databoard />
            </Protected>
          }
        />
        <Route
          path="/datainboard/:name"
          element={
            <Protected>
              <Databoard />
            </Protected>
          }
        />
        <Route
          path="/prot"
          element={
            <Protected>
              <Protpage />
            </Protected>
          }
        />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
