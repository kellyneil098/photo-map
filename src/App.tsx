// src/App.tsx
import React, { useState } from 'react';
import './App.css';
import MapView from './components/Map/MapView';
import PhotoPopup from './components/PhotoPopup/PhotoPopup';
import PasswordScreen from './components/Auth/PasswordScreen';
import { locationMarkers } from './data/locations';
import { LocationMarker } from './types/types';

function App() {
  const [selectedMarker, setSelectedMarker] = useState<LocationMarker | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleMarkerClick = (marker: LocationMarker) => {
    setSelectedMarker(marker);
  };

  const handleClosePopup = () => {
    setSelectedMarker(null);
  };

  const handleAuthentication = () => {
    setIsAuthenticated(true);
  };

  // Show password screen if not authenticated
  if (!isAuthenticated) {
    return <PasswordScreen onAuthenticate={handleAuthentication} />;
  }

  // Show map if authenticated
  return (
    <div className="App">
      <MapView 
        markers={locationMarkers} 
        onMarkerClick={handleMarkerClick}
        selectedMarkerId={selectedMarker?.id}
      />
      <PhotoPopup 
        marker={selectedMarker} 
        onClose={handleClosePopup} 
      />
    </div>
  );
}

export default App;
