const alert=document.getElementById("alert");
const text=document.getElementById("text");
const cancel=document.getElementById("cancel");
const red=document.getElementById("error");
const green=document.getElementById("success");
const duration=document.getElementById("number");

let checked=false;

document.getElementById('cancel').onclick = function() {
   if ( this.checked ) {
       checked=true;
   } 
   else{
      checked=false;
   }
};

function add(){
   alert.style.display="block";
    if(checked&&text.value!="")
    alert.innerHTML=`${text.value}<span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> `;
    else 
    alert.innerHTML=text.value;

    if(red.checked&&text.value!="")
    alert.style.backgroundColor="red";
    else if(green.checked&&text.value!="")
    alert.style.backgroundColor="green";
    setTimeout(function() {
      alert.style.display = "none";
    }, duration.value);


}
function clr(){
   alert.innerHTML="";
   alert.style.backgroundColor="transparent"
}
