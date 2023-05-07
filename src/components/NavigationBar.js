import React from 'react';
import { Link } from 'react-router-dom';

export const NavigationBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Start</Link></li>
        <li><Link to="/directory">All Titles</Link></li>
        <li><a href="#">Surprise Me</a></li>
      </ul>
    </nav>
  );
}