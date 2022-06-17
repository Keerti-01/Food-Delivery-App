import React from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import {MdContentCopy} from "react-icons/md"
import {FaDirections} from "react-icons/fa"

const MapView = (props) => {

    return (
        <>
            <div>
                <h4 className="text-lg font-medium">Call</h4>
                <h5 className="text-app-400 font-medium">{props.phno}</h5>
            </div>
                    <div className="mt-6">
                        <h4 className="text-lg font-medium ">Direction</h4>
                        {/* map  */}
                        <div className="w-full h-48">
                        <MapContainer center={props.mapLocation} zoom={13} scrollWheelZoom={false}>
                            <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={props.mapLocation}>
                                <Popup>
                                    {props.title}
                                </Popup>
                            </Marker>
                        </MapContainer>
                        </div>
                        
                    </div>
                    <p>{props.address}</p>
                        <div className="flex items-center gap-3 my-2">
                        <button className="flex items-center gap-2 px-3 py-2 text-gray-700 border border-gray-400
                         rounded-lg "> 
                            <MdContentCopy />Copy</button>
                            <button className="flex items-center gap-2 px-3 py-2 text-gray-700 border border-gray-400
                         rounded-lg "> 
                            <span className="text-app-400"> <FaDirections /> </span>Direction</button>
                        </div>
        </>
    )
}

export default MapView;