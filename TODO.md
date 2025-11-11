# TODO List for Hero IO Project Fixes

## Global Design & Component Fixes
- [x] Change header background to white/light and ensure text links are dark
- [x] Add HERO.IO site name beside logo image
- [x] Add GitHub logo beside "Contribute" button
- [x] Style "Contribute" button with primary purple color (#6C5CE7)
- [x] Refine .app-card styling for clean container and visual hierarchy
- [x] Ensure "View Details" link uses primary purple color
- [x] Implement social links in footer with dark background and light text

## Home Page (/) Fixes
- [x] Change banner section background to white and text to dark
- [x] Apply primary purple color to "App Store" and "Play Store" buttons
- [x] Implement formatMetric function for M/K notation on download/user counts
- [x] Add title "Trusted By Millions, Built For You" above the metrics
- [x] Ensure top apps title reads "Trending Apps"

## All Apps Page (/apps) Implementations
- [x] Complete useMemo logic for live, case-insensitive search filtering by app title
- [x] Complete useMemo logic for High-Low/Low-High sorting by downloads
- [x] Add conditional rendering for "No App Found" message or App-Error.png graphic when no results

## App Details Page (/app-details/:id) Implementations
- [x] Implement isInstalled state using localStorage check
- [x] Create handleInstall function to save app ID to localStorage and update button state
- [x] Integrate Recharts library for horizontal bar chart of ratings data
- [x] Implement logic for invalid app ID to show "OPPS!! APP NOT FOUND" page with App-Error.png

## My Installation Page (/installation) & Error Pages
- [x] Create page component to display installed apps from localStorage
- [x] Implement handleUninstall function to remove app from localStorage and UI
- [x] Set up React Router * route to display 404 page with error-404.png graphic
