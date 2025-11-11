import React from 'react';
import { Link } from 'react-router-dom';
import './AppCard.css';

const AppCard = ({ app }) => {
  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'K';
    }
    return num.toString();
  };

  return (
    <div className="app-card">
      <img src={app.image} alt={app.title} />
      <h3>{app.title}</h3>
      <div className="app-stats">
        <span className="downloads">
          <span className="download-icon">📥</span>
          {formatNumber(app.downloads)}
        </span>
        <span className="rating">⭐ {app.ratingAvg}</span>
      </div>
      <Link to={`/app/${app.id}`}>View Details</Link>
    </div>
  );
};

export default AppCard;
