export const formatEventDate = (isoString, format = 'full') => {
  const date = new Date(isoString);

  const formats = {
    full: {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'America/Costa_Rica'
    },
    short: {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      timeZone: 'America/Costa_Rica'
    },
    time: {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZone: 'America/Costa_Rica'
    }
  };

  // 👇 Aquí está la magia
  if (format === 'time') {
    return date.toLocaleTimeString('es-CR', formats[format]);
  }

  return date.toLocaleDateString('es-CR', formats[format]);
};