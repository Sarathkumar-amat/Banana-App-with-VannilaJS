var btnCheck = document.querySelector("#btn-select");
var txt = document.querySelector("#txt-inp");
var opVal=document.querySelector("#output");

function Handler()
{
    opVal.innerText="translate "+txt.value;
};
btnCheck.addEventListener("click",Handler)
