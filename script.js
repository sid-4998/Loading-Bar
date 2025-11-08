let percent = 0;
function Loading() {
    let counterValue = `${percent}%`;
    document.querySelector(".counter").innerHTML = counterValue;
    let dynamicBarWidth = `${percent}%`
    document.querySelector(".dynamic-bar").style.width = dynamicBarWidth;
    percent++;
    if(percent<=100) {
        setTimeout(Loading, 50);
    }
}

Loading();