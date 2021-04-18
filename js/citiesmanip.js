//Добавление нового города
let onSuccess = (data) => {
    let cities = fetchGetFavourites()
    
    cities.then(list => {
        if (data === false) {
            alert("Город уже есть в списке")
            let city = document.getElementById("tempcity");
            city.remove()
        } else {
            let count = list.favouriteCities.length - 1;
            let city = document.getElementById("tempcity");
            city.setAttribute("id", "city" + count)
            fetchByName(data.name, count)
        }
    })
}

let onFail = (e) => {
    let city = document.getElementById("tempcity");
    
    city.remove();
    alert(e)
}

async function addCity() {
    let text = document.querySelector('.inputbox').value.toLowerCase();
    
    document.querySelector('.inputbox').value = "";
    if (text === '') {

        alert("Надо ввести название города")

    } else {
        try {
            let template = document.getElementById("template1");
            var city = document.createElement("div");
            loading(template, city)
            fetchAddCity(text).then(onSuccess).catch(onFail)
        } catch (e) {
            city.remove()
            alert(e)
        }
    }
}

//Удаление города из избранного
function deleteCity(btn) {
    city = btn.parentElement.querySelector("h3").textContent;
    fetchDeleteCity(city);
    btn.parentElement.parentElement.parentElement.remove();
}

function loading(template, city) {
    city.setAttribute("id", "tempcity")
    city.setAttribute('class', 'city')
    city.append(template.content.cloneNode(true));
    document.getElementsByClassName('sidecities')[0].appendChild(city)
}
