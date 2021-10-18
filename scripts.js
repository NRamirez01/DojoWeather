var footer = document.querySelector("#cookies");
var unit = document.querySelector("#unit");
var temperatures = document.getElementsByClassName("unitchange");
var unit = unit.options;

function removeElement() {
    footer.remove();
}

function convertUnits() {
    for(var x = 0; x < temperatures.length; x++){        
        if(unit.selectedIndex == 1){
        temperatures[x].innerText = Math.round(temperatures[x].innerText * 1.8 + 32)
        }
        if(unit.selectedIndex == 0){
            temperatures[x].innerText = Math.round((temperatures[x].innerText - 32) / 1.8)
        }
    }
}
