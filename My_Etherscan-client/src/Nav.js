import { Link } from "react-router-dom";
import './Nav.css';

function Nav() {
  return (
    <>
      <span><Link className="Nav-Link" to="/goerli">Goeril</Link></span>
      <span><Link className="Nav-Link" to="/goerli">Ganache</Link></span>
    </>
  );
}

export default Nav;