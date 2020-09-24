function getStarships() {
  return fetch('https://swapi.dev/api/starships/')
    .then(response => response.json())
}

export default getStarships