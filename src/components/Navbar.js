import { Link } from "react-router-dom";
import "./Navbar.scss";

export default function Navbar() {
   return (
      <nav className="Navbar">
         <Link to="/">Home</Link>
         <Link to="/work">Work</Link>
         <Link to="/contact">Contact</Link>
      </nav>
   );
}
