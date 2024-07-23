var i=1;
function ch(i){
   switch(i%7){
    case 1:
        document.getElementById("box").style.backgroundColor = "green";
        document.getElementById("box").style.borderColor = "green";
        document.getElementById("col").textContent="Green";
        document.getElementById("bt1").style.backgroundColor = "green";
        break;
    case 2:
        document.getElementById("box").style.backgroundColor = "blue";
        document.getElementById("box").style.borderColor = "blue";
        document.getElementById("col").textContent="Blue";
        document.getElementById("bt1").style.backgroundColor = "blue";
        break;
    case 3:
        document.getElementById("box").style.backgroundColor = "yellow";
        document.getElementById("box").style.borderColor = "yellow";
        document.getElementById("col").textContent="Yellow";
        document.getElementById("bt1").style.backgroundColor = "yellow";
        break;
    case 4:
        document.getElementById("box").style.backgroundColor = "pink";
        document.getElementById("box").style.borderColor = "pink";
        document.getElementById("col").textContent="Pink";
        document.getElementById("bt1").style.backgroundColor = "pink";
        break;
    case 5:
        document.getElementById("box").style.backgroundColor = "grey";
        document.getElementById("box").style.borderColor = "grey";
        document.getElementById("col").textContent="Grey";
        document.getElementById("bt1").style.backgroundColor = "grey";
        break;
    case 6:
        document.getElementById("box").style.backgroundColor = "red";
        document.getElementById("box").style.borderColor = "red";
        document.getElementById("col").textContent="Red";
        document.getElementById("bt1").style.backgroundColor = "red";
        break;
   }
}