function gridfix(){
    let width = document.documentElement.clientWidth;
    var a = document.getElementsByClassName("sidecities")[0];
    if (width < 1000) {
        a.style.gridTemplateColumns = '1fr'
    }
    else{
        a.style.gridTemplateColumns = '1fr 1fr'
    }
}

