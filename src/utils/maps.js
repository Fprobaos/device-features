export const MAPS_API_KEY = "AIzaSyDdhJz4fP9S0Z8JQUWdP0BK6h6H9B0GcBY";

export const URL_MAPS = (lat, lng, zoom = 14) =>
  `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=${zoom}&size=600x300&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${MAPS_API_KEY}`;