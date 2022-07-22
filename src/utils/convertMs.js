export function convertMsToTime(ms) {
  const seconds = Math.floor(ms / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  return hours + "h" + (minutes % 60) + "min";
}

export function convertMsToMin(ms) {
  const seconds = Math.floor(ms / 1000);
  const minutes = Math.floor(seconds / 60);
  return (
    (minutes % 60) +
    ":" +
    (seconds % 60).toLocaleString("fr-FR", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    })
  );
}
