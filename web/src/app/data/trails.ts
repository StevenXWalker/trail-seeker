export type Trail = {
  id: string;
  slug: string;
  name: string;
  rating: number;
  miles: number;
  gain: number;
  difficulty: string;
  time: string;
  weather: string;
  condition: string;
  reportAgeDays: number;
  permit: string;
  wtaRank: number;
  scoreBreakdown: string;
  mapPosition: { top: string; left: string };
  summary: {
    seasonality: string;
    traffic: string;
    roadAccess: string;
    trailType: string;
    dogFriendly: string;
  };
  conditions: string[];
  weekendWeather: { day: string; detail: string }[];
};

export const trails: Trail[] = [
  {
    id: "t1",
    slug: "snow-lake",
    name: "Snow Lake",
    rating: 4.7,
    miles: 7.4,
    gain: 1800,
    difficulty: "Moderate",
    time: "5-6h",
    weather: "OK",
    condition: "Snowy",
    reportAgeDays: 5,
    permit: "NW Forest Pass",
    wtaRank: 3,
    scoreBreakdown: "Filter 92 | Recency 85 | Weather 78 | Conditions 70 | Rating 88",
    mapPosition: { top: "30%", left: "35%" },
    summary: {
      seasonality: "Jun-Oct",
      traffic: "Moderate",
      roadAccess: "Open",
      trailType: "Out and back",
      dogFriendly: "Yes (leash)",
    },
    conditions: [
      "Snow on upper trail, traction recommended",
      "Trail mostly clear to the lake",
      "Parking lot fills by 9am",
    ],
    weekendWeather: [
      { day: "Saturday", detail: "45F, 20% precip, snow level 4k, wind low" },
      { day: "Sunday", detail: "47F, 10% precip, snow level 4.5k, wind light" },
    ],
  },
  {
    id: "t2",
    slug: "rattlesnake-ledge",
    name: "Rattlesnake Ledge",
    rating: 4.6,
    miles: 5.2,
    gain: 1200,
    difficulty: "Moderate",
    time: "3-4h",
    weather: "Dry",
    condition: "Good",
    reportAgeDays: 3,
    permit: "Discover Pass",
    wtaRank: 1,
    scoreBreakdown: "Filter 88 | Recency 90 | Weather 86 | Conditions 92 | Rating 84",
    mapPosition: { top: "48%", left: "55%" },
    summary: {
      seasonality: "All year",
      traffic: "High",
      roadAccess: "Open",
      trailType: "Out and back",
      dogFriendly: "Yes (leash)",
    },
    conditions: [
      "Clear trail to the ledge",
      "Crowds mid-morning",
      "Trailhead parking limited",
    ],
    weekendWeather: [
      { day: "Saturday", detail: "48F, 5% precip, wind low" },
      { day: "Sunday", detail: "50F, 10% precip, wind light" },
    ],
  },
  {
    id: "t3",
    slug: "granite-mountain",
    name: "Granite Mountain",
    rating: 4.5,
    miles: 8.6,
    gain: 3800,
    difficulty: "Hard",
    time: "6-7h",
    weather: "OK",
    condition: "Snowy",
    reportAgeDays: 6,
    permit: "NW Forest Pass",
    wtaRank: 5,
    scoreBreakdown: "Filter 80 | Recency 75 | Weather 74 | Conditions 62 | Rating 86",
    mapPosition: { top: "62%", left: "42%" },
    summary: {
      seasonality: "Jun-Oct",
      traffic: "Moderate",
      roadAccess: "Open",
      trailType: "Out and back",
      dogFriendly: "Yes (leash)",
    },
    conditions: [
      "Snow on switchbacks",
      "Windy near the summit",
      "Carry traction and layers",
    ],
    weekendWeather: [
      { day: "Saturday", detail: "42F, 15% precip, snow level 4.2k" },
      { day: "Sunday", detail: "44F, 15% precip, wind moderate" },
    ],
  },
  {
    id: "t4",
    slug: "kendall-katwalk",
    name: "Kendall Katwalk",
    rating: 4.6,
    miles: 12.2,
    gain: 3300,
    difficulty: "Hard",
    time: "7-8h",
    weather: "Mixed",
    condition: "Snowy",
    reportAgeDays: 8,
    permit: "NW Forest Pass",
    wtaRank: 4,
    scoreBreakdown: "Filter 76 | Recency 72 | Weather 70 | Conditions 58 | Rating 82",
    mapPosition: { top: "40%", left: "68%" },
    summary: {
      seasonality: "Jul-Oct",
      traffic: "Moderate",
      roadAccess: "Open",
      trailType: "Out and back",
      dogFriendly: "No",
    },
    conditions: [
      "Snowfields on exposed sections",
      "Microspikes recommended",
      "Start early for parking",
    ],
    weekendWeather: [
      { day: "Saturday", detail: "41F, 25% precip, wind moderate" },
      { day: "Sunday", detail: "45F, 20% precip, wind light" },
    ],
  },
  {
    id: "t5",
    slug: "lake-22",
    name: "Lake 22",
    rating: 4.7,
    miles: 5.4,
    gain: 1350,
    difficulty: "Moderate",
    time: "3-4h",
    weather: "Light rain",
    condition: "Good",
    reportAgeDays: 2,
    permit: "NW Forest Pass",
    wtaRank: 2,
    scoreBreakdown: "Filter 90 | Recency 95 | Weather 60 | Conditions 88 | Rating 90",
    mapPosition: { top: "70%", left: "60%" },
    summary: {
      seasonality: "All year",
      traffic: "High",
      roadAccess: "Open",
      trailType: "Out and back",
      dogFriendly: "Yes (leash)",
    },
    conditions: [
      "Trail in good shape",
      "Snow near the lake",
      "Parking fills quickly",
    ],
    weekendWeather: [
      { day: "Saturday", detail: "46F, 30% precip, wind light" },
      { day: "Sunday", detail: "48F, 20% precip, wind low" },
    ],
  },
];

export const recentHikes = [
  {
    id: "r1",
    name: "Rattlesnake Ledge",
    date: "Feb 24",
    miles: 5.2,
    gain: 1200,
    notes: ["Good", "Dry", "Quick after-work"],
    thumb: "alt",
  },
  {
    id: "r2",
    name: "Lake 22",
    date: "Feb 10",
    miles: 5.4,
    gain: 1350,
    notes: ["Snowy", "Report added", "NW Forest Pass"],
    thumb: "third",
  },
];

export const bucketList = [
  { id: "b1", name: "Enchantments (Core Zone)", appRank: 1, wtaRank: 2 },
  { id: "b2", name: "Colchuck Lake", appRank: 2, wtaRank: 1 },
  { id: "b3", name: "Seven Lakes Basin", appRank: 3, wtaRank: 4 },
  { id: "b4", name: "Maple Pass", appRank: 4, wtaRank: 3 },
  { id: "b5", name: "Hoh River", appRank: 5, wtaRank: 6 },
];

export const rankingWeights = {
  reportVsWeather: 60,
  filterMatch: 80,
  conditions: 70,
  ratings: 50,
};
