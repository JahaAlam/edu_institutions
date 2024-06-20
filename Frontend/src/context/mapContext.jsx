import { createContext, useCallback, useState } from "react";

const MapContext = createContext();

const MapProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("");

  const fetchData = useCallback(async (point) => {
    console.log(`Fetching data for category: ${point}`);
    setData([]);

    try {
      const response = await fetch(`http://localhost:5000/api/${point}`, {
        method: "GET",
      });

      if (!response.ok) {
        console.log(`Failed to fetch data for category: ${point}`);
      }

      const json = await response.json();
      const data = json[0].features;
      console.log(data)
      
      // const categoryName = json.name;
      // const geojsonData = json.features;

      setCategory(point);
      setData(data);
    } catch (error) {
      console.error("Error fetching requested data", error);
    }
  }, []);

  return (
    <MapContext.Provider value={{ data, category, fetchData }}>
      {children}
    </MapContext.Provider>
  );
};

export { MapContext, MapProvider };
