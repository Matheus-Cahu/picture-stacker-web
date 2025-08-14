import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MapBackground = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // Initialize map with a placeholder token (will need to be replaced)
    mapboxgl.accessToken = 'pk.eyJ1IjoibG92YWJsZSIsImEiOiJjbGJ5eGt4eTYwNGI3M29vOGpuZThxb2dwIn0.5N0f5YO8l0g4qGPfYUCjpw';
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      zoom: 12,
      center: [-47.0608, -22.9099], // Campinas, SP coordinates
      interactive: false, // Disable all interactions
      attributionControl: false,
    });

    // Add custom styling to make it desaturated
    map.current.on('load', () => {
      // Add a filter to make the map appear desaturated
      const layers = map.current?.getStyle().layers;
      if (layers) {
        layers.forEach((layer) => {
          if (layer.type === 'fill' || layer.type === 'line' || layer.type === 'symbol') {
            map.current?.setPaintProperty(layer.id, 'fill-opacity', 0.3);
            map.current?.setPaintProperty(layer.id, 'line-opacity', 0.3);
            map.current?.setPaintProperty(layer.id, 'text-opacity', 0.3);
          }
        });
      }
    });

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full">
      <div ref={mapContainer} className="absolute inset-0 opacity-20" />
      <div className="absolute inset-0 bg-cs-dark/80" />
    </div>
  );
};

export default MapBackground;