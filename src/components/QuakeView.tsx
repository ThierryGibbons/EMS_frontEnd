interface vQuake {
  id: number;
  region: string;
  location: string;
  magnitude: number;
  depth: number;
  lat: number;
  lng: number;
  datetime: string;
}

interface QuakeViewProps {
  vquake: vQuake;
  onSelectView: () => void;
}

const QuakeView: React.FC<QuakeViewProps> = ({ vquake, onSelectView }) => {
  const handleClick = () => {
    onSelectView();
  };

  return (
    <>
      <div
        className="card rounded position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center"
        style={{ width: "18rem" }}
        onClick={() => {
          handleClick();
        }}
      >
        <div className="card-body">
          <h3 className="card-title">Quake Information</h3>
          {/* View quake data */}
          <table>
            <tbody>
              <tr>
                <th>ID</th>
                <td>{vquake.id}</td>
              </tr>
              <tr>
                <th>Region</th>
                <td>{vquake.region}</td>
              </tr>
              <tr>
                <th>Location</th>
                <td>{vquake.location}</td>
              </tr>
              <tr>
                <th>Magnitude</th>
                <td>{vquake.magnitude}</td>
              </tr>
              <tr>
                <th>Depth</th>
                <td>{vquake.depth}</td>
              </tr>
              <tr>
                <th>Latitude</th>
                <td>{vquake.lat}</td>
              </tr>
              <tr>
                <th>Longitude</th>
                <td>{vquake.lng}</td>
              </tr>
              <tr>
                <th>DateTime</th>
                <td>{vquake.datetime}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default QuakeView;
