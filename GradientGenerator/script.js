let code = document.getElementById("code")
let color1 = document.getElementById("color1");
let color2 = document.getElementById("color2");
let gradient = document.getElementById("gradient");
let degree = document.getElementById("degree");
let degreeText = document.getElementById("degreetext");
function setGradient(){
    gradient.style.background = `linear-gradient(${degree.value}deg,${color1.value},${color2.value})`
    code.innerText = `background: linear-gradient(45deg,${color1.value},${color2.value});`
    degree.innerText = `${degree.value} Deg.`
}
color1.addEventListener("input",setGradient)
color2.addEventListener("input",setGradient)
degree.addEventListener("input",setGradient)