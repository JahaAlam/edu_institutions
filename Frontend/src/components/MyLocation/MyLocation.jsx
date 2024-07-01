import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";

const MyLocation = () => {
  useEffect(() => {
    const map = L.map("map").setView([51.505, -0.09], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    const markerIcon = L.icon({
      iconUrl: require("./icon-location.png"),
      iconSize: [25, 41],
      iconAnchor: [12, 41],
    });

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        map.setView([latitude, longitude], 13);
        L.marker([latitude, longitude], { icon: markerIcon })
          .addTo(map)
          .bindPopup("You are here!")
          .openPopup();
      },
      (err) => {
        console.error(err);
      }
    );

    // Clean up on component unmount
    return () => {
      map.remove();
    };
  }, []);

  return <div id="map" style={{ height: "100vh", width: "100%" }}></div>;
};

export default MyLocation;
