const api = '790f9f8d1120e13abd19961fcdae3073';
const query = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${api}&lang=ru&`

async function getInformation(suffix) {
  let url = query + suffix;

  let data = await fetch(url);

  if (data.status === 200) {
    return await data.json();
  }

  throw new Error("Wrong request")
}

async function getInfoCityName(cityName) {
  return await getInformation(`q=${cityName}`);
}

async function getInfoCoordinats(lat, lon) {
  return await getInformation(`lat=${lat}&lon=${lon}`);
}
