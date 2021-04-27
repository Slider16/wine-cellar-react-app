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
        if (wines.length !== 1) throw new Error("Wine not found: " + slug);
        return wines[0];
      });
    })
    .catch(handleError);
}

export function saveWine(wine) {
  let bodystring = JSON.stringify({ ...wine });
  return fetch(baseUrl + (wine._id || ""), {
    method: wine._id ? "PUT" : "POST",
    headers: { "content-type": "application/json" },
    body: bodystring
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteWine(wineId) {
  return fetch(baseUrl + wineId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
