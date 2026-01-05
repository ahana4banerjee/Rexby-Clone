# Rexby Norway Guide - UI Clone Task

---

## 1. Project Overview

**Purpose of the task**  
This project is a high-fidelity front-end clone of the Rexby "Norway Guide" page. The goal was to replicate the premium, app-like experience of the original site, focusing on responsive design, complex layout structures, and interactive mapping features without using a backend.

**Link to original UI being cloned**  
https://www.rexby.com/asasteinars/norway

---

## 2. Screenshots

**Desktop View:**  
<img width="1366" height="669" alt="Landing page" src="https://github.com/user-attachments/assets/0329e15b-3c14-44cc-8d46-fa7afe9bc9bb" />


**Mobile View:**  
<img width="613" height="645" alt="tab view" src="https://github.com/user-attachments/assets/0ddce305-29ca-4360-9a9e-987f473f58ed" />


**Map Interactivity:**  
<img width="1345" height="540" alt="map view" src="https://github.com/user-attachments/assets/db47c423-9f22-4f9a-a318-826ed1204efc" />


---

## 3. Tech Stack

- **Frontend Framework:** React (Vite)  
- **Styling Framework:** Tailwind CSS  
- **Map Library:** Leaflet.js (react-leaflet) with OpenStreetMap & Carto Tiles  
- **Icons:** Lucide React  

---

## 4. Features Implemented

- **Responsive UI Clone:** Replication of Hero, Navigation, and Grid layouts across mobile and desktop.  
- **Sticky Action Navbar:** Sticks on scroll with *Preview* and *Get Access* actions.  

**Interactive Maps**
- Map Preview card that expands to full screen  
- Custom-colored markers (Teal / Pink / Yellow)  

**Advanced Modals**
- Login popup  
- Details modal for “Things to Do”  
- Full-screen simulated AI Chat  

**Horizontal Scroll Carousels**
- Recommendations  
- Itineraries  

---

## 5. UI Replication Notes

### Components matched from original site

- **Hero Section:** Full-width image with gradient overlay, author badge, Preview/Get Access buttons.  
- **Navigation:** Replaced default tabs with Rexby-style sticky Action Bar.  
- **Cards:** Aspect ratios `aspect-[3/4]`, `aspect-video`, rounded corners `rounded-3xl`.  
- **Footer:** 4-column layout with “Authorized Travel Agency” badge.

### Design differences

- Used OpenStreetMap + Carto tiles instead of Mapbox.  
- Simulated AI Chat backend with static frontend logic.

### Mobile vs Desktop behavior

- **Navbar:** Full layout on desktop, condensed hamburger menu on mobile.  
- **Modals:** Full-width on mobile, centered cards on desktop.

---

## 6. Map Implementation Details

### Map library setup

Used `react-leaflet` with a custom `MapController` component.

```javascript
const MapController = () => {
  const map = useMap();
  useEffect(() => {
    setTimeout(() => {
      map.invalidateSize();
    }, 200);
  }, [map]);
  return null;
};
```
### Marker Data Structure

```javascript
{ id: 1, pos: [61.0, 6.0], type: 'view', title: "Hidden Fjord View" }
```
---

## 7. Build Process

- Setup Vite + React + Tailwind

- Built Hero & Navbar

- Developed MapPreview, LocalSecrets, ThingsToDo, Itinerary

- Integrated Leaflet and fixed grey tile issue

- Added modals for Login & Preview

- Polished spacing, shadows, and Footer

---

## 8. AI Prompts Used (on ChatGPT)

- Layout:

"Create a sticky navbar that replaces the tabs, with a logo on the left and 'Get Access' button on the right."

- Map Logic:

"How do I fix the Leaflet map rendering grey tiles when inside a modal?"

- Styling:

"Replicate this card design using Tailwind with image on top and category text below."

- Debugging:

"My tailwind init command is failing. How do I manually create the config?"

---

## 9. Debugging & Challenges
- Tailwind Init Error

Issue: npx command failed

Fix: Explicitly installed Tailwindcss v3 

- Leaflet Grey Tiles

Issue: Map broke inside modal

Fix: map.invalidateSize()

- Image Stretching

Issue: Scroll cards distorted

Fix: aspect-[3/4], object-cover, shrink-0

---

## 10. Folder Structure
```text
src/
├── components/
│   ├── Hero.jsx
│   ├── Header.jsx
│   ├── MapPreview.jsx
│   ├── LocalSecrets.jsx
│   ├── ThingsToDo.jsx
│   ├── Itinerary.jsx
│   ├── AskMyGuide.jsx
│   ├── YouMayAlsoLike.jsx
│   ├── FAQ.jsx
│   ├── Footer.jsx
│   └── Tabs.jsx
├── App.jsx
├── index.css
└── main.jsx
```

---

## 11. How to Run Locally
git clone 

```bash
npm install

npm run dev
```


Open: http://localhost:5173

---
## 12. Time Required: ~ 4 hrs
---
## 13. Limitations & Future Improvements

Missing

- Backend Integration: The login and email signup forms are UI-only and do not collect real data.

- Dynamic Data: All locations are currently hardcoded in component arrays.

Improvements

- Map Clustering: Implement react-leaflet-cluster to handle large numbers of markers more elegantly.

- Performance: Optimize image loading with lazy loading attributes.

- Authentication: Connect the Login modal to Firebase or Auth0.
