import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { apps } from '../data/apps';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { toast } from 'react-toastify';
import AppNotFound from './AppNotFound';
import './AppDetails.css';

const AppDetails = () => {
  const { id } = useParams();
  const app = apps.find(a => a.id === parseInt(id));
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    const installedApps = JSON.parse(localStorage.getItem('installedApps') || '[]');
    setInstalled(installedApps.includes(parseInt(id)));
  }, [id]);

  const handleInstall = () => {
    const installedApps = JSON.parse(localStorage.getItem('installedApps') || '[]');
    if (!installedApps.includes(app.id)) {
      installedApps.push(app.id);
      localStorage.setItem('installedApps', JSON.stringify(installedApps));
      setInstalled(true);
      toast.success('App installed successfully!');
    }
  };

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(0) + 'K';
    return num.toString();
  };

  if (!app) {
    return <AppNotFound />;
  }

  const sortedRatings = [...app.ratings].sort((a, b) => parseInt(b.name.split(' ')[0]) - parseInt(a.name.split(' ')[0]));

  return (
    <div className="app-details">
      <div className="app-info">
        <img src={app.image} alt={app.title} />
        <div className="details">
          <h1>{app.title}</h1>
          <p className="developer">Developed by {app.companyName}</p>
          <div className="metrics">
            <div className="metric">
              <img src="/assets/icon-downloads.png" alt="Downloads" />
              <p>{formatNumber(app.downloads)}</p>
            </div>
            <div className="metric">
              <img src="/assets/icon-ratings.png" alt="Rating" />
              <p>⭐ {app.ratingAvg}</p>
            </div>
            <div className="metric">
              <img src="/assets/icon-review.png" alt="Reviews" />
              <p>{formatNumber(app.reviews)}</p>
            </div>
          </div>
          <div className="action-buttons">
            <button className="rating-btn" onClick={() => toast.info('Rating feature coming soon!')}>Rating</button>
            <button className="review-btn" onClick={() => toast.info('Review feature coming soon!')}>Review</button>
            <button
              onClick={handleInstall}
              disabled={installed}
              className={installed ? 'installed' : 'install'}
            >
              {installed ? 'Installed' : `Install Now (${app.size} MB)`}
            </button>
          </div>
        </div>
      </div>
      <div className="chart-section">
        <h2>Review Chart</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={sortedRatings}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="count" stroke="#6C5CE7" strokeWidth={3} dot={{ fill: '#6C5CE7', strokeWidth: 2, r: 6 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="description">
        <h2>Description</h2>
        <p>{app.description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
