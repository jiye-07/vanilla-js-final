const API_KEY = "21f380025eebdda9e8fa02fdb815380b";

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("weather-info").innerText = `${data.weather[0].main}, ${data.main.temp}°C`;
      document.getElementById("location").innerText = data.name;
    });
}

function onGeoError() {
  alert("Can't find your location. No weather info available.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
