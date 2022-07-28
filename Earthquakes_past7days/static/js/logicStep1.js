// We create the tile layer that will be the background of our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Accessing the Toronto neighborhoods GeoJSON URL.
let torontoHoods = "https://raw.githubusercontent.com/jkmom/Mapping_Earthquake2/main/torontoNeighborhoods.json";

// We create the dark view tile layer that will be an option for our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Create a base layer that holds both maps
let baseMaps={
    "Streets": streets,
    "Satellite":satelliteStreets
};


// Create the map object with center and zoom level.
//let map = L.map('mapid').setView([30, 30], 2);
let map= L.map("mapid",{
    center:[39.5,-98.5],
    zoom:3,
    layers:[streets]
})
// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);
// Create a style for the lines.
let myStyle = {
    color: "lightblue",
    weight: 2
}
//Grabbing our GeoJSON data.(from previous practice)
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data) 
{ // Creating a GeoJSON layer with the retrieved data.
    L.geoJson(data).addTo(map)
}
);


