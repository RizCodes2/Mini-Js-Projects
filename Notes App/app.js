const markdwonInput = document.getElementById("markdown-input");

const markdownPreview = document.getElementById("markdown-preview");

const newNotebtn = document.getElementById("add-note-btn");
const savebtn = document.getElementById("save-btn");
const delbtn = document.getElementById("delete-btn");

const noteslist = document.getElementById("notes-list");

const notes = [];


markdwonInput.addEventListener("input", ()=>{
    const userinputvalue = markdwonInput.value;
    markdownPreview.innerHTML = userinputvalue;
})

newNotebtn.addEventListener("click", ()=>{
    markdwonInput.innerText = "# New Note";
    markdownPreview.innerText = "New Note";
    
})

savebtn.addEventListener("click", ()=>{
    
    notes.push(markdownPreview.innerHTML);
    console.log(notes);
    const li = document.createElement("li");
    li.textContent = notes[0];
    noteslist.appendChild(li);

})