import React from 'react';
import { Link } from 'react-router-dom';
import { apps } from '../data/apps';
import AppCard from '../components/AppCard';
import './Home.css';

const Home = () => {
  const topApps = apps.slice(0, 8);

  return (
    <div className="home">
      <section className="banner">
        <h1>We Build<br /><span className="purple-text">Productive Apps</span></h1>
        <p>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br />Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
        <div className="buttons">
          <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="btn">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/googleplay.svg" alt="Google Play" className="btn-icon" />
            Google Play
          </a>
          <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer" className="btn">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/appstore.svg" alt="App Store" className="btn-icon" />
            App Store
          </a>
        </div>
        <img src="/assets/hero.png" alt="Hero" className="hero-image" />
      </section>
      <section className="states">
        <h2>Trusted By Millions, Built For You</h2>
        <div className="states-grid">
          <div className="state-card">
            <p>Total Downloads</p>
            <h3>29.6M</h3>
            <p>21% more than last month</p>
          </div>
          <div className="state-card">
            <p>Total Reviews</p>
            <h3>906K</h3>
            <p>46% more than last month</p>
          </div>
          <div className="state-card">
            <p>Active Apps</p>
            <h3>132+</h3>
            <p>31 more will Launch</p>
          </div>
        </div>
      </section>
      <section className="top-apps">
        <h2>Trending Apps</h2>
        <p className="section-description">Explore All Trending Apps on the Market developed by us</p>
        <div className="apps-grid">
          {topApps.map(app => <AppCard key={app.id} app={app} />)}
        </div>
        <Link to="/apps" className="show-all">Show All</Link>
      </section>
    </div>
  );
};

export default Home;
