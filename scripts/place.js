const temp = "40";
const cond = "Partly Cloudy";
const wind = "8";

let chill = "";
let powerOfWind = wind**.16

function calculateWindChill(temp, wind){
    document.getElementById("chill").innerHTML = (35.74 + (0.6215 * temp) - (35.75 * wind**.16) + (0.4275 * temp * wind**.16)).toFixed(1);
}

if (temp <= 50){
    if (wind >=3){

        chill = calculateWindChill(temp, wind);
        
    }
} 


document.getElementById("temp").innerHTML = temp + " F";
document.getElementById("cond").innerHTML = cond;
document.getElementById("wind").innerHTML = wind + " mph";

