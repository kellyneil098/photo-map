// src/types/types.ts
export interface LocationMarker {
    id: string;
    position: [number, number]; // [latitude, longitude]
    title: string;
    description: string;
    imageUrl: string;
    thumbnailUrl?: string;
    category?: string;
    date?: string;
    city?: string;
    containsPeople?: string[];
  }
  