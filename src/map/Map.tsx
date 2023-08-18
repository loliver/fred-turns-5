import { useState, useCallback, memo } from 'react'
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
  
    const [map, setMap] = useState<google.maps.Map | null>(null)
    console.log(map === null ? 'Map not loaded' : 'Map loaded') // need to use `map` for tsc build to work
  
    const onLoad = useCallback(function callback(map: google.maps.Map) {
      // This is just an example of getting and using the map instance!!! don't just blindly copy!
      const bounds = new window.google.maps.LatLngBounds(center);
      map.fitBounds(bounds);
  
      setMap(map)
    }, [])
  
    const onUnmount = useCallback(function callback() {
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
          <>
            <Marker position={center} />          
          </>
        </GoogleMap>
    ) : <></>
  }

  const PartyMap = memo(PartyMapComponent)
  
  export { PartyMap }
