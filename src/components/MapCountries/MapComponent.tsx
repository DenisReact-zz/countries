import { Skeleton } from "@mui/material";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { FC, useMemo, useState } from "react";
import { mapStyles } from "./mapStyles";
import "./MapComponent.css";
import { Point } from "./index";
import { Link } from "react-router-dom";

const containerStyle = {
  width: "100%",
  height: "100%",
};
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
};

interface PropsMapComponent {
  points: Point[];
}
const MapComponent: FC<PropsMapComponent> = ({ points }) => {
  const [infoPosition, setInfoPosition] = useState<null | number[]>(null);
  const [currentPoint, setCurrentPoint] = useState<null | Point>(null);
  const handleClickOnPoint = (point: Point) => () => {
    setCurrentPoint(point);
    setInfoPosition([point?.latlng[0], point?.latlng[1]]);
  };

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyDQBWw_sKmxfCteky7d-kFwU5bvz5x2Gtw",
  });

  const mapPoints = (points: Point[], isLoaded: boolean) => {
    if (!window?.google?.maps?.Size) return null;
    return points.map((point: Point, index: number) => {
      if (point?.flags?.svg && point?.latlng && point?.latlng.length === 2) {
        return (
          <Marker
            key={`${index}_marker_${point?.flags?.svg}`}
            onClick={handleClickOnPoint(point)}
            icon={{
              url: point.flags.svg,
              scaledSize: new window.google.maps.Size(40, 30),
            }}
            position={{ lat: point?.latlng[0], lng: point?.latlng[1] }}
          />
        );
      }
    });
  };
  const memoizeMapPoints = useMemo(
    () => mapPoints(points, isLoaded),
    [points, isLoaded]
  );

  if (loadError) return <>Error loading maps</>;
  if (!isLoaded)
    return (
      <Skeleton
        variant="rectangular"
        animation="wave"
        sx={{ widht: "100%", height: "100%" }}
      />
    );

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      zoom={5}
      center={{ lat: 49, lng: 32 }}
      options={options}
    >
      {memoizeMapPoints}
      {!!currentPoint && (
        <InfoWindow
          position={{
            lat: infoPosition !== null ? infoPosition[0] : 0,
            lng: infoPosition !== null ? infoPosition[1] : 0,
          }}
          onCloseClick={() => setInfoPosition(null)}
        >
          <Link to={`/country/${currentPoint.name.common}`}>
            <div className="contentPoint">
              <p className="countryName">{currentPoint.name.common}</p>
              {currentPoint?.coatOfArms?.svg && currentPoint?.flags?.svg && (
                <div className="flagAndSymvol">
                  <img
                    src={currentPoint.flags.svg}
                    alt={`flag_${currentPoint.name.common}`}
                    style={{
                      height: "35px",
                      borderRadius: "5px",
                      marginRight: "10px",
                    }}
                  />
                  <img
                    src={currentPoint?.coatOfArms?.svg}
                    alt={`symbol_${currentPoint.name.common}`}
                    style={{ height: "35px" }}
                  />
                </div>
              )}
            </div>
          </Link>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

export default MapComponent;
