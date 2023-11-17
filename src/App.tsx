import "./App.css"; // Import CSS file
import QuakeList from "./components/QuakeList";
import QuakeView from "./components/QuakeView";
import MapDisplay from "./components/MapDisplay";

import { useState } from "react";

function App() {
  const [data, setData] = useState(null); // [activeQuake, setActiveQuake]

  // TODO: Fetch data from API
  // Temp data
  let quakes = [
    {
      id: 1,
      region: "Region",
      location: "Location",
      magnitude: 1.0,
      depth: 1.0,
      lat: 1.0,
      lng: 1.0,
      datetime: "Date",
    },
    {
      id: 2,
      region: "Region",
      location: "Location",
      magnitude: 1.0,
      depth: 1.0,
      lat: 1.0,
      lng: 1.0,
      datetime: "Date",
    },
    {
      id: 3,
      region: "Region",
      location: "Location",
      magnitude: 1.0,
      depth: 1.0,
      lat: 1.0,
      lng: 1.0,
      datetime: "Date",
    },
  ];

  // TODO: Display Quake Data in popup
  const handleSelection = (newData) => {
    console.log("quake data: ", newData);
    setData(newData); // setActiveQuake
  };

  const quakeViewClear = () => {
    setData(null); // setActiveQuake
  };

  return (
    <>
      <div className="QuakeList">
        {/* View Quakes on left side of screen */}
        <QuakeList quakes={quakes} onSelectQuake={handleSelection} />
      </div>

      {/* View Quake Data in centre of screen when selected */}
      {data !== null && (
        <div className="QuakeView">
          <QuakeView vquake={data} onSelectView={quakeViewClear} />
        </div>
      )}

      {/* Display map as BG */}
      <div className="Background">
        <MapDisplay />
      </div>
    </>
  );
}

export default App;