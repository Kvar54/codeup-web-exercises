"use strict";
// Base URL for forecast API
const OPEN_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/forecast';
let searchBox = document.querySelector('#user-input');
let searchBtn = document.querySelector('#search');
function initializedMap() {
    mapboxgl.accessToken = MAPBOX_TOKEN;
    const mapOptions = {
        container: "map",
        // accepts the id, but you don't need a hashtag because this only accepts the id
        style: "mapbox://styles/mapbox/outdoors-v12",
        zoom:8,
        center: [-95.712891, 37.09024]
    }
    return new mapboxgl.Map(mapOptions);
}
// const latLng = [-95.712891, 37.09024];
const map = initializedMap();
function createMarker(map){
    map.center
    const marker = new mapboxgl.Marker()
        .setLngLat(latLng)
        .addTo(map);
    // createPopup(marker)
}

// Simple way to create URL for request based on coordinates
function getWeatherURL(coordinates) {
    return `${OPEN_WEATHER_URL}?lat=${coordinates[1]}&lon=${coordinates[0]}&units=imperial&appid=${OPEN_WEATHER_APPID}`;
}

// geocode(userInput),MAPBOX_TOKEN.then(function(results){

// });
function getWeatherLatLng (map) {
    const coords = [map.getCenter().lng, map.getCenter().lat];
    return coords;
}

// const ALAMO_COORDINATES = ['29.4260', '-98.4861'];
// const GET_COORDINATES = [];

// TODO: log URL

// console.log(getWeatherURL(ALAMO_COORDINATES[0], ALAMO_COORDINATES[1]));

function displayData(data) {
    const resultElement = document.querySelector("#result");
    resultElement.innerHTML = "";

    // Filter the data for a specific timeframe (e.g., 3 hours) within the 5-day forecast
    const filteredData = data.list.filter(item => {
        // Modify the condition as per your specific timeframe requirement
        const timeFrame = item.dt_txt.split(" ")[1]; // Extract the time from the date-time string
        return timeFrame === "03:00:00"; // Filter for items at 3:00:00
    });

    filteredData.forEach(item => {
        const emptyDiv = document.createElement("div");
        emptyDiv.textContent = `
            ${item.dt_txt.split(" ")[0]},
            ${item.main.temp_min}°F / ${item.main.temp_max}°F 
            Description ${item.weather[0].description},
            Humidity: ${item.main.humidity},
             Wind: ${item.wind.speed},
             Feels like: ${item.main.feels_like}°F,
            Pressure: ${item.main.pressure}
             `;
        resultElement.appendChild(emptyDiv);
    });
}

function getData(map) {
    const URL = getWeatherURL(getWeatherLatLng(map));
    $.ajax(URL)
        .done(data => {
            console.log(data);
            displayData(data); // Calling the displayData function to append the data to the HTML
        })
        .fail(console.error);
}

getData(map);



// createMarker(map);

//    Events

searchBox.addEventListener('input', (e)=>{
    console.log(e.target.value);
});
searchBtn.addEventListener('click', () => {})
map.on('mouseup', ()=>{
    getData(map);
});
map.on('click mouseup', () => {
    getData(map);
});







// const dataArray = getArrayFromAPI();
//
// for (let i = 0; i < dataArray.length; i++) {
//     const item = dataArray[i];
//     const humidity = item.main.humidity;
//     const pressure = item.main.pressure;
//
//     console.log(humidity);
//     console.log(pressure);
// }







// TODO: log various parts of the API

// $.ajax(URL).done(data => {
//     console.log(data);
//     // TODO: log the city name
//     // TODO: log the first three-hour forecast block
//     // TODO: log the humidity for the first three-hour block
// }).fail(console.error);


// TODO: log the humidity for all days

// $.ajax(getWeatherURL(...ALAMO_COORDINATES))
//     .done((data) => {
//
//         data.list.forEach((day, index) => {
//             if (index % 8 === 0) {
//                 console.log(day.main.humidity);
//             }
//         });
//
//         // OR
//
//         for (let i = 0; i < data.list.length; i += 8) {
//             console.log(data.list[i].main.humidity);
//         }
//
//     })
//     .fail(console.error);


// TODO: log the min and max temp for each day

// $.ajax(getWeatherURL(...ALAMO_COORDINATES))
//     .done(data => {
//         console.log(data);
//         const minMaxTemps = returnMinMaxTemps(data);
//         minMaxTemps.forEach(minMaxTemp => {
//             console.log(minMaxTemp);
//         });
//     })
//     .fail(console.error);



// $.get("http://api.openweathermap.org/data/2.5/weather", {
//     APPID: OPEN_WEATHER_APPID,
//     lat:    29.423017,
//     lon:   -98.48527,
//     units: "imperial"
// }).done(function(data) {
//     console.log(data);
// });
// function test(datasets) {
//     console.log("Testing weather" + JSON.stringify(datasets));
//     const test = JSON.parse(datasets);
// console.log("Testing2: " + test.coord);
//     }

