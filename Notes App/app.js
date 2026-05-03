const markdwonInput = document.getElementById("markdown-input");

const markdownPreview = document.getElementById("markdown-preview");



markdwonInput.addEventListener("input", ()=>{
    const userinputvalue = markdwonInput.value;
    markdownPreview.innerHTML = userinputvalue;
})