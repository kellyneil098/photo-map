// src/App.tsx
import React, { useState, useEffect } from 'react';
import './App.css';
import MapView from './components/Map/MapView';
import PhotoPopup from './components/PhotoPopup/PhotoPopup';
import PasswordScreen from './components/Auth/PasswordScreen';
import ScavengerHuntCounter from './components/ScavengerHunt/ScavengerHuntCounter';
import { locationMarkers as initialMarkers } from './data/locations';
import { LocationMarker } from './types/types';

function App() {
  const [markers, setMarkers] = useState<LocationMarker[]>(initialMarkers);
  const [selectedMarker, setSelectedMarker] = useState<LocationMarker | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Try to load found status from localStorage on initial load
  useEffect(() => {
    const savedFoundStatus = localStorage.getItem('foundMarkers');
    if (savedFoundStatus) {
      try {
        const foundIds = JSON.parse(savedFoundStatus) as string[];
        setMarkers(prevMarkers => 
          prevMarkers.map(marker => ({
            ...marker,
            found: foundIds.includes(marker.id)
          }))
        );
      } catch (e) {
        console.error('Error loading saved found status', e);
      }
    }
  }, []);

  const handleMarkerClick = (marker: LocationMarker) => {
    // Find the most up-to-date version of this marker
    const updatedMarker = markers.find(m => m.id === marker.id) || marker;
    setSelectedMarker(updatedMarker);
  };

  const handleClosePopup = () => {
    setSelectedMarker(null);
  };

  const handleAuthentication = () => {
    setIsAuthenticated(true);
  };

  const handleMarkFound = (markerId: string, found: boolean) => {
    const updatedMarkers = markers.map(marker => 
      marker.id === markerId ? { ...marker, found } : marker
    );
    
    setMarkers(updatedMarkers);
    
    // If the currently selected marker is being updated, update it too
    if (selectedMarker && selectedMarker.id === markerId) {
      setSelectedMarker({ ...selectedMarker, found });
    }
    
    // Save found status to localStorage
    const foundIds = updatedMarkers
      .filter(marker => marker.found)
      .map(marker => marker.id);
    
    localStorage.setItem('foundMarkers', JSON.stringify(foundIds));
  };

  // Show password screen if not authenticated
  if (!isAuthenticated) {
    return <PasswordScreen onAuthenticate={handleAuthentication} />;
  }

  // Show map if authenticated
  return (
    <div className="App">
      <MapView 
        markers={markers} 
        onMarkerClick={handleMarkerClick}
        selectedMarkerId={selectedMarker?.id}
      />
      <PhotoPopup 
        marker={selectedMarker} 
        onClose={handleClosePopup}
        onMarkFound={handleMarkFound}
      />
      <ScavengerHuntCounter markers={markers} />
    </div>
  );
}

export default App;
