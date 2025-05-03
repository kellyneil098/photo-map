// src/components/Map/MapView.tsx
import React from 'react';
import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import LocationMarkers from './LocationMarkers';
import { LocationMarker } from '../../types/types';

interface MapViewProps {
  markers: LocationMarker[];
  onMarkerClick: (marker: LocationMarker) => void;
  selectedMarkerId?: string;
}

const MapView: React.FC<MapViewProps> = ({ markers, onMarkerClick, selectedMarkerId }) => {
  // Center on the US
  const defaultCenter: [number, number] = [39.8283, -98.5795];
  const defaultZoom = 4;

  return (
    <MapContainer 
      center={defaultCenter} 
      zoom={defaultZoom} 
      style={{ height: '100vh', width: '100%' }}
      zoomControl={false} // Remove default zoom control
      minZoom={2} // Prevent zooming out too far
      maxZoom={18} // Limit maximum zoom
      scrollWheelZoom={true} // Enable scroll wheel zoom
      doubleClickZoom={true} // Enable double click zoom
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <ZoomControl position="bottomright" /> {/* Move zoom controls */}
      <LocationMarkers 
        markers={markers} 
        onMarkerClick={onMarkerClick} 
        selectedMarkerId={selectedMarkerId}
      />
    </MapContainer>
  );
};

export default MapView;
