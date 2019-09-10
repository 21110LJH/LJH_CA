const weather = document.querySelector(".js-weather");
const Coords = 'coords';
const API_KEY = "970f2e5a30bbc86639e7b46b82b92de2";

function getWeather(lat,lng){
    fetch(
        "https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lng+"&appid="+API_KEY
    ).then(function(response){
        return response.json();
    }).then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = temperature+"@"+place;
    });
}

function saveCoords(coordsObj){
    localStorage.setItem(Coords,JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude: latitude,
        longitude: longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude,longitude);
}

function handleGeoError(){
    console.log("NO");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces,handleGeoError);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(Coords);
    if(loadedCoords === null){
        askForCoords();    
    }else{
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude,parseCoords.longitude);
    }
}

loadCoords();