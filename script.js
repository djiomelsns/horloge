function setTime(){
  var date =new Date();
  var time = document.querySelector(".time-T");
  time.innerHTML = date.getHours() + ":" +date.getMinutes();
  var data = document.querySelector(".time-D");
  data.innerHTML = date.getDate() +"-"+parseInt(date.getMonth()+1)+"-"+date.getFullYear() ;
}
setInterval(setTime,100);
onload = setTime();

function changeColor(){
    var colors = document.querySelector(".colors").value;
    localStorage.setItem("couleur",colors);
    document.querySelector(".time").style.background = localStorage.getItem("couleur");
    document.body.style.background = localStorage.getItem("couleur");
}
function setcolor(){
  document.querySelector(".colors").value =localStorage.getItem("couleur")
  document.querySelector(".time").style.background = localStorage.getItem("couleur");
  document.body.style.background = localStorage.getItem("couleur");
}
onload = setcolor;

