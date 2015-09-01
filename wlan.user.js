
setInterval(function (){updateWlan()}, 1000);

function updateWlan(){
  if(window.frames["hcti"].document.getElementById("frameEingabe").style.overflow == "scroll"){
    return;
  }
  if(window.frames["hcti"].document.getElementById("frameEingabe")!=null){
    window.frames["hcti"].document.getElementById("frameEingabe").style.overflow = "scroll";
  }
}
