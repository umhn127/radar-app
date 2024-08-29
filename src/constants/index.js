export const options = {
  method: "GET",
  url: "https://flight-radar1.p.rapidapi.com/flights/list-in-boundary",
  params: {
    bl_lat: "34.395945",
    bl_lng: "24.795437",
    tr_lat: "43.431971",
    tr_lng: "44.980891",
    limit: "300",
  },
  headers: {
    "x-rapidapi-key": "7864b53fd6msh9c19338752b3748p19a239jsn33d266d7665b",
    "x-rapidapi-host": "flight-radar1.p.rapidapi.com",
  },
};

export const dOptions = {
  headers: {
    "x-rapidapi-key": "7864b53fd6msh9c19338752b3748p19a239jsn33d266d7665b",
    "x-rapidapi-host": "flight-radar1.p.rapidapi.com",
  },
};
