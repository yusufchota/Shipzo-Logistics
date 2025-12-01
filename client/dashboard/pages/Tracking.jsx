import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function Tracking() {
  const center = [13.0827, 80.2707]; // Chennai

  return (
    <div className="lg:ms-52 mt-20">
      <h3 className="fw-bold mb-3">Shipment Tracking</h3>
      <p className="text-accent mb-4">
        Track containers and trucks in real-time. Use filters to find specific
        shipments.
      </p>

      <div className="card mb-4">
        <div className="card-header bg-white fw-bold">Live Map</div>
        <div className="card-body p-0" style={{ height: 350 }}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d487295.22590314155!2d78.07836498642884!3d17.41207787363984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1764321335856!5m2!1sen!2sin" width="100%" height="100%"></iframe>
        </div>
      </div>
    </div>
  );
}

export default Tracking;
