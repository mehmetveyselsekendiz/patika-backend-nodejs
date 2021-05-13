const user_name= prompt("Adınız Nedir?")
let name_tag= document.querySelector("#myName")
name_tag.innerHTML = user_name

function produce_day(day){
    switch(day){
        case 0: return "Pazar"; break;
        case 1: return "Pazartesi"; break;
        case 2: return "Salı"; break;
        case 3: return "Çarşamba"; break;
        case 4: return "Perşembe"; break;
        case 5: return "Cuma"; break;
        case 6: return "Cumartesi"; break;
        default: return "Hatalı gün"; break;
    }
}

function produce_time(hours,minutes,seconds){
    if(hours<=9) hours= `0${hours}`
    if(minutes<=9) minutes= `0${minutes}`
    if(seconds<=9) seconds= `0${seconds}`
    return `${hours}:${minutes}:${seconds}`
}

function showTime(){
    //date object
    let date_object= new Date()
    let hours= date_object.getHours()
    let minutes= date_object.getMinutes()
    let seconds= date_object.getSeconds()
    let day= date_object.getDay()
    return `${produce_time(hours,minutes,seconds)} ${produce_day(day)}`
}

let clock_tag= document.querySelector("#myClock")

function recersive(){
    clock_tag.innerHTML= showTime()
    setInterval(recersive,1000)
}

recersive()