window.onload = async function() {
    let timer = await navigator.geolocation.getCurrentPosition(realCity, defaultCity);
    let i = -1;

    let keys = [];
    for (let j = 0; j < window.localStorage.length; j++) {
        keys.push(j);
    }

    let requests = keys.map(key => getInfoCityName(window.localStorage.getItem(key)))

    Promise.all(requests)
        .then(responses => responses.forEach(
            data => {
                let cities = document.querySelector('.sidecities');
                let city = createLoadingCity();
                city.setAttribute("id", ++i);
                cities.append(city);
                printCity(data, city);
            }
        ))
        .catch(error => {
            console.log(error);
        })
    gridfix()
}


let success = (data) => {
    printMainCity(data);
}

let fail = (error) => {
    alert(error);
}


async function defaultCity() {
    let nameCity = 'Москва';

    getInfoCityName(nameCity).then(success).catch(fail);
}

async function realCity(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    getInfoCoordinats(lat, lon).then(success).catch(fail);
}


function refreshButton() {
    let mc = document.querySelector('.maincity');

    mc.querySelector('h1').textContent = "Загрузка";
    mc.querySelector('.bigpic').src = "images/time-left.png";
    mc.querySelector('#currenttemp').innerHTML = ' ';

    let list_mc = mc.querySelector('.info');
    let vals = list_mc.querySelectorAll('.value');

    vals[0].textContent = '';
    vals[1].textContent = '';
    vals[2].textContent = '';
    vals[3].textContent = '';
    vals[4].textContent = '';
    
    navigator.geolocation.getCurrentPosition(realCity, defaultCity);
}
