function enc_in(cipher=all){
   var input= document.getElementById("input").value;
   document.getElementById("output").innerHTML=enc(input,cipher);
}
function dec_in(cipher=all){
   var input= document.getElementById("input").value;
   document.getElementById("output").innerHTML=dec(input,cipher);
}
function reset(){
   document.getElementById("input").value="";
}
var params = new window.URLSearchParams(window.location.search);
if(localStorage.getItem("name")=="" || localStorage.getItem("name")==null){
  var name="";
}else{
  var name=", "+localStorage.getItem("name");
}
if(params.get('n')!==null){
   var na=dec(params.get('n'));
   var name=", "+na;
   localStorage.setItem("name",name);
}
var date=new Date();
var hrs=date.getHours();
var day=date.getDay();
var dayName;
switch(day){
  case 0:
    var dayName="Sunday";
    break;
  case 1:
    var dayName="Monday";
    break;
  case 2:
    var dayName="Tuesday";
    break;
  case 3:
    var dayName="Wednesday";
    break;
  case 4:
    var dayName="Thusday";
    break;
  case 5:
    var dayName="Friday";
    break;
  case 6:
    var dayName="Seturday";
    break;
}
if(hrs<12){
  document.getElementById('greet').innerHTML="Good Morning"+name+"!!";
}
if(hrs>=12&&hrs<=16){
  document.getElementById('greet').innerHTML="Good Afternoon"+name+"!!";
}
if(hrs>16){
  document.getElementById('greet').innerHTML="Good Evening"+name+"!!";
}
