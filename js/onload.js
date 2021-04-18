window.onload = async function () {
    let timer = await navigator.geolocation.getCurrentPosition(realCity, defaultCity);

    fetchGetFavourites().then(favs)

    pressEnter();
    gridfix();
}

let favs = async (data) => {
    let count = 0
    let cities = data.favouriteCities;
    printLoader(cities)
    try {
        let requests = await cities.map(cityName => fetch(`https://web-app-bestone.herokuapp.com/weather/city?q=${cityName}`));
        let responces = await Promise.all(requests)
        
        responces = await Promise.all(responces.map(r => r.json()))
        responces.forEach(responce => printListCities(responce, count++))
    } catch (e) {
        alert(e)
    }
}



async function defaultCity() {
    let nameCity = 'Москва';

    fetchCityByName(nameCity)
}

async function realCity(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;

    fetchCityByLocation(lat, lon)
}


function refreshButton() {
    let mc = document.querySelector('.maincity');
    let list_mc = mc.querySelector('.info');
    let vals = list_mc.querySelectorAll('.value');

    mc.querySelector('h1').textContent = "Загрузка";
    mc.querySelector('.bigpic').src = "images/time-left.png";
    mc.querySelector('#currenttemp').innerHTML = ' ';

    vals[0].textContent = '';
    vals[1].textContent = '';
    vals[2].textContent = '';
    vals[3].textContent = '';
    vals[4].textContent = '';

    navigator.geolocation.getCurrentPosition(realCity, defaultCity);
}


function pressEnter() {
    document.querySelector('.inputbox').addEventListener('keypress',
        function (e) {
            if (e.key === 'Enter') {
                addCity();
            }
        });

}
