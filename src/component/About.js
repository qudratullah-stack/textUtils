import React from "react";
import { Link } from "react-router-dom";
export default function About() {
  return (
    <div>
      <h2>this is h2 for Massage</h2>
      <nav>
        <Link to="/header">Header</Link>
        <Link to="/">Contact</Link>
      </nav>
    </div>
  );
}
