// folder right arrow selected

const folder_right = document.querySelector(".folder-drive-right-arrow");

const dsection = document.querySelector(".d-section");

// folder tiles toggle

folder_right.addEventListener("click", () => {
    dsection.classList.toggle("shows-dsection");
    folder_right.classList.toggle("ardown");
    console.log("clicked");
});


// sidebar options arrows selection and toggle 

const Pc_Arrow = document.querySelector(".ThisPc-arrow");

Pc_Arrow.addEventListener("click", () => {
    Pc_Arrow.classList.toggle("pcarrow-rotate");
    // document.querySelector(".pcdisks").style.display = "block";
    document.querySelector(".pcdisks").classList.toggle("shown");

})

// selecting this pc from side bar

const ThisPc = document.querySelectorAll(".Pcname");

ThisPc.forEach(e => {
    e.addEventListener("click", () => {
        dsection.classList.toggle("shows-dsection");
        folder_right.classList.toggle("ardown");

    });
});

// actions for local disk C

const localC = document.querySelector(".localC");
const folder_drives = document.querySelector(".folder-drives");

const LocalDisk_C = document.querySelector(".disk-one");

LocalDisk_C.addEventListener("dblclick", ()=>{
    localC.style.display = "block";
    folder_drives.style.display = "none";
    dsection.style.display = "none";
})