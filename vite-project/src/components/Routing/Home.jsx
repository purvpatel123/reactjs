import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      {/* Links with different userId values */}
      <Link to="/users/1">User 1</Link> <br />
      
    </div>
  );
}
