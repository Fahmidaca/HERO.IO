import React, { useState, useMemo, useEffect } from 'react';
import { apps } from '../data/apps';
import AppCard from '../components/AppCard';
import './AllApps.css';

const AllApps = () => {
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('high-low');
  const [loading, setLoading] = useState(false);

  const filteredAndSortedApps = useMemo(() => {
    let filtered = apps.filter(app =>
      app.title.toLowerCase().includes(search.toLowerCase())
    );

    if (sort === 'high-low') {
      filtered.sort((a, b) => b.downloads - a.downloads);
    } else {
      filtered.sort((a, b) => a.downloads - b.downloads);
    }

    return filtered;
  }, [search, sort]);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, [search]);

  return (
    <div className="all-apps">
      <section className="title-section">
        <h1>Our All Applications</h1>
        <p>Discover all available apps</p>
      </section>
      <section className="search-section">
        <p>{filteredAndSortedApps.length} Apps Found</p>
        <input
          type="text"
          placeholder="Search apps..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="high-low">Downloads: High-Low</option>
          <option value="low-high">Downloads: Low-High</option>
        </select>
      </section>
      <section className="apps-section">
        {loading ? (
          <div className="loading">Loading...</div>
        ) : filteredAndSortedApps.length > 0 ? (
          <div className="apps-grid">
            {filteredAndSortedApps.map(app => <AppCard key={app.id} app={app} />)}
          </div>
        ) : (
          <div className="no-results">
            <img src="/assets/App-Error.png" alt="No App Found" />
            <p>No App Found</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default AllApps;
