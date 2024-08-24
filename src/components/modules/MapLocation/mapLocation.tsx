"use client"
import "./mapLocation.css";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import { Icon, LatLngExpression } from "leaflet";
import locationSign from "../../../../public/images/location.png";
import { StaticImageData } from "next/image";
// Custom icon
const customIcon = new Icon({
 iconUrl:locationSign as StaticImageData | any,
 iconSize: [38, 38]
});

export default function MapLocation(props:any) {
 const [position, setPosition] = useState<LatLngExpression  | null>(null);
 const [positionData , setPositionData] = useState<string>()
//  useEffect(()=>{
//    props.onMapMegyas(position)
//  } , [position])


 return (
   <MapContainer center={[props.lat , props.long]} zoom={15} scrollWheelZoom={true}>
     {/* OpenStreetMap Tiles */}
     <TileLayer
       attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
     />
     {/* Render marker at clicked position */}
     <MapEventsSetter setPosition={setPosition} />
     {!position ?(<Marker position={[props.lat , props.long]} icon={customIcon}><Popup>{positionData}</Popup></Marker>):
     (
       <Marker position={position} icon={customIcon}><Popup>{positionData}</Popup></Marker>
     )}
   </MapContainer>
 );
}


// Custom component to handle map click events
function MapEventsSetter({ setPosition }: { setPosition: (position: LatLngExpression | null) => void }) {
 // Reference to map instance
 const map = useMapEvents({
   click: (e) => {
     setPosition([e.latlng.lat, e.latlng.lng]);
     // Update map position
     map.flyTo(e.latlng, map.getZoom());
   }
 });


 return null;
}