import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
        </ul>
      </nav>
      <main>
        {/* Outlet will render nested child routes */}
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
