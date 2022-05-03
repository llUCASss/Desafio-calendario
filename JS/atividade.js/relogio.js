function clock(){

    
    
    //3º preciso passar isso pro html

    let h = new Date().getHours();

    let m = new Date().getMinutes();

    let s = new Date().getSeconds();

    let hours = document.getElementById('hour').innerHTML = h;

    let minutes = document.getElementById('minutes').innerHTML = m;

    let seconds = document.getElementById('seconds').innerHTML = s;

}

let interval = setInterval(clock, 1000);