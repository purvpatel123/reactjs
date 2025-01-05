import { Outlet, Link } from "react-router-dom";

const Dashboard = () => (
  <div>
    <h1>Dashboard</h1>
    <nav>
      <ul>
        <li><Link to="profile">Profile</Link></li>
        <li><Link to="settings">Settings</Link></li>
      </ul>
    </nav>
    {/* Nested routes rendered here */}
    <Outlet />
  </div>
);

export default Dashboard;
