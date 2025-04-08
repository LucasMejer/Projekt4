/* Header Menu Kode */
let menuVariable = document.getElementById("menuUL");
let logoFade = document.getElementById("logoFade");



const menuItems = [
    {
        displayName: "Forside",
        link: "Indsæt html her"
    },
    {
        displayName: "Profil",
        link: "Indsæt html her"
    },
    {
        displayName: "Jobs",
        link: "Indsæt html her"
    },
    {
        displayName: "Leaderboards",
        link: "Indsæt html her"
    },    
    {
        displayName: "Kontakt os",
        link: "Indsæt html her"
    },
];

for(let i = 0; i < menuItems.length; i++){
    menuVariable.innerHTML += "<l>" + "<a href=" + menuItems[i].link + ">" + menuItems[i].displayName + "</a>" + "</l>";
}

setTimeout(codingCourse, 3000);

function codingCourse() {
    logoFade.classList.toggle("fade");
}

