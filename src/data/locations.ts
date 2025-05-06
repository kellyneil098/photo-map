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


export const locationMarkersNoPosition: LocationMarker[] = [
  {
    id: "barcelona-sagrada",
    position: [0, 0],
    title: "Sagrada Familia",
    description: "著名建筑家高迪在巴塞罗那城设计的大教堂。",
    imageUrl: "/images/city/barcelona-sagrada.JPG",
    city: "Barcelona"
  },
  {
    id: "chimney-rock-bridge",
    position: [0, 0],
    title: "Chimney Rock State Park",
    description: "北卡西部的公园。",
    imageUrl: "/images/city/chimney-rock-bridge.png",
    city: "Chimney Rock"
  },
  {
    id: "dc-capitol-building",
    position: [0, 0],
    title: "Capitol Building",
    description: "美国首都的国会大厦。",
    imageUrl: "/images/city/dc-capitol-building.PNG",
    city: "Washington DC"
  },
  {
    id: "durham-duke-east-campus",
    position: [0, 0],
    title: "Duke East Campus",
    description: "杜卡大学东校院，大四回中国以前照的相。",
    imageUrl: "/images/city/durham-duke-east-campus.png",
    city: "Durham"
  },
  {
    id: "durham-duke-pitchforks-music",
    position: [0, 0],
    title: "Duke Pitchforks Music",
    description: "杜克大学西校院宿舍附近的音乐练习室。",
    imageUrl: "/images/city/durham-duke-pitchforks-music.png",
    city: "Durham"
  },
  {
    id: "durham-duke-pitchforks",
    position: [0, 0],
    title: "Duke Pitchforks",
    description: "杜克西校院食堂外面的楼梯。",
    imageUrl: "/images/city/durham-duke-pitchforks.png",
    city: "Durham"
  },
  {
    id: "granada-alhambra-road",
    position: [0, 0],
    title: "Alhambra Road",
    description: "前往格拉纳达著名的阿尔罕布拉宫殿的路。",
    imageUrl: "/images/city/granada-alhambra-road.jpg",
    city: "Granada"
  },
  {
    id: "granada-alhambra-view",
    position: [0, 0],
    title: "Alhambra View",
    description: "阿尔罕布拉宫殿看到的美景。",
    imageUrl: "/images/city/granada-alhambra-view.JPG",
    city: "Granada"
  },
  {
    id: "hangzhou-haagen-daz",
    position: [0, 0],
    title: "Haagen Daz",
    description: "杭州我和妈妈一起去吃的三球哈根达斯店。",
    imageUrl: "/images/city/hangzhou-haagen-daz.png",
    city: "Hangzhou"
  },
  {
    id: "hangzhou-lingyinsi",
    position: [0, 0],
    title: "Hangzhou Lingyin Temple",
    description: "杭州灵隐寺。",
    imageUrl: "/images/city/hangzhou-lingyinsi.png",
    city: "Hangzhou"
  },
  {
    id: "hangzhou-xihu",
    position: [0, 0],
    title: "Xihu",
    description: "西湖美景，三月天",
    imageUrl: "/images/city/hangzhou-xihu.png",
    city: "Hangzhou"
  },
  {
    id: "hong-kong-victoria-bay",
    position: [0, 0],
    title: "Victoria Bay",
    description: "大四和妈妈去香港旅游。",
    imageUrl: "/images/city/hong-kong-victoria-bay.png",
    city: "Hong Kong"
  },
  {
    id: "hong-kong-victoria-peak",
    position: [0, 0],
    title: "Victoria Peak",
    description: "和妈妈一起爬香港的维多利亚峰。",
    imageUrl: "/images/city/hong-kong-victoria-peak.png",
    city: "Hong Kong"
  },
  {
    id: "kunshan-dku-graduation",
    position: [0, 0],
    title: "DKU Graduation",
    description: "昆山杜克2023年毕业典礼。",
    imageUrl: "/images/city/kunshan-dku-graduation.png",
    city: "Kunshan"
  },
  {
    id: "madrid-royal-garden",
    position: [0, 0],
    title: "Royal Garden",
    description: "2024年和全家去马德里的皇家花园。",
    imageUrl: "/images/city/madrid-royal-garden.jpg",
    city: "Madrid"
  },
  {
    id: "madrid-royal-palace",
    position: [0, 0],
    title: "Royal Palace",
    description: "马德里皇宫的美景。",
    imageUrl: "/images/city/madrid-royal-palace.jpg",
    city: "Madrid"
  },
  {
    id: "nyc-apartment-home",
    position: [0, 0],
    title: "New York Home",
    description: "2024年在纽约第一次买房子！",
    imageUrl: "/images/city/nyc-apartment-home.png",
    city: "NYC"
  },
  {
    id: "nyc-chelsea-market",
    position: [0, 0],
    title: "Chelsea Market",
    description: "纽约哈德森和旁边的小商场",
    imageUrl: "/images/city/nyc-chelsea-market.png",
    city: "NYC"
  },
  {
    id: "nyc-edge",
    position: [0, 0],
    title: "The Edge",
    description: "纽约最新的观景台。",
    imageUrl: "/images/city/nyc-edge.jpg",
    city: "NYC"
  },
  {
    id: "nyc-friends-experience",
    position: [0, 0],
    title: "Friends Experience",
    description: "和妈妈一起参观朋友电视剧的博物馆！",
    imageUrl: "/images/city/nyc-friends-experience.JPG",
    city: "NYC"
  },
  {
    id: "nyc-met-museum",
    position: [0, 0],
    title: "Metropolitan Museum",
    description: "和妈妈一起去纽约大都会艺术博物馆",
    imageUrl: "/images/city/nyc-met-museum.JPG",
    city: "NYC"
  },
  {
    id: "nyc-roosevelt-island",
    position: [0, 0],
    title: "Roosevelt Island",
    description: "刚到纽约被雨淋湿以前的美好时光。",
    imageUrl: "/images/city/nyc-roosevelt-island.png",
    city: "NYC"
  },
  {
    id: "nyc-vessel-shed",
    position: [0, 0],
    title: "The Shed",
    description: "能不能推得动？纽约的移动大楼",
    imageUrl: "/images/city/nyc-vessel-shed.JPG",
    city: "NYC"
  },
  {
    id: "qingdao-baifan",
    position: [0, 0],
    title: "White Sail",
    description: "青岛金沙滩的大白帆！",
    imageUrl: "/images/city/qingdao-baifan.JPG",
    city: "Qingdao"
  },
  {
    id: "qingdao-beach-concert-hall",
    position: [0, 0],
    title: "Concert Hall",
    description: "美丽的金沙滩影月亭",
    imageUrl: "/images/city/qingdao-beach-concert-hall.JPG",
    city: "Qingdao"
  },
  {
    id: "seattle-airbnb-inside",
    position: [0, 0],
    title: "Seattle Vacation",
    description: "2025果果到西雅图和妈妈，姥姥，爷爷碰头",
    imageUrl: "/images/city/seattle-airbnb-inside.jpg",
    city: "Seattle"
  },
  {
    id: "seattle-airbnb-outside",
    position: [0, 0],
    title: "Seattle Airbnb Views",
    description: "西雅图房子的美景。",
    imageUrl: "/images/city/seattle-airbnb-outside.jpg",
    city: "Seattle"
  },
  {
    id: "seattle-airbnb",
    position: [0, 0],
    title: "Seattle Airbnb",
    description: "西雅图旅游的家",
    imageUrl: "/images/city/seattle-airbnb.png",
    city: "Seattle"
  },
  {
    id: "seattle-chihully-2",
    position: [0, 0],
    title: "Chihuly Garden and Glass",
    description: "奇胡利的玻璃博物馆",
    imageUrl: "/images/city/seattle-chihully-2.png",
    city: "Seattle"
  },
  {
    id: "seattle-chihully-glass-hall",
    position: [0, 0],
    title: "Chihuly Glass Hall",
    description: "奇胡利玻璃博物馆的主要景点，玻璃大厅。",
    imageUrl: "/images/city/seattle-chihully-glass-hall.jpg",
    city: "Seattle"
  },
  {
    id: "seattle-chihully-museum",
    position: [0, 0],
    title: "Chihuly Museum",
    description: "奇胡利玻璃博物馆",
    imageUrl: "/images/city/seattle-chihully-museum.jpg",
    city: "Seattle"
  },
  {
    id: "seattle-chihuly",
    position: [0, 0],
    title: "Chihuly Garden and Glass",
    description: "奇胡利玻璃博物馆",
    imageUrl: "/images/city/seattle-chihuly.png",
    city: "Seattle"
  },
  {
    id: "seattle-lake-union",
    position: [0, 0],
    title: "Lake Union",
    description: "西雅图的联合湖",
    imageUrl: "/images/city/seattle-lake-union.jpg",
    city: "Seattle"
  },
  {
    id: "seattle-mt-rainier",
    position: [0, 0],
    title: "Mt Rainier",
    description: "我和妈妈2021年爬过雷尼尔雪山。",
    imageUrl: "/images/city/seattle-mt-rainier.png",
    city: "Seattle"
  },
  {
    id: "seattle-pike-place-downstairs",
    position: [0, 0],
    title: "Pike Place Market",
    description: "西雅图的派克市场充满了艺术品。",
    imageUrl: "/images/city/seattle-pike-place-downstairs.jpg",
    city: "Seattle"
  },
  {
    id: "seattle-pike-place-outdoor",
    position: [0, 0],
    title: "Pike Place Market",
    description: "西雅图派克市场的标志是一个小猪！",
    imageUrl: "/images/city/seattle-pike-place-outdoor.png",
    city: "Seattle"
  },
  {
    id: "seattle-pike-place-restaurant",
    position: [0, 0],
    title: "Pike Place Market Seafood",
    description: "派克市场附近和妈妈，姥姥，爷爷吃的海鲜汤。",
    imageUrl: "/images/city/seattle-pike-place-restaurant.png",
    city: "Seattle"
  },
  {
    id: "seattle-pike-place-skyline",
    position: [0, 0],
    title: "Seattle Waterside Views",
    description: "派克市场的城市美景。",
    imageUrl: "/images/city/seattle-pike-place-skyline.jpg",
    city: "Seattle"
  },
  {
    id: "seattle-sculture-park-2",
    position: [0, 0],
    title: "Sculpture Park",
    description: "西雅图靠水的雕塑公园。",
    imageUrl: "/images/city/seattle-sculture-park-2.png",
    city: "Seattle"
  },
  {
    id: "seattle-sculture-park",
    position: [0, 0],
    title: "Sculpture Park",
    description: "西雅图雕塑公园离太空针不太远。",
    imageUrl: "/images/city/seattle-sculture-park.png",
    city: "Seattle"
  },
  {
    id: "seattle-space-needle",
    position: [0, 0],
    title: "The Space Needle",
    description: "从这里可以看见西雅图的城市标志，太空针！",
    imageUrl: "/images/city/seattle-space-needle.jpg",
    city: "Seattle"
  },
  {
    id: "seattle-uwash-cherry-2",
    position: [0, 0],
    title: "U Washington Cherry Blossoms",
    description: "华盛顿导学的樱花树。",
    imageUrl: "/images/city/seattle-uwash-cherry-2.JPG",
    city: "Seattle"
  },
  {
    id: "seattle-uwash-cherry",
    position: [0, 0],
    title: "U Washington Cherry Blossoms",
    description: "华盛顿大学的樱花树可能比杜克花园还要多！",
    imageUrl: "/images/city/seattle-uwash-cherry.JPG",
    city: "Seattle"
  },
  {
    id: "seattle-uwash",
    position: [0, 0],
    title: "University of Washington",
    description: "华盛顿大学的标志是一个哈士奇狗",
    imageUrl: "/images/city/seattle-uwash.JPG",
    city: "Seattle"
  },
  {
    id: "seville-cathedral",
    position: [0, 0],
    title: "Cathedral",
    description: "塞尔维亚城市中央的大教堂。",
    imageUrl: "/images/city/seville-cathedral.jpg",
    city: "Seville"
  },
  {
    id: "seville-garden",
    position: [0, 0],
    title: "Seville Gardens",
    description: "塞尔维亚整整齐齐的花园。",
    imageUrl: "/images/city/seville-garden.JPG",
    city: "Seville"
  },
  {
    id: "suzhou-baomoyuan",
    position: [0, 0],
    title: "Suzhou Gardens",
    description: "苏州的园林体现了人造的自然风光",
    imageUrl: "/images/city/suzhou-baomoyuan.png",
    city: "Suzhou"
  },
  {
    id: "suzhou-garden",
    position: [0, 0],
    title: "Suzhou Gardens",
    description: "2023年毕业以前，我们去苏州旅游",
    imageUrl: "/images/city/suzhou-garden.png",
    city: "Suzhou"
  },
  {
    id: "virginia-massanuten-resort",
    position: [0, 0],
    title: "Virginia Ski Vacation",
    description: "弗吉尼亚州居然还可以滑雪？",
    imageUrl: "/images/city/virginia-massanuten-resort.png",
    city: "Virginia"
  },
  {
    id: "zibo-xujiacun",
    position: [0, 0],
    title: "Visiting Home for Chinese New Year",
    description: "春节到淄博回家过年！",
    imageUrl: "/images/city/zibo-xujiacun.png",
    city: "Zibo"
  }
];

export const locationMarkers: LocationMarker[] = [
  {
    id: "barcelona-sagrada",
    position: [41.4036, 2.1744],
    title: "Sagrada Familia",
    description: "著名建筑家高迪在巴塞罗那城设计的大教堂。",
    imageUrl: "/images/city/barcelona-sagrada.JPG",
    city: "Barcelona"
  },
  {
    id: "chimney-rock-bridge",
    position: [35.4329, -82.2505],
    title: "Chimney Rock State Park",
    description: "北卡西部的公园。",
    imageUrl: "/images/city/chimney-rock-bridge.png",
    city: "Chimney Rock"
  },
  {
    id: "dc-capitol-building",
    position: [38.8899, -77.0091],
    title: "Capitol Building",
    description: "美国首都的国会大厦。",
    imageUrl: "/images/city/dc-capitol-building.PNG",
    city: "Washington DC"
  },
  {
    id: "durham-duke-east-campus",
    position: [36.0082, -78.9132],
    title: "Duke East Campus",
    description: "杜卡大学东校院，大四回中国以前照的相。",
    imageUrl: "/images/city/durham-duke-east-campus.png",
    city: "Durham"
  },
  {
    id: "durham-duke-pitchforks-music",
    position: [36.0015, -78.9403],
    title: "Duke Pitchforks Music",
    description: "杜克大学西校院宿舍附近的音乐练习室。",
    imageUrl: "/images/city/durham-duke-pitchforks-music.png",
    city: "Durham"
  },
  {
    id: "durham-duke-pitchforks",
    position: [36.0015, -78.9403],
    title: "Duke Pitchforks",
    description: "杜克西校院食堂外面的楼梯。",
    imageUrl: "/images/city/durham-duke-pitchforks.png",
    city: "Durham"
  },
  {
    id: "granada-alhambra-road",
    position: [37.1760, -3.5881],
    title: "Alhambra Road",
    description: "前往格拉纳达著名的阿尔罕布拉宫殿的路。",
    imageUrl: "/images/city/granada-alhambra-road.jpg",
    city: "Granada"
  },
  {
    id: "granada-alhambra-view",
    position: [37.1760, -3.5881],
    title: "Alhambra View",
    description: "阿尔罕布拉宫殿看到的美景。",
    imageUrl: "/images/city/granada-alhambra-view.JPG",
    city: "Granada"
  },
  {
    id: "hangzhou-haagen-daz",
    position: [30.2518, 120.1716],
    title: "Haagen Daz",
    description: "杭州我和妈妈一起去吃的三球哈根达斯店。",
    imageUrl: "/images/city/hangzhou-haagen-daz.png",
    city: "Hangzhou"
  },
  {
    id: "hangzhou-lingyinsi",
    position: [30.2424, 120.0958],
    title: "杭州灵隐寺。",
    description: "",
    imageUrl: "/images/city/hangzhou-lingyinsi.png",
    city: "Hangzhou"
  },
  {
    id: "hangzhou-xihu",
    position: [30.2590, 120.1490],
    title: "Xihu",
    description: "西湖美景，三月天",
    imageUrl: "/images/city/hangzhou-xihu.png",
    city: "Hangzhou"
  },
  {
    id: "hong-kong-victoria-bay",
    position: [22.2783, 114.1747],
    title: "Victoria Bay",
    description: "大四和妈妈去香港旅游。",
    imageUrl: "/images/city/hong-kong-victoria-bay.png",
    city: "Hong Kong"
  },
  {
    id: "hong-kong-victoria-peak",
    position: [22.2759, 114.1455],
    title: "Victoria Peak",
    description: "和妈妈一起爬香港的维多利亚峰。",
    imageUrl: "/images/city/hong-kong-victoria-peak.png",
    city: "Hong Kong"
  },
  {
    id: "kunshan-dku-graduation",
    position: [31.3875, 120.9470],
    title: "DKU Graduation",
    description: "昆山杜克2023年毕业典礼。",
    imageUrl: "/images/city/kunshan-dku-graduation.png",
    city: "Kunshan"
  },
  {
    id: "madrid-royal-garden",
    position: [40.4168, -3.7038],
    title: "Royal Garden",
    description: "2024年和全家去马德里的皇家花园。",
    imageUrl: "/images/city/madrid-royal-garden.jpg",
    city: "Madrid"
  },
  {
    id: "madrid-royal-palace",
    position: [40.4180, -3.7144],
    title: "Royal Palace",
    description: "马德里皇宫的美景。",
    imageUrl: "/images/city/madrid-royal-palace.jpg",
    city: "Madrid"
  },
  {
    id: "nyc-apartment-home",
    position: [40.7128, -74.0060],
    title: "New York Home",
    description: "2024年在纽约第一次买房子！",
    imageUrl: "/images/city/nyc-apartment-home.png",
    city: "NYC"
  },
  {
    id: "nyc-chelsea-market",
    position: [40.7425, -74.0061],
    title: "Chelsea Market",
    description: "纽约哈德森和旁边的小商场",
    imageUrl: "/images/city/nyc-chelsea-market.png",
    city: "NYC"
  },
  {
    id: "nyc-edge",
    position: [40.7538, -73.9984],
    title: "The Edge",
    description: "纽约最新的观景台。",
    imageUrl: "/images/city/nyc-edge.jpg",
    city: "NYC"
  },
  {
    id: "nyc-friends-experience",
    position: [40.7428, -73.9926],
    title: "Friends Experience",
    description: "和妈妈一起参观朋友电视剧的博物馆！",
    imageUrl: "/images/city/nyc-friends-experience.JPG",
    city: "NYC"
  },
  {
    id: "nyc-met-museum",
    position: [40.7794, -73.9632],
    title: "Metropolitan Museum",
    description: "和妈妈一起去纽约大都会艺术博物馆",
    imageUrl: "/images/city/nyc-met-museum.JPG",
    city: "NYC"
  },
  {
    id: "nyc-roosevelt-island",
    position: [40.7614, -73.9502],
    title: "Roosevelt Island",
    description: "刚到纽约被雨淋湿以前的美好时光。",
    imageUrl: "/images/city/nyc-roosevelt-island.png",
    city: "NYC"
  },
  {
    id: "nyc-vessel-shed",
    position: [40.7538, -74.0022],
    title: "The Shed",
    description: "能不能推得动？纽约的移动大楼",
    imageUrl: "/images/city/nyc-vessel-shed.JPG",
    city: "NYC"
  },
  {
    id: "qingdao-baifan",
    position: [36.0640, 120.4082],
    title: "White Sail",
    description: "青岛金沙滩的大白帆！",
    imageUrl: "/images/city/qingdao-baifan.JPG",
    city: "Qingdao"
  },
  {
    id: "qingdao-beach-concert-hall",
    position: [36.0640, 120.4082],
    title: "Concert Hall",
    description: "美丽的金沙滩影月亭",
    imageUrl: "/images/city/qingdao-beach-concert-hall.JPG",
    city: "Qingdao"
  },
  {
    id: "seattle-airbnb-inside",
    position: [47.6062, -122.3321],
    title: "Seattle Vacation",
    description: "2025果果到西雅图和妈妈，姥姥，爷爷碰头",
    imageUrl: "/images/city/seattle-airbnb-inside.jpg",
    city: "Seattle"
  },
  {
    id: "seattle-airbnb-outside",
    position: [47.6062, -122.3321],
    title: "Seattle Airbnb Views",
    description: "西雅图房子的美景。",
    imageUrl: "/images/city/seattle-airbnb-outside.jpg",
    city: "Seattle"
  },
  {
    id: "seattle-airbnb",
    position: [47.6062, -122.3321],
    title: "Seattle Airbnb",
    description: "西雅图旅游的家",
    imageUrl: "/images/city/seattle-airbnb.png",
    city: "Seattle"
  },
  {
    id: "seattle-chihully-2",
    position: [47.6205, -122.3493],
    title: "Chihuly Garden and Glass",
    description: "奇胡利的玻璃博物馆",
    imageUrl: "/images/city/seattle-chihully-2.png",
    city: "Seattle"
  },
  {
    id: "seattle-chihully-glass-hall",
    position: [47.6205, -122.3493],
    title: "Chihuly Glass Hall",
    description: "奇胡利玻璃博物馆的主要景点，玻璃大厅。",
    imageUrl: "/images/city/seattle-chihully-glass-hall.jpg",
    city: "Seattle"
  },
  {
    id: "seattle-chihully-museum",
    position: [47.6205, -122.3493],
    title: "Chihuly Museum",
    description: "奇胡利玻璃博物馆",
    imageUrl: "/images/city/seattle-chihully-museum.jpg",
    city: "Seattle"
  },
  {
    id: "seattle-chihuly",
    position: [47.6205, -122.3493],
    title: "Chihuly Garden and Glass",
    description: "奇胡利玻璃博物馆",
    imageUrl: "/images/city/seattle-chihuly.png",
    city: "Seattle"
  },
  {
    id: "seattle-lake-union",
    position: [47.6392, -122.3337],
    title: "Lake Union",
    description: "西雅图的联合湖",
    imageUrl: "/images/city/seattle-lake-union.jpg",
    city: "Seattle"
  },
  {
    id: "seattle-mt-rainier",
    position: [46.8523, -121.7603],
    title: "Mt Rainier",
    description: "我和妈妈2021年爬过雷尼尔雪山。",
    imageUrl: "/images/city/seattle-mt-rainier.png",
    city: "Seattle"
  },
  {
    id: "seattle-pike-place-downstairs",
    position: [47.6097, -122.3422],
    title: "Pike Place Market",
    description: "西雅图的派克市场充满了艺术品。",
    imageUrl: "/images/city/seattle-pike-place-downstairs.jpg",
    city: "Seattle"
  },
  {
    id: "seattle-pike-place-outdoor",
    position: [47.6097, -122.3422],
    title: "Pike Place Market",
    description: "西雅图派克市场的标志是一个小猪！",
    imageUrl: "/images/city/seattle-pike-place-outdoor.png",
    city: "Seattle"
  },
  {
    id: "seattle-pike-place-restaurant",
    position: [47.6097, -122.3422],
    title: "Pike Place Market Seafood",
    description: "派克市场附近和妈妈，姥姥，爷爷吃的海鲜汤。",
    imageUrl: "/images/city/seattle-pike-place-restaurant.png",
    city: "Seattle"
  },
  {
    id: "seattle-pike-place-skyline",
    position: [47.6097, -122.3422],
    title: "Seattle Waterside Views",
    description: "派克市场的城市美景。",
    imageUrl: "/images/city/seattle-pike-place-skyline.jpg",
    city: "Seattle"
  },
  {
    id: "seattle-sculture-park-2",
    position: [47.6166, -122.3553],
    title: "Sculpture Park",
    description: "西雅图靠水的雕塑公园。",
    imageUrl: "/images/city/seattle-sculture-park-2.png",
    city: "Seattle"
  },
  {
    id: "seattle-sculture-park",
    position: [47.6166, -122.3553],
    title: "Sculpture Park",
    description: "西雅图雕塑公园离太空针不太远。",
    imageUrl: "/images/city/seattle-sculture-park.png",
    city: "Seattle"
  },
  {
    id: "seattle-space-needle",
    position: [47.6205, -122.3493],
    title: "The Space Needle",
    description: "从这里可以看见西雅图的城市标志，太空针！",
    imageUrl: "/images/city/seattle-space-needle.jpg",
    city: "Seattle"
  },
  {
    id: "seattle-uwash-cherry-2",
    position: [47.6553, -122.3035],
    title: "U Washington Cherry Blossoms",
    description: "华盛顿导学的樱花树。",
    imageUrl: "/images/city/seattle-uwash-cherry-2.JPG",
    city: "Seattle"
  },
  {
    id: "seattle-uwash-cherry",
    position: [47.6553, -122.3035],
    title: "U Washington Cherry Blossoms",
    description: "华盛顿大学的樱花树可能比杜克花园还要多！",
    imageUrl: "/images/city/seattle-uwash-cherry.JPG",
    city: "Seattle"
  },
  {
    id: "seattle-uwash",
    position: [47.6553, -122.3035],
    title: "University of Washington",
    description: "华盛顿大学的标志是一个哈士奇狗",
    imageUrl: "/images/city/seattle-uwash.JPG",
    city: "Seattle"
  },
  {
    id: "seville-cathedral",
    position: [37.3857, -5.9938],
    title: "Cathedral",
    description: "塞尔维亚城市中央的大教堂。",
    imageUrl: "/images/city/seville-cathedral.jpg",
    city: "Seville"
  },
  {
    id: "seville-garden",
    position: [37.3765, -5.9874],
    title: "Seville Gardens",
    description: "塞尔维亚整整齐齐的花园。",
    imageUrl: "/images/city/seville-garden.JPG",
    city: "Seville"
  },
  {
    id: "suzhou-baomoyuan",
    position: [31.3001, 120.6296],
    title: "Suzhou Gardens",
    description: "苏州的园林体现了人造的自然风光",
    imageUrl: "/images/city/suzhou-baomoyuan.png",
    city: "Suzhou"
  },
  {
    id: "suzhou-garden",
    position: [31.3001, 120.6296],
    title: "Suzhou Gardens",
    description: "2023年毕业以前，我们去苏州旅游",
    imageUrl: "/images/city/suzhou-garden.png",
    city: "Suzhou"
  },
  {
    id: "virginia-massanuten-resort",
    position: [38.4054, -78.7522],
    title: "Virginia Ski Vacation",
    description: "弗吉尼亚州居然还可以滑雪？",
    imageUrl: "/images/city/virginia-massanuten-resort.png",
    city: "Virginia"
  },
  {
    id: "zibo-xujiacun",
    position: [36.8344, 118.0546],
    title: "Visiting Home for Chinese New Year",
    description: "春节到淄博回家过年！",
    imageUrl: "/images/city/zibo-xujiacun.png",
    city: "Zibo"
  }
];
