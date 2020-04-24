import React from 'react';
import Marker from './Marker';
import GoogleMap from './GoogleMap';

/**
 * With help from examples at
 * https://github.com/google-map-react/google-map-react
 *
 * Access to Google Maps map and maps object 
 * trough OnGoogleApiLoaded attribute
 */
const apiIsLoaded = (map, maps, places) => {
  const markers = [];
  const infoWindows = [];

  places.forEach((place) => {
    markers.push(
      new maps.Marker({
        position: {
          lat: place.latitude,
          lng: place.longitude,
        },
        map,
      })
    );
    infoWindows.push(
      new maps.InfoWindow({
        content: Marker(place),
      })
    );
  });

  markers.forEach((marker, i) => {
    marker.addListener('click', () => {
      infoWindows[i].open(map, marker);
    });
  });
  // Get bounds by our places
  const bounds = getMapBounds(map, maps, places);
  // Fit map to bounds
  map.fitBounds(bounds);
  // Bind the resize listener
  bindResizeListener(map, maps, bounds);
};

// Return map bounds based on list of places
const getMapBounds = (map, maps, stores) => {
  const bounds = new maps.LatLngBounds();

  stores.forEach((store) => {
    bounds.extend(new maps.LatLng(store.latitude, store.longitude));
  });
  return bounds;
};

// Re-center map when resizing the window
const bindResizeListener = (map, maps, bounds) => {
  maps.event.addDomListenerOnce(map, 'idle', () => {
    maps.event.addDomListener(window, 'resize', () => {
      map.fitBounds(bounds);
    });
  });
};

const Main = () => {
  const stores = require('../../assets/stores/stores.json');
  return (
    <>
      {stores && (
        <GoogleMap
          defaultZoom={10}
          defaultCenter={[60.160746, 19.883434]} // Åland
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps, stores)}
        />
      )}
    </>
  );
};

export default Main;
