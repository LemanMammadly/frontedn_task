function Click(){
var mebleg = parseFloat(document.getElementById('ayliq').value)
var faiz = parseInt(document.getElementById('faiz').value)
var select=document.getElementById("select")
var select1=select.value;


var faizm=faiz/(select1*100);
var kesrup=mebleg*faizm;
var kesrdown=1+faizm
var pow=Math.pow(kesrdown,select1)
var down=1-(1/pow)
var ayliqod=kesrup/down
var umumiod=ayliqod*select1;

var aylqodenis1=document.getElementById("ayliqh1")
aylqodenis1.innerHTML=ayliqod.toFixed(2)
var umumimebleg1=document.getElementById("umumih1")
umumimebleg1.innerHTML=umumiod.toFixed(2)

if(option == " "){
    monthvalidate.style.display="block"
}else{
    monthvalidate.style.display="none"
}
}