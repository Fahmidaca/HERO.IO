import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.css';

const ErrorPage = () => {
  return (
    <div className="error-page">
      <img src="/assets/error-404.png" alt="404 Error" />
      <h1>Oops, page not found!</h1>
      <Link to="/">Go Home</Link>
    </div>
  );
};

export default ErrorPage;
