const clockContainer = document.querySelector(".TodayClock");
const clockTitle = document.querySelector("h1");

function clockSystem(){
    const date = new Date();
    const min = date.getMinutes();
    const hou = date.getHours();
    const sec = date.getSeconds();
    clockTitle.innerText = (hou <= 9 ? "0"+hou:hou) + ":" + (min <= 9 ? "0"+min:min) + ":" + (sec <= 9 ? "0"+sec:sec);
}

setInterval(clockSystem,1000);