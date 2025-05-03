// src/components/Map/LocationMarkers.tsx
import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import { LocationMarker } from '../../types/types';

interface LocationMarkersProps {
  markers: LocationMarker[];
  onMarkerClick: (marker: LocationMarker) => void;
  selectedMarkerId?: string;
}

// Fix for the default icon issue in React Leaflet
const defaultIcon = new Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const LocationMarkers: React.FC<LocationMarkersProps> = ({ 
  markers, 
  onMarkerClick,
  selectedMarkerId 
}) => {
  return (
    <>
      {markers.map(marker => (
        <Marker
          key={marker.id}
          position={marker.position}
          icon={defaultIcon}
          eventHandlers={{
            click: () => onMarkerClick(marker)
          }}
        >
          <Popup 
            autoPan={true} 
            closeButton={false} 
            autoClose={true}
            className="marker-popup"
          >
            <div>
              <h3>{marker.title}</h3>
              <p>{marker.description}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </>
  );
};

export default LocationMarkers;
