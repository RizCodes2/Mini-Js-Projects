// folder right arrow selected

const folder_right = document.querySelector(".folder-drive-right-arrow");

const dsection = document.querySelector(".d-section");

// sidebar options arrows selection

const Pc_Arrow = document.querySelector(".ThisPc-arrow");

// selecting this pc from sidebar

const ThisPc = document.querySelectorAll(".Pcname");

// selecting local disks

const localC = document.querySelector(".localC");
const folder_drives = document.querySelector(".folder-drives");

const LocalDisk_C = document.querySelector(".disk-one");

// actions for local disk D

const localD = document.querySelector(".localD");

const LocalDisk_D = document.querySelector(".disk-two");

// actions for local disk E

const localE = document.querySelector(".localE");

const LocalDisk_E = document.querySelector(".disk-three");

// actions for local disk F

const localF = document.querySelector(".localF");

const LocalDisk_F = document.querySelector(".disk-four");




// folder tiles toggle

folder_right.addEventListener("click", () => {
    dsection.classList.toggle("shows-dsection");
    folder_right.classList.toggle("ardown");
    console.log("clicked");
});


// sidebar options arrows selection and toggle 


Pc_Arrow.addEventListener("click", () => {
    Pc_Arrow.classList.toggle("pcarrow-rotate");
    // document.querySelector(".pcdisks").style.display = "block";
    document.querySelector(".pcdisks").classList.toggle("shown");

})

// selecting this pc from side bar


ThisPc.forEach(e => {
    e.addEventListener("click", () => {
        dsection.classList.toggle("shows-dsection");
        folder_right.classList.toggle("ardown");

    });
});

// actions for local disk C

LocalDisk_C.addEventListener("dblclick", () => {
    localC.style.display = "block";
    folder_drives.style.display = "none";
    dsection.style.display = "none";
})


// actions for local disk D



LocalDisk_D.addEventListener("dblclick", () => {
    localD.style.display = "block";
    folder_drives.style.display = "none";
    dsection.style.display = "none";
})


// actions for local disk E


LocalDisk_E.addEventListener("dblclick", () => {
    localE.style.display = "block";
    folder_drives.style.display = "none";
    dsection.style.display = "none";
})

// actions for local disk F


LocalDisk_F.addEventListener("dblclick", () => {
    localF.style.display = "block";
    folder_drives.style.display = "none";
    dsection.style.display = "none";
})


// actions from sidebar options

const sidebar_disks = document.querySelectorAll(".pcdisks-side");

const main_diskss = document.querySelectorAll(".inside-diskss");


sidebar_disks.forEach(e => {
    e.addEventListener("click", () => {
        main_diskss.forEach(d => d.style.display = "none");

        const diskTarget = e.getAttribute("data-set");
        // document.querySelector("." + diskTarget).style.display = "block";
        if (diskTarget === "C") {
            localC.style.display = "block";
            
            folder_drives.style.display = "none";
        } else if (diskTarget === "D") {
            localD.style.display = "block";
            folder_drives.style.display = "none";
        } else if (diskTarget === "E") {
            localE.style.display = "block";
            folder_drives.style.display = "none";
        } else if (diskTarget === "F") {
            localF.style.display = "block";
            folder_drives.style.display = "none";
        }

    });
});


