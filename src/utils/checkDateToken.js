export function ifIsNecessaryToGetNewAccessToken() {
  const dateNow = Math.floor(Date.now() / 1000);
  const dateAccessToken = window.localStorage.getItem(
    "date_expires_access_token"
  );
  return dateNow >= dateAccessToken;
}
