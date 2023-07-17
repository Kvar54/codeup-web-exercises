(()=>{
    const latLng = [-98.56643020002124, 29.44875300574096];
    function initializedMap() {
        mapboxgl.accessToken = MAPBOX_TOKEN;
        const mapOptions = {
            container: "map",
            // accepts the id, but you don't need a hashtag because this only accepts the id
            style: "mapbox://styles/mapbox/outdoors-v12",
            zoom:2,
            center: latLng
        }
        return new mapboxgl.Map(mapOptions);
    }

    function createMarker(map){
        map.center
        const marker = new mapboxgl.Marker()
            .setLngLat(latLng)
            .addTo(map);
        createPopup(marker)
    }
    function createPopup(marker) {
        const popup = new mapboxgl.Popup()
            .setLngLat([-98.56643020002124, 29.44875300574096])
            .setHTML(`
                <div>
                    <h2>La Sorentina</h2>
                    <p>San Antonio's best Mom and Pops Italian Restaurant</p>
                </div>
            `)
            marker.setPopup(popup);
    }
    function zoomLvl5(map){
            return map.setZoom(5);
    }
    function zoomLvl15(map){
        return map.setZoom(15);
    }
    function zoomLvl20(map){
        return map.setZoom(20);
    }

    const map = initializedMap();
    createMarker(map);

    const favoriteRestaurants= [
        {"name": "Pluckers",
            "type":"Sports Bar",
            "food": "Chicken Wings",
            "popularity": "high",
            "Wait Time": "30min-2hours"
    }, {"name": "Mina & Dimis",
            "type":"small family owned restaurant",
            "food": "Greek",
            "popularity": "Average",
            "Wait Time": "0min-15min"
        }, {"name": "Sukhothai",
            "type":"family owned restaurant",
            "food": "Thai & chinese",
            "popularity": "Average",
            "Wait Time": "0min-15min"
        }
    ];
    function myFavoriteRestaurants(){
        const marker = new mapboxgl.Marker()
        const popup = new mapboxgl.Popup()


    }


    document.querySelector('#lvl5').addEventListener('click', ()=>{
        zoomLvl5(map);
    });
    document.querySelector('#lvl15').addEventListener('click', ()=>{
        zoomLvl15(map);
    });
    document.querySelector('#lvl20').addEventListener('click', ()=>{
        zoomLvl20(map);
    });
document.querySelector("#fav-btn").addEventListener("click", );
})();