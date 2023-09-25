import React, { useState } from 'react'
import { TileLayer } from 'react-leaflet'
import { MapContainer, Marker, Popup } from 'react-leaflet'
import "./Maps.css"
import Data from "../data/simplon.json"
import { Météo } from './Meteo'


const factories = Data.factories;

function Maps() {
  const [selectedFactory, setSelectedFactory] = useState("");

  const handlePopupOpen = (factoryName) => {
    setSelectedFactory(factoryName);
  };

  return <div >
    <h1 className='title'>Simplon près de chez vous</h1>
    <MapContainer className="map" center={[43.59, 3.86]} zoom={8} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {factories.map((factory, index) => (
        <Marker key={factory.factoryId} position={[factory.lat, factory.lng]} eventHandlers={{
          popupopen: () => handlePopupOpen(factory.factoryName)
        }}>
          <Popup>
            <h4>{factory.factoryName}</h4>
            <Météo position={[factory.lat, factory.lng]} />
          </Popup>
        </Marker>
      ))}
    </MapContainer>

  </div>

}
export default Maps;