
    
function myFunc() {
    let time = document.querySelector('.time');
    let day = new Date();
    let hours = day.getHours();
    let minutes = day.getMinutes();
    let seconds = day.getSeconds();
    if (minutes > 0 && minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds > 0 && seconds < 10) {
        seconds = '0' + seconds;
    }
    if (hours > 12) {
        time.innerText = '0' + hours - 12 + ':' + minutes + ':' + seconds  + 'PM';
    }
    else {
        time.innerText = '0' + hours + ':' + minutes + ':' + seconds + 'AM';
    }
    
    setTimeout(myFunc, 1000);

}

    myFunc();