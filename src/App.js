import './App.css';

// const geoFindMe = () => {
//   const status = document.querySelector("#status");
//   const mapLink = document.querySelector("#map-link");

//   mapLink.href = "";
//   mapLink.textContent = "";

//   const success = (position) => {
//     const latitude = position.coords.latitude;
//     const longitude = position.coords.longitude;

//     status.textContent = "";
//     mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
//     mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
//   }

//   const error = () => {
//     status.textContent = "Unable to retrieve your location";
//   }

//   if (!navigator.geolocation) {
//     status.textContent = "Geolocation is not supported by your browser";
//   } else {
//     status.textContent = "Locating…";
//     navigator.geolocation.getCurrentPosition(success, error);
//   }
// }

// document.querySelector("#find-me").addEventListener("click", geoFindMe);
const successCallback = (position) => {
  console.log(position);
};

const errorCallback = (error) => {
  console.log(error);
};

navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

function App() {
  return (
    <div>
    <button id="find-me">Show my location</button><br />
    </div>
  )
}

export default App;
