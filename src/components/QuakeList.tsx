// {quakes: [{id: number, region: string, magnitude: number, depth: number, lat: number, lng: number, datetime: string}]}
interface Quake {
  id: number;
  region: string;
  location: string;
  magnitude: number;
  depth: number;
  lat: number;
  lng: number;
  datetime: string;
}

interface QuakeListProps {
  quakes: Quake[];
  onSelectQuake: (quake: Quake) => void;
}

import { useState } from "react";

const QuakeList: React.FC<QuakeListProps> = ({ quakes, onSelectQuake }) => {
  // Hook
  const [hoverIndex, setHoverIndex] = useState(-1);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleClick = (index: number, quake: Quake) => {
    setSelectedIndex(index);
    onSelectQuake(quake);
  };

  return (
    <>
      <h1>QuakeList</h1>
      {quakes.length === 0 && <p>No quakes to display</p>}
      <ul className="list-group">
        {quakes.map((quake, index) => (
          <li
            className={
              selectedIndex === index
                ? "alert alert-primary" // Active
                : hoverIndex === index
                ? "alert alert-dark"
                : "alert alert-warning"
            }
            onMouseEnter={() => {
              setHoverIndex(index);
            }}
            onMouseLeave={() => {
              setHoverIndex(-1);
            }}
            onClick={() => {
              handleClick(index, quake);
            }}
            key={index}
          >
            {quake.region}
          </li>
        ))}
      </ul>
    </>
  );
};

export default QuakeList;
