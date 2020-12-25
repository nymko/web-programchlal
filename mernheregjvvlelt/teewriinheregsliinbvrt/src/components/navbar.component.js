import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './hmm.css';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Бүртгэлийн мэдээллүүд</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Бүртгэлүүд</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Шинээр бүртгэл үүсгэх</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link">Шинэ дугаар</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}