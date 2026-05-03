import React, { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";

const Coverage = () => {
  const position = [23.685, 90.534];
  const coverageData = useLoaderData();
  const mapRef = useRef(null);
  console.log(coverageData);

  const handelSearch = (e) => {
    e.preventDefault();
    const location = e.target.location.value;
    // console.log(district);
    const district = coverageData.find((dis) =>
      dis.district.toLowerCase().includes(location.toLowerCase()),
    );

    if (district) {
      const coordinate = [district.latitude,district.longitude];
      mapRef.current.flyTo(coordinate,12);

      console.log(coordinate,district)
    }

    console.log(district);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">We are available in 64 districts</h1>
      <div>
        <form onSubmit={handelSearch}>
          <label className="input ">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" name="location" placeholder="Search" />
          </label>
          <button type="submit" className="btn ">
            Search
          </button>
        </form>
      </div>
      <div className="border-2 w-full h-[800px]">
        <MapContainer
          center={position}
          zoom={7}
          scrollWheelZoom={false}
          className="h-[800px] "
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {coverageData.map((data) => (
            <Marker position={[data.latitude, data.longitude]}>
              <Popup>
                {data.district} <br />
                service Area : {data.covered_area.join(", ")}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
