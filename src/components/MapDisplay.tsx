import Map from "../components/map";
import { useLoadScript } from "@react-google-maps/api";
// import map from "../components/map";

export default function MapDisplay() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "",
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}
