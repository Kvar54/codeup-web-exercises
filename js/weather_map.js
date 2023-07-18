"use strict";
// Base URL for forecast API
const OPEN_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/forecast';
let searchBox = document.querySelector('#user-input');
let searchBtn = document.querySelector('#search');
const map = initializedMap();
const marker = createMarker(map);

// functions
///////////////////////////////////////////////////////////////////////////////////
function getWeatherURL(coordinates) {
    return `${OPEN_WEATHER_URL}?lat=${coordinates[1]}&lon=${coordinates[0]}&units=imperial&appid=${OPEN_WEATHER_APPID}`;
}
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
        emptyDiv.classList.add("card", "weather", "d-flex", "flex-column", "text-center", "flex-grow-1", );
        resultElement.appendChild(emptyDiv);
        console.log(data.city.name);
        emptyDiv.innerHTML = `
<p class="city">${data.city.name},</p>
               <p class="date"> ${item.dt_txt.split(" ")[0]},</p>
               <p class="temp"> ${item.main.temp_min}°F / ${item.main.temp_max}°F </p>
               <p class="description"> Description ${item.weather[0].description}, </p>
               <p class="icon"> <img src="http://openweathermap.org/img/w/${item.weather[0].icon}.png" alt=""></p>
               <p class="humidity"> Humidity: ${item.main.humidity},</p>
                <p class="wind"> Wind: ${item.wind.speed},</p
                <p class="feels-like-temp"> Feels like: ${item.main.feels_like}°F,</p>
                <p class="pressure">Pressure: ${item.main.pressure}</p>
             `;
    });
}
// function changeBackgrounds(){
//     if ([item.list.weather.icon ===  01d]){
//     return
//     }
// }
function getDataWithCoords(lng,lat){
    const URL = getWeatherURL([lng,lat]);
    $.ajax(URL)
        .done(data => {
            console.log(data);
            displayData(data); // Calling the displayData function to append the data to the HTML
        })
        .fail(console.error);
}
function initializedMap() {
    mapboxgl.accessToken = MAPBOX_TOKEN;
    const mapOptions = {
        container: "map",
        // accepts the id, but you don't need a hashtag because this only accepts the id
        style: "mapbox://styles/mapbox/outdoors-v12",
        zoom: 8,
        center: [-95.712891, 37.09024]
    }
    getDataWithCoords(-95.712891,37.09024);
    return new mapboxgl.Map(mapOptions);
}

// const latLng = [-95.712891, 37.09024];
function createMarker(map){
    return new mapboxgl.Marker({
        draggable: true,
    })
        .setLngLat(map.getCenter())
        .addTo(map);
}




function searchInput(map, searchBox) {
    geocode(searchBox.value, MAPBOX_TOKEN).then((data)=>{
        console.log(data);
        getDataWithCoords(data[0], data[1]);

        marker.setLngLat(data)
            // .addTo(map)
        console.log(marker.getLngLat());

        map.flyTo({
            center:data,
            zoom: 10
        })
    })
}
///////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////
// Events


searchBox.addEventListener('input', (e)=>{
    console.log(e.target.value);
});
searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(searchBox.value);
    searchInput(map, searchBox);
})
map.on('mouseup', (e)=>{
    console.log(e.lngLat);
    getDataWithCoords(e.lngLat.lng, e.lngLat.lat);
    marker.setLngLat(e.lngLat);
});
///////////////////////////////////////////////////////////////////////////////////


