import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/api/wines/";

export function getWines() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function getWineBySlug(slug) {
  return fetch(baseUrl + "?slug=" + slug)
    .then(response => {
      if (!response.ok) throw new Error("Network response was not ok.");
      return response.json().then(wines => {
        if (wines.length !== 1) throw new Error("Course not found: " + slug);
        return wines[0];
      });
    })
    .catch(handleError);
}

export function saveWine(wine) {
  return fetch(baseUrl + (wine.id || ""), {
    method: wine.id ? "PUT" : "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      ...wine,
      // Parse the wineId to a number (in case it was sent as a string).
      wineId: parseInt(wine.id, 10)
    })
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteWine(wineId) {
  return fetch(baseUrl + wineId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
