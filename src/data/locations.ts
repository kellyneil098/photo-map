// src/data/locations.ts
import { LocationMarker } from '../types/types';

export const locationMarkersExample: LocationMarker[] = [
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
    imageUrl: "./images/nyc/times-square.jpg",
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
    imageUrl: "./images/seattle/space-needle.jpg",
    category: "landmark",
    date: "2023-06-22",
    city: "Seattle",
    containsPeople: ["Mike", "Emily"]
  }
];


export const locationMarkers: LocationMarker[] = [
  {
    id: "barcelona-sagrada",
    position: [0, 0],
    title: "Sagrada Familia",
    description: "",
    imageUrl: "/images/city/barcelona-sagrada.JPG",
    city: "Barcelona"
  },
  {
    id: "chimney-rock-bridge",
    position: [0, 0],
    title: "Chimney Rock State Park",
    description: "",
    imageUrl: "/images/city/chimney-rock-bridge.png",
    city: "Chimney Rock"
  },
  {
    id: "dc-capitol-building",
    position: [0, 0],
    title: "Capitol Building",
    description: "",
    imageUrl: "/images/city/dc-capitol-building.PNG",
    city: "Washington DC"
  },
  {
    id: "durham-duke-east-campus",
    position: [0, 0],
    title: "Duke East Campus",
    description: "",
    imageUrl: "/images/city/durham-duke-east-campus.png",
    city: "Durham"
  },
  {
    id: "durham-duke-pitchforks-music",
    position: [0, 0],
    title: "Duke Pitchforks Music",
    description: "",
    imageUrl: "/images/city/durham-duke-pitchforks-music.png",
    city: "Durham"
  },
  {
    id: "durham-duke-pitchforks",
    position: [0, 0],
    title: "Duke Pitchforks",
    description: "",
    imageUrl: "/images/city/durham-duke-pitchforks.png",
    city: "Durham"
  },
  {
    id: "granada-alhambra-road",
    position: [0, 0],
    title: "Alhambra Road",
    description: "",
    imageUrl: "/images/city/granada-alhambra-road.jpg",
    city: "Granada"
  },
  {
    id: "granada-alhambra-view",
    position: [0, 0],
    title: "Alhambra View",
    description: "",
    imageUrl: "/images/city/granada-alhambra-view.JPG",
    city: "Granada"
  },
  {
    id: "hangzhou-haagen-daz",
    position: [0, 0],
    title: "Haagen Daz",
    description: "",
    imageUrl: "/images/city/hangzhou-haagen-daz.png",
    city: "Hangzhou"
  },
  {
    id: "hangzhou-lingyinsi",
    position: [0, 0],
    title: "Lingyinsi",
    description: "",
    imageUrl: "/images/city/hangzhou-lingyinsi.png",
    city: "Hangzhou"
  },
  {
    id: "hangzhou-xihu",
    position: [0, 0],
    title: "Xihu",
    description: "",
    imageUrl: "/images/city/hangzhou-xihu.png",
    city: "Hangzhou"
  },
  {
    id: "hong-kong-victoria-bay",
    position: [0, 0],
    title: "Victoria Bay",
    description: "",
    imageUrl: "/images/city/hong-kong-victoria-bay.png",
    city: "Hong Kong"
  },
  {
    id: "hong-kong-victoria-peak",
    position: [0, 0],
    title: "Victoria Peak",
    description: "",
    imageUrl: "/images/city/hong-kong-victoria-peak.png",
    city: "Hong Kong"
  },
  {
    id: "kunshan-dku-graduation",
    position: [0, 0],
    title: "DKU Graduation",
    description: "",
    imageUrl: "/images/city/kunshan-dku-graduation.png",
    city: "Kunshan"
  },
  {
    id: "madrid-royal-garden",
    position: [0, 0],
    title: "Royal Garden",
    description: "",
    imageUrl: "/images/city/madrid-royal-garden.jpg",
    city: "Madrid"
  },
  {
    id: "madrid-royal-palace",
    position: [0, 0],
    title: "Royal Palace",
    description: "",
    imageUrl: "/images/city/madrid-royal-palace.jpg",
    city: "Madrid"
  },
  {
    id: "nyc-apartment-home",
    position: [0, 0],
    title: "New York Home",
    description: "",
    imageUrl: "/images/city/nyc-apartment-home.png",
    city: "NYC"
  },
  {
    id: "nyc-chelsea-market",
    position: [0, 0],
    title: "Chelsea Market",
    description: "",
    imageUrl: "/images/city/nyc-chelsea-market.png",
    city: "NYC"
  },
  {
    id: "nyc-edge",
    position: [0, 0],
    title: "The Edge",
    description: "",
    imageUrl: "/images/city/nyc-edge.jpg",
    city: "NYC"
  },
  {
    id: "nyc-friends-experience",
    position: [0, 0],
    title: "Friends Experience",
    description: "",
    imageUrl: "/images/city/nyc-friends-experience.JPG",
    city: "NYC"
  },
  {
    id: "nyc-met-museum",
    position: [0, 0],
    title: "Metropolitan Museum",
    description: "",
    imageUrl: "/images/city/nyc-met-museum.JPG",
    city: "NYC"
  },
  {
    id: "nyc-roosevelt-island",
    position: [0, 0],
    title: "Roosevelt Island",
    description: "",
    imageUrl: "/images/city/nyc-roosevelt-island.png",
    city: "NYC"
  },
  {
    id: "nyc-vessel-shed",
    position: [0, 0],
    title: "The Shed",
    description: "",
    imageUrl: "/images/city/nyc-vessel-shed.JPG",
    city: "NYC"
  },
  {
    id: "qingdao-baifan",
    position: [0, 0],
    title: "White Sail",
    description: "",
    imageUrl: "/images/city/qingdao-baifan.JPG",
    city: "Qingdao"
  },
  {
    id: "qingdao-beach-concert-hall",
    position: [0, 0],
    title: "Concert Hall",
    description: "",
    imageUrl: "/images/city/qingdao-beach-concert-hall.JPG",
    city: "Qingdao"
  },
  {
    id: "seattle-airbnb-inside",
    position: [0, 0],
    title: "Seattle Vacation",
    description: "",
    imageUrl: "/images/city/seattle-airbnb-inside.jpg",
    city: "Seattle"
  },
  {
    id: "seattle-airbnb-outside",
    position: [0, 0],
    title: "Seattle Airbnb Views",
    description: "",
    imageUrl: "/images/city/seattle-airbnb-outside.jpg",
    city: "Seattle"
  },
  {
    id: "seattle-airbnb",
    position: [0, 0],
    title: "Seattle Airbnb",
    description: "",
    imageUrl: "/images/city/seattle-airbnb.png",
    city: "Seattle"
  },
  {
    id: "seattle-chihully-2",
    position: [0, 0],
    title: "Chihuly Garden and Glass",
    description: "",
    imageUrl: "/images/city/seattle-chihully-2.png",
    city: "Seattle"
  },
  {
    id: "seattle-chihully-glass-hall",
    position: [0, 0],
    title: "Chihuly Glass Hall",
    description: "",
    imageUrl: "/images/city/seattle-chihully-glass-hall.jpg",
    city: "Seattle"
  },
  {
    id: "seattle-chihully-museum",
    position: [0, 0],
    title: "Chihuly Museum",
    description: "",
    imageUrl: "/images/city/seattle-chihully-museum.jpg",
    city: "Seattle"
  },
  {
    id: "seattle-chihuly",
    position: [0, 0],
    title: "Chihuly Garden and Glass",
    description: "",
    imageUrl: "/images/city/seattle-chihuly.png",
    city: "Seattle"
  },
  {
    id: "seattle-lake-union",
    position: [0, 0],
    title: "Lake Union",
    description: "",
    imageUrl: "/images/city/seattle-lake-union.jpg",
    city: "Seattle"
  },
  {
    id: "seattle-mt-rainier",
    position: [0, 0],
    title: "Mt Rainier",
    description: "",
    imageUrl: "/images/city/seattle-mt-rainier.png",
    city: "Seattle"
  },
  {
    id: "seattle-pike-place-downstairs",
    position: [0, 0],
    title: "Pike Place Market",
    description: "",
    imageUrl: "/images/city/seattle-pike-place-downstairs.jpg",
    city: "Seattle"
  },
  {
    id: "seattle-pike-place-outdoor",
    position: [0, 0],
    title: "Pike Place Market",
    description: "",
    imageUrl: "/images/city/seattle-pike-place-outdoor.png",
    city: "Seattle"
  },
  {
    id: "seattle-pike-place-restaurant",
    position: [0, 0],
    title: "Pike Place Market Seafood",
    description: "",
    imageUrl: "/images/city/seattle-pike-place-restaurant.png",
    city: "Seattle"
  },
  {
    id: "seattle-pike-place-skyline",
    position: [0, 0],
    title: "Seattle Waterside Views",
    description: "",
    imageUrl: "/images/city/seattle-pike-place-skyline.jpg",
    city: "Seattle"
  },
  {
    id: "seattle-sculture-park-2",
    position: [0, 0],
    title: "Sculpture Park",
    description: "",
    imageUrl: "/images/city/seattle-sculture-park-2.png",
    city: "Seattle"
  },
  {
    id: "seattle-sculture-park",
    position: [0, 0],
    title: "Sculpture Park",
    description: "",
    imageUrl: "/images/city/seattle-sculture-park.png",
    city: "Seattle"
  },
  {
    id: "seattle-space-needle",
    position: [0, 0],
    title: "The Space Needle",
    description: "",
    imageUrl: "/images/city/seattle-space-needle.jpg",
    city: "Seattle"
  },
  {
    id: "seattle-uwash-cherry-2",
    position: [0, 0],
    title: "U Washington Cherry Blossoms",
    description: "",
    imageUrl: "/images/city/seattle-uwash-cherry-2.JPG",
    city: "Seattle"
  },
  {
    id: "seattle-uwash-cherry",
    position: [0, 0],
    title: "U Washington Cherry Blossoms",
    description: "",
    imageUrl: "/images/city/seattle-uwash-cherry.JPG",
    city: "Seattle"
  },
  {
    id: "seattle-uwash",
    position: [0, 0],
    title: "University of Washington",
    description: "",
    imageUrl: "/images/city/seattle-uwash.JPG",
    city: "Seattle"
  },
  {
    id: "seville-cathedral",
    position: [0, 0],
    title: "Cathedral",
    description: "",
    imageUrl: "/images/city/seville-cathedral.jpg",
    city: "Seville"
  },
  {
    id: "seville-garden",
    position: [0, 0],
    title: "Seville Gardens",
    description: "",
    imageUrl: "/images/city/seville-garden.JPG",
    city: "Seville"
  },
  {
    id: "suzhou-baomoyuan",
    position: [0, 0],
    title: "Suzhou Gardens",
    description: "",
    imageUrl: "/images/city/suzhou-baomoyuan.png",
    city: "Suzhou"
  },
  {
    id: "suzhou-garden",
    position: [0, 0],
    title: "Suzhou Gardens",
    description: "",
    imageUrl: "/images/city/suzhou-garden.png",
    city: "Suzhou"
  },
  {
    id: "virginia-massanuten-resort",
    position: [0, 0],
    title: "Virginia Ski Vacation",
    description: "",
    imageUrl: "/images/city/virginia-massanuten-resort.png",
    city: "Virginia"
  },
  {
    id: "zibo-xujiacun",
    position: [0, 0],
    title: "Visiting Home for Chinese New Year",
    description: "",
    imageUrl: "/images/city/zibo-xujiacun.png",
    city: "Zibo"
  }
];
