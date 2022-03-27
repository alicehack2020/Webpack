import "./index.css"

let title=document.getElementById("title")
let notes=document.getElementById("notes")

let save_btn=document.getElementById("save_btn")
let close_btn=document.getElementById("close_btn")

let load_notes=document.getElementById("load_notes")


let loadImage=document.getElementById("loadImage")
loadImage.innerText=""

let image=document.createElement("img")
image.src="../public/logo.png"

loadImage.append(image)


let saveData=()=>
{
   let titleVal=title.value; 
   let notesVal=notes.value; 

   let card=document.createElement("div")
   card.id="card"

   let mainTitle=document.createElement("h4")
   mainTitle.id="mainTitle"
   mainTitle.innerText=titleVal


   let mainNotes=document.createElement("p")
   mainNotes.id="mainNotes"
   mainNotes.innerText=notesVal
   
   card.append(mainTitle,mainNotes)
   load_notes.append(card)
   console.log(load_notes);
    
}


let clearData=()=>{
     title.value="" 
    notes.value="" 
}


save_btn.addEventListener("click",saveData)
close_btn.addEventListener("click",clearData)



