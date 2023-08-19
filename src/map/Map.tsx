import { memo } from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'

const containerStyle = {
    width: '100%',
    height: '400px'
  };
  
  const center = {
    lat: -37.7136891,
    lng: 144.9949284
  };
  
  function PartyMapComponent() {
    const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: "AIzaSyAV0nsCIRlAhY-0eUpxsuK5eKv6EEuy_Vk"
    })
  
    return isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
          options={{ mapTypeControl: false }}
        >
          <Marker position={center} />          
        </GoogleMap>
    ) : <></>
  }

  const PartyMap = memo(PartyMapComponent)
  
  export { PartyMap }
