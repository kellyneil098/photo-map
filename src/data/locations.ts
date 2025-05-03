// src/data/locations.ts
import { LocationMarker } from '../types/types';

export const locationMarkers: LocationMarker[] = [
  {
    id: "nyc-central-park",
    position: [40.7812, -73.9665],
    title: "Central Park",
    description: "Beautiful day in Central Park with amazing views.",
    imageUrl: "/images/nyc/central-park.jpeg",
    category: "park",
    date: "2023-05-15",
    city: "New York City",
    containsPeople: ["John", "Sarah"]
  },
  {
    id: "nyc-times-square",
    position: [40.7580, -73.9855],
    title: "Times Square",
    description: "The bright lights of Times Square at night.",
    imageUrl: "/images/nyc/times-square.jpg",
    category: "landmark",
    date: "2023-05-16",
    city: "New York City",
    containsPeople: []
  },
  {
    id: "seattle-space-needle",
    position: [47.6205, -122.3493],
    title: "Space Needle",
    description: "Iconic Seattle landmark with panoramic views.",
    imageUrl: "/images/seattle/space-needle.jpg",
    category: "landmark",
    date: "2023-06-22",
    city: "Seattle",
    containsPeople: ["Mike", "Emily"]
  }
];
