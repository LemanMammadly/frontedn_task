var count = 0;
document.getElementById("counter").innerText = count;
function increase() {
  count = count + 1;
  document.getElementById("counter").style.color="green"
  document.getElementById("counter").innerText = count;
}
function decrease() {
  count = count - 1;
  document.getElementById("counter").style.color="red"
  if(count<=0){
      alert("Minimum 1 mehsul secilmelidir.")
      count=0;
  }
  document.getElementById("counter").innerText = count;
}
function reset(){
    document.getElementById("counter").style.color="black"
    count=0;
    document.getElementById("counter").innerText=count;
}

