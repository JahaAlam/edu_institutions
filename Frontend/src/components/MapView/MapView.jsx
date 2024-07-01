import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { GeoJSON, MapContainer, TileLayer } from "react-leaflet";

//--------------------------------------------
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MapContext } from "../../context/mapContext";
import { useAuthContext } from "../../hooks/useAuthContext";

//-------------------------------------------
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import Categories from "../Categories/Categories";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapView = () => {
  const [favorites, setFavorites] = useState([]);
  //-----------------------------------

  const { category } = useParams();

  console.log("category from mapview", category);

  const { data, fetchData } = useContext(MapContext);
  const { user } = useAuthContext();
  console.log(user);

  useEffect(() => {
    if (category) {
      console.log(`Category from URL: ${category}`);
      fetchData(category);
    } else {
      console.log("No category found in URL params");
    }
  }, [category, fetchData]);

  const createPopupContent = (properties) => {
    const isFavorite = favorites.includes(properties.id);
    return (
      `<table>` +
      Object.entries(properties)
        .map(
          ([key, value]) =>
            `<tr key=${key}><td><strong>${key}:</strong></td><td>${value}</td></tr>`
        )
        .join("") +
      `</table>` +
      `<div>
        
         <button class="favourite-btn" data-id="${properties.id}">
          ${isFavorite ? "Remove from Favourites" : "Add to Favourites"}
        </button>
      </div>`
    );
  };

  const handleFavouriteClick = async (e) => {
    const featureId = e.target.getAttribute("data-id");
    const isFavorite = favorites.includes(featureId);

    if (isFavorite) {
      // Remove from favorites
      setFavorites(favorites.filter((id) => id !== featureId));
      await saveFavoriteStatus(featureId, false);
    } else {
      // Add to favorites
      setFavorites([...favorites, featureId]);
      await saveFavoriteStatus(featureId, true);
    }

    fetchData();
  };

  const saveFavoriteStatus = async (featureId, isFavorite) => {
    try {
      const response = await fetch("http://localhost:5000/api/user/favorite", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({ id: featureId, favorite: isFavorite }),
      });
      if (!response.ok) {
        throw new Error("Failed to save favorite status");
      }
    } catch (error) {
      console.error("Error saving favorite status:", error);
    }
  };

  useEffect(() => {
    // Attach event listener to favourite buttons when the data changes
    const mapElement = document.querySelector(".leaflet-container");
    if (mapElement) {
      mapElement.addEventListener("click", (e) => {
        if (e.target && e.target.classList.contains("favourite-btn")) {
          handleFavouriteClick(e);
        }
      });
    }
    return () => {
      // Clean up event listener when the component is unmounted or data changes
      if (mapElement) {
        mapElement.removeEventListener("click", handleFavouriteClick);
      }
    };
  }, []);
  //------------------------------
  return (
    <>
      <div>
        <Categories></Categories>
      </div>
      <div className=" ">
        <div className=" fixed w-full h-full max-w-auto ">
          <div
            className="bg-white shadow-lg rounded-lg "
            style={{ width: "100%", height: "100%" }}
          >
            <MapContainer
              center={[50.831058558590399, 12.8774888058499]}
              zoom={13}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="© OpenStreetMap contributors"
              />
              {data && data.length > 0 && (
                <GeoJSON
                  data={data}
                  onEachFeature={(feature, layer) => {
                    if (feature.properties && feature.properties.TRAEGER) {
                      layer.bindPopup(createPopupContent(feature.properties));
                    }
                  }}
                />
              )}
            </MapContainer>
          </div>
        </div>
      </div>
    </>
  );
};

export default MapView;
