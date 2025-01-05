import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Settings from "./Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Define the layout route */}
        <Route path="/" element={<Layout />}>
          {/* Define child routes */}
          <Route index element={<Home />} />  {/* Default child */}
          <Route path="dashboard" element={<Dashboard />}>
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
