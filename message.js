const textarea = document.getElementById("textarea");
const totalcounter = document.getElementById("total-counter");
const remainingcounter = document.getElementById("remaining-counter");

textarea.addEventListener("keyup", ()=> {
    updateCounter()
})

updateCounter()

function updateCounter(){
    totalcounter.innerText = textarea.value.length;

    remainingcounter.innerText = 
    textarea.getAttribute("maxLength") -
    textarea.value.length;

    
}