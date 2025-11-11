import React, { useState, useEffect } from 'react';
import { apps } from '../data/apps';
import { toast } from 'react-toastify';
import './MyInstallation.css';

const MyInstallation = () => {
  const [installedApps, setInstalledApps] = useState([]);

  useEffect(() => {
    const ids = JSON.parse(localStorage.getItem('installedApps') || '[]');
    const installed = apps.filter(app => ids.includes(app.id));
    setInstalledApps(installed);
  }, []);

  const handleUninstall = (id) => {
    const ids = JSON.parse(localStorage.getItem('installedApps') || '[]');
    const newIds = ids.filter(i => i !== id);
    localStorage.setItem('installedApps', JSON.stringify(newIds));
    setInstalledApps(prev => prev.filter(app => app.id !== id));
    toast.success('App uninstalled successfully!');
  };

  return (
    <div className="my-installation">
      <h1>Your Installed Apps</h1>
      {installedApps.length > 0 ? (
        <div className="installed-list">
          {installedApps.map(app => (
            <div key={app.id} className="installed-item">
              <img src={app.image} alt={app.title} className="app-icon" />
              <div className="app-info">
                <h3>{app.title}</h3>
                <p>{app.companyName}</p>
              </div>
              <button onClick={() => handleUninstall(app.id)} className="uninstall">Uninstall</button>
            </div>
          ))}
        </div>
      ) : (
        <p>No apps installed yet.</p>
      )}
    </div>
  );
};

export default MyInstallation;
