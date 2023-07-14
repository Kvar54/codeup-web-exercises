$(() => {

//     Global Variables
    const map = initializedMap();
    const marker = createMarker();
    const popup = createPopup();





//      Functions
//      Function that initializes the map
    function initializedMap(){
        mapboxgl.accessToken = MAPBOX_TOKEN;
        const mapOptions = {
            container: "map",
            // accepts the id, but you don't need a hashtag because this only accepts the id
            style: "mapbox://styles/mapbox/outdoors-v12",
            zoom:10,
            center:[-98.4916, 29.4252]
        }
    return new mapboxgl.Map(mapOptions);

    }
function createMarker(){
        return new mapboxgl.Marker()
            .setLngLat([-9849.16, 29.4252])
            .addTo(map);
}

function createPopup(){
        return new mapboxgl.Popup()
            .setLngLat([-98.4916, 29.4252])
            .setHTML(`
                <div>
                    <h1>Codeup</h1>
                    <p>We can put anything we want</p>
                </div>
            `);
}


function goTopParis (){
        geocode('Paris', MAPBOX_TOKEN).then((data) => {
            console.log(data);
            map.setCenter(data);
        })
}



//     Events
document.querySelector('#geocode-button').addEventListener('click', goToParis)
document.querySelector('#reverse-geocode-button')

//     Runs when the program loads

    map.setZoom(1);



});