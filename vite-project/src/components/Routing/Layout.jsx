import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <h1>My Website</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <hr />
      <h1>
      {/* This is where child pages will appear */}
      <Outlet />
      </h1>
    </div>
  );
}
