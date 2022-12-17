let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let newTitle = document.getElementById("try");

let count = 0

const headings = ["Enter No. Of Bathing Suits:","Enter No. Of Towels:","Enter No. Of Tanned People", "Enter No. Of Men:",  "Enter No. Of Umbrellas", "Enter No. Of Beach Balls" ,"Enter No. Of Children:","Enter No. Of Women:","Enter No. Of Couples:","Enter No. Of Nostrils:","Enter No. Of Bikinis:"];



function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += " " + countStr
    countEl.textContent = 0
    count = 0
}

function reset(){
 
    saveEl.textContent = "Previous entries:"
    countEl.textContent = 0
    count = 0
    
   
 
    newTitle.textContent = headings[Math.floor(Math.random() * headings.length)];

}