import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import "./style.css";

class Maps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentLocation: { lat: 25.056238, lng: 121.547820 }
    };
  }

  render() {
    const apiIsLoaded = (map, maps) => {
      const directionsService = new google.maps.DirectionsService();
      const directionsRenderer = new google.maps.DirectionsRenderer();
      directionsRenderer.setMap(map);
      const origin = { lat: 25.056238, lng: 121.547820 };
      const destination = { lat: 25.054421, lng: 121.546379 };

      directionsService.route(
        {
          origin: origin,
          destination: destination,
          travelMode: google.maps.TravelMode.DRIVING
        },
        (result, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            directionsRenderer.setDirections(result);
          } else {
            console.error(`error fetching directions ${result}`);
          }
        }
      );
    };
    return (
      <div>
        <div style={{ height: "400px", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyAIIHneT5FxG8d7evKo5eTmFopqAPGwpbo"
            }}
            defaultCenter={{ lat: 25.056238, lng: 121.547820 }}
            defaultZoom={10}
            center={this.state.currentLocation}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps)}
          />
        </div>
      </div>
    );
  }
}
export default Maps;