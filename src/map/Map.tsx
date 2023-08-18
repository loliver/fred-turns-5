import { useState, useCallback, memo } from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'

const containerStyle = {
    width: '400px',
    height: '400px'
  };
  
  const center = {
    lat: -37.718098,
    lng: 144.9865751
  };
  
  function PartyMapComponent() {
    const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: "AIzaSyAV0nsCIRlAhY-0eUpxsuK5eKv6EEuy_Vk"
    })
  
    const [map, setMap] = useState(null)
  
    const onLoad = useCallback(function callback(map) {
      // This is just an example of getting and using the map instance!!! don't just blindly copy!
      const bounds = new window.google.maps.LatLngBounds(center);
      map.fitBounds(bounds);
  
      setMap(map)
    }, [])
  
    const onUnmount = useCallback(function callback(map) {
      setMap(null)
    }, [])
  
    return isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
    ) : <></>
  }

  const PartyMap = memo(PartyMapComponent)
  
  export { PartyMap }
