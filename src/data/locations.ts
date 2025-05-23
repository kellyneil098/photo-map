// src/data/locations.ts
import { LocationMarker } from '../types/types';

export const locationMarkers: LocationMarker[] = [
  {
    id: "barcelona-sagrada",
    position: [41.4036, 2.1744],
    title: "Sagrada Familia",
    description: "著名建筑家高迪在巴塞罗那城设计的大教堂。",
    imageUrl: `${process.env.PUBLIC_URL}/images/barcelona-sagrada.JPG`,
    city: "Barcelona"
  },
  {
    id: "chimney-rock-bridge",
    position: [35.4329, -82.2505],
    title: "Chimney Rock State Park",
    description: "北卡西部的公园。",
    imageUrl: `${process.env.PUBLIC_URL}/images/chimney-rock-bridge.png`,
    city: "Chimney Rock"
  },
  {
    id: "dc-capitol-building",
    position: [38.8899, -77.0091],
    title: "Capitol Building",
    description: "美国首都的国会大厦。",
    imageUrl: `${process.env.PUBLIC_URL}/images/dc-capitol-building.PNG`,
    city: "Washington DC"
  },
  {
    id: "durham-duke-east-campus",
    position: [36.0082, -78.9132],
    title: "Duke East Campus",
    description: "杜卡大学东校院，大四回中国以前照的相。",
    imageUrl: `${process.env.PUBLIC_URL}/images/durham-duke-east-campus.png`,
    city: "Durham"
  },
  {
    id: "durham-duke-pitchforks-music",
    position: [35.9991174,-78.9367734],
    title: "Duke Pitchforks Music",
    description: "杜克大学西校院宿舍附近的音乐练习室。",
    imageUrl: `${process.env.PUBLIC_URL}/images/durham-duke-pitchforks-music.png`,
    city: "Durham"
  },
  {
    id: "durham-duke-pitchforks",
    position: [35.9993631,-78.9375388],
    title: "Duke Pitchforks",
    description: "杜克西校院食堂外面的楼梯。",
    imageUrl: `${process.env.PUBLIC_URL}/images/durham-duke-pitchforks.png`,
    city: "Durham"
  },
  {
    id: "granada-alhambra-road",
    position: [37.1742676,-3.589876],
    title: "Alhambra Road",
    description: "前往格拉纳达著名的阿尔罕布拉宫殿的路。",
    imageUrl: `${process.env.PUBLIC_URL}/images/granada-alhambra-road.jpg`,
    city: "Granada"
  },
  {
    id: "granada-alhambra-view",
    position: [37.1764399,-3.5881639],
    title: "Alhambra View",
    description: "阿尔罕布拉宫殿看到的美景。",
    imageUrl: `${process.env.PUBLIC_URL}/images/granada-alhambra-view.JPG`,
    city: "Granada"
  },
  {
    id: "hangzhou-haagen-daz",
    position: [30.238141,120.1464156],
    title: "Haagen Daz",
    description: "杭州我和妈妈一起去吃的三球哈根达斯店。",
    imageUrl: `${process.env.PUBLIC_URL}/images/hangzhou-haagen-daz.png`,
    city: "Hangzhou"
  },
  {
    id: "hangzhou-lingyinsi",
    position: [30.2424, 120.0958],
    title: "Lingyin Temple",
    description: "杭州灵隐寺。",
    imageUrl: `${process.env.PUBLIC_URL}/images/hangzhou-lingyinsi.png`,
    city: "Hangzhou"
  },
  {
    id: "hangzhou-xihu",
    position: [30.2590, 120.1490],
    title: "West Lake",
    description: "西湖美景，三月天",
    imageUrl: `${process.env.PUBLIC_URL}/images/hangzhou-xihu.png`,
    city: "Hangzhou"
  },
  {
    id: "hong-kong-victoria-bay",
    position: [22.2937631,114.1679276],
    title: "Victoria Harbour",
    description: "大四和妈妈去香港旅游。",
    imageUrl: `${process.env.PUBLIC_URL}/images/hong-kong-victoria-bay.png`,
    city: "Hong Kong"
  },
  {
    id: "hong-kong-victoria-peak",
    position: [22.2759, 114.1455],
    title: "Victoria Peak",
    description: "和妈妈一起爬香港的维多利亚峰。",
    imageUrl: `${process.env.PUBLIC_URL}/images/hong-kong-victoria-peak.png`,
    city: "Hong Kong"
  },
  {
    id: "kunshan-dku-graduation",
    position: [31.3875, 120.9470],
    title: "DKU Graduation",
    description: "昆山杜克2023年毕业典礼。",
    imageUrl: `${process.env.PUBLIC_URL}/images/kunshan-dku-graduation.png`,
    city: "Kunshan"
  },
  {
    id: "madrid-royal-garden",
    position: [40.417955,-3.7168869],
    title: "Royal Garden",
    description: "2024年和全家去马德里的皇家花园。",
    imageUrl: `${process.env.PUBLIC_URL}/images/madrid-royal-garden.jpg`,
    city: "Madrid"
  },
  {
    id: "madrid-royal-palace",
    position: [40.4180, -3.7144],
    title: "Royal Palace",
    description: "马德里皇宫的美景。",
    imageUrl: `${process.env.PUBLIC_URL}/images/madrid-royal-palace.jpg`,
    city: "Madrid"
  },
  {
    id: "nyc-apartment-home",
    position: [40.7356669,-73.9925903],
    title: "New York Home",
    description: "2024年在纽约第一次买房子！",
    imageUrl: `${process.env.PUBLIC_URL}/images/nyc-apartment-home.png`,
    city: "NYC"
  },
  {
    id: "nyc-chelsea-market",
    position: [40.7425, -74.0061],
    title: "Chelsea Market",
    description: "纽约哈德森和旁边的小商场",
    imageUrl: `${process.env.PUBLIC_URL}/images/nyc-chelsea-market.png`,
    city: "NYC"
  },
  {
    id: "nyc-edge",
    position: [40.7538, -73.9984],
    title: "The Edge",
    description: "纽约最新的观景台。",
    imageUrl: `${process.env.PUBLIC_URL}/images/nyc-edge.jpg`,
    city: "NYC"
  },
  {
    id: "nyc-friends-experience",
    position: [40.7394044,-73.9877419],
    title: "Friends Experience",
    description: "和妈妈一起参观朋友电视剧的博物馆！",
    imageUrl: `${process.env.PUBLIC_URL}/images/nyc-friends-experience.JPG`,
    city: "NYC"
  },
  {
    id: "nyc-met-museum",
    position: [40.7794, -73.9632],
    title: "Metropolitan Museum",
    description: "和妈妈一起去纽约大都会艺术博物馆",
    imageUrl: `${process.env.PUBLIC_URL}/images/nyc-met-museum.JPG`,
    city: "NYC"
  },
  {
    id: "nyc-roosevelt-island",
    position: [40.7614, -73.9502],
    title: "Roosevelt Island",
    description: "刚到纽约被雨淋湿以前的美好时光。",
    imageUrl: `${process.env.PUBLIC_URL}/images/nyc-roosevelt-island.png`,
    city: "NYC"
  },
  {
    id: "nyc-vessel-shed",
    position: [40.7538, -74.0022],
    title: "The Shed",
    description: "能不能推得动？纽约的移动大楼",
    imageUrl: `${process.env.PUBLIC_URL}/images/nyc-vessel-shed.JPG`,
    city: "NYC"
  },
  {
    id: "qingdao-baifan",
    position: [35.9578539,120.2450017],
    title: "White Sail",
    description: "青岛金沙滩的大白帆！",
    imageUrl: `${process.env.PUBLIC_URL}/images/qingdao-baifan.JPG`,
    city: "Qingdao"
  },
  {
    id: "qingdao-beach-concert-hall",
    position: [35.9554903,120.2386469],
    title: "Concert Hall",
    description: "美丽的金沙滩影月亭",
    imageUrl: `${process.env.PUBLIC_URL}/images/qingdao-beach-concert-hall.JPG`,
    city: "Qingdao"
  },
  {
    id: "seattle-airbnb-inside",
    position: [47.6298915,-122.3512135],
    title: "Seattle Vacation",
    description: "2025果果到西雅图和妈妈，姥姥，爷爷碰头",
    imageUrl: `${process.env.PUBLIC_URL}/images/seattle-airbnb-inside.jpg`,
    city: "Seattle"
  },
  {
    id: "seattle-airbnb-outside",
    position: [47.6296432,-122.3497501],
    title: "Seattle Airbnb Views",
    description: "西雅图房子的美景。",
    imageUrl: `${process.env.PUBLIC_URL}/images/seattle-airbnb-outside.jpg`,
    city: "Seattle"
  },
  {
    id: "seattle-airbnb",
    position: [47.6297609,-122.3486957],
    title: "Seattle Airbnb",
    description: "西雅图旅游的家",
    imageUrl: `${process.env.PUBLIC_URL}/images/seattle-airbnb.png`,
    city: "Seattle"
  },
  {
    id: "seattle-chihully-2",
    position: [47.6202047,-122.3504763],
    title: "Chihuly Garden and Glass",
    description: "奇胡利的玻璃博物馆",
    imageUrl: `${process.env.PUBLIC_URL}/images/seattle-chihully-2.png`,
    city: "Seattle"
  },
  {
    id: "seattle-chihully-glass-hall",
    position: [47.6205, -122.3493],
    title: "Chihuly Glass Hall",
    description: "奇胡利玻璃博物馆的主要景点，玻璃大厅。",
    imageUrl: `${process.env.PUBLIC_URL}/images/seattle-chihully-glass-hall.jpg`,
    city: "Seattle"
  },
  {
    id: "seattle-chihully-museum",
    position: [47.6210272,-122.3500569],
    title: "Chihuly Museum",
    description: "奇胡利玻璃博物馆",
    imageUrl: `${process.env.PUBLIC_URL}/images/seattle-chihully-museum.jpg`,
    city: "Seattle"
  },
  {
    id: "seattle-chihuly",
    position: [47.6205258,-122.351068],
    title: "Chihuly Garden and Glass",
    description: "奇胡利玻璃博物馆",
    imageUrl: `${process.env.PUBLIC_URL}/images/seattle-chihuly.png`,
    city: "Seattle"
  },
  {
    id: "seattle-lake-union",
    position: [47.6275704, -122.3395226],
    title: "Lake Union",
    description: "西雅图的联合湖",
    imageUrl: `${process.env.PUBLIC_URL}/images/seattle-lake-union.jpg`,
    city: "Seattle"
  },
  {
    id: "seattle-mt-rainier",
    position: [46.8523, -121.7603],
    title: "Mt Rainier",
    description: "我和妈妈2021年爬过雷尼尔雪山。",
    imageUrl: `${process.env.PUBLIC_URL}/images/seattle-mt-rainier.png`,
    city: "Seattle"
  },
  {
    id: "seattle-pike-place-downstairs",
    position: [47.6093886,-122.3411803],
    title: "Pike Place Market",
    description: "西雅图的派克市场充满了艺术品。",
    imageUrl: `${process.env.PUBLIC_URL}/images/seattle-pike-place-downstairs.jpg`,
    city: "Seattle"
  },
  {
    id: "seattle-pike-place-outdoor",
    position: [47.6092442,-122.3428555],
    title: "Pike Place Market",
    description: "西雅图派克市场的标志是一个小猪！",
    imageUrl: `${process.env.PUBLIC_URL}/images/seattle-pike-place-outdoor.png`,
    city: "Seattle"
  },
  {
    id: "seattle-pike-place-restaurant",
    position: [47.6107569,-122.3432738],
    title: "Pike Place Market Seafood",
    description: "派克市场附近和妈妈，姥姥，爷爷吃的海鲜汤。",
    imageUrl: `${process.env.PUBLIC_URL}/images/seattle-pike-place-restaurant.png`,
    city: "Seattle"
  },
  {
    id: "seattle-pike-place-skyline",
    position: [47.6018233,-122.3368536],
    title: "Seattle Waterside Views",
    description: "派克市场的城市美景。",
    imageUrl: `${process.env.PUBLIC_URL}/images/seattle-pike-place-skyline.jpg`,
    city: "Seattle"
  },
  {
    id: "seattle-sculture-park-2",
    position: [47.6170941,-122.3563036],
    title: "Sculpture Park",
    description: "西雅图靠水的雕塑公园。",
    imageUrl: `${process.env.PUBLIC_URL}/images/seattle-sculture-park-2.png`,
    city: "Seattle"
  },
  {
    id: "seattle-sculture-park",
    position: [47.6166, -122.3553],
    title: "Sculpture Park",
    description: "西雅图雕塑公园离太空针不太远。",
    imageUrl: `${process.env.PUBLIC_URL}/images/seattle-sculture-park.png`,
    city: "Seattle"
  },
  {
    id: "seattle-space-needle",
    position: [47.6214991,-122.3477106],
    title: "The Space Needle",
    description: "从这里可以看见西雅图的城市标志，太空针！",
    imageUrl: `${process.env.PUBLIC_URL}/images/seattle-space-needle.jpg`,
    city: "Seattle"
  },
  {
    id: "seattle-uwash-cherry-2",
    position: [47.6586553,-122.3055554],
    title: "U Washington Cherry Blossoms",
    description: "华盛顿导学的樱花树。",
    imageUrl: `${process.env.PUBLIC_URL}/images/seattle-uwash-cherry-2.JPG`,
    city: "Seattle"
  },
  {
    id: "seattle-uwash-cherry",
    position: [47.6566989,-122.3080666],
    title: "U Washington Cherry Blossoms",
    description: "华盛顿大学的樱花树可能比杜克花园还要多！",
    imageUrl: `${process.env.PUBLIC_URL}/images/seattle-uwash-cherry.JPG`,
    city: "Seattle"
  },
  {
    id: "seattle-uwash",
    position: [47.6553, -122.3035],
    title: "University of Washington",
    description: "华盛顿大学的标志是一个哈士奇狗",
    imageUrl: `${process.env.PUBLIC_URL}/images/seattle-uwash.JPG`,
    city: "Seattle"
  },
  {
    id: "seville-cathedral",
    position: [37.3857, -5.9938],
    title: "Cathedral",
    description: "塞尔维亚城市中央的大教堂。",
    imageUrl: `${process.env.PUBLIC_URL}/images/seville-cathedral.jpg`,
    city: "Seville"
  },
  {
    id: "seville-garden",
    position: [37.3765, -5.9874],
    title: "Seville Gardens",
    description: "塞尔维亚整整齐齐的花园。",
    imageUrl: `${process.env.PUBLIC_URL}/images/seville-garden.JPG`,
    city: "Seville"
  },
  {
    id: "suzhou-baomoyuan",
    position: [31.324224,120.6273951],
    title: "Suzhou Gardens",
    description: "苏州的园林体现了人造的自然风光",
    imageUrl: `${process.env.PUBLIC_URL}/images/suzhou-baomoyuan.png`,
    city: "Suzhou"
  },
  {
    id: "suzhou-garden",
    position: [31.3202005,120.6238243],
    title: "Suzhou Gardens",
    description: "2023年毕业以前，我们去苏州旅游",
    imageUrl: `${process.env.PUBLIC_URL}/images/suzhou-garden.png`,
    city: "Suzhou"
  },
  {
    id: "virginia-massanuten-resort",
    position: [38.4044354,-78.7245145],
    title: "Massanutten Ski Vacation",
    description: "弗吉尼亚州居然还可以滑雪？",
    imageUrl: `${process.env.PUBLIC_URL}/images/virginia-massanuten-resort.png`,
    city: "Virginia"
  },
  {
    id: "zibo-xujiacun",
    position: [36.9058402,118.3847983],
    title: "Visiting Home for Chinese New Year",
    description: "春节到淄博回家过年！",
    imageUrl: `${process.env.PUBLIC_URL}/images/zibo-xujiacun.png`,
    city: "Zibo"
  }
];
