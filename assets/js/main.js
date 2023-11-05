function selectColor(event)
{
    let colorBox = event.target;
    let color = colorBox.style.backgroundColor;

    sessionStorage.setItem("selectedColor", color);
}

function getSelectedColor()
{
    if(sessionStorage.getItem("selectedColor"))
    {
        return sessionStorage.getItem("selectedColor");
    }

    return null;
}

function loadPalette(palette)
{
    let colors = palette;
    
    // le code de l'étape 1 se passe ici
    
    let divHeader = document.querySelectorAll("body > header > div")
    
    for (let i=0;i<divHeader.length;i++)
    
    {divHeader[i].style.backgroundColor = colors[i]}
}

window.addEventListener("DOMContentLoaded", function(){
    loadPalette(["#22f6f3", "#3daf7e", "#ffffff", "#ec8236", "#a9a7ee", "#ecc606", "#f783f2", "#e89e80"]);

    // le code de l'étape 2 se passe ici
    
let divHeader = document.querySelectorAll("body header div");

for (let i=0;i<divHeader.length;i++)
    {
    divHeader[i].addEventListener("click", selectColor);
    console.log(getSelectedColor());
    }

// CrÃ©ez un event listener qui quand on clique sur une div du main va appliqer la derniÃ¨re couleur cliquÃ©e dans le header comme couleur de fond de la div.
// Vous pouvez utiliser :
// let color = getSelectedColor(); 

let divDivMain = document.querySelectorAll("body main div div");

for (let j=0;j<divDivMain.length;j++)
    {
        divDivMain[j].addEventListener("click",function() 
        {
           let color = getSelectedColor;
           
           if (color && divDivMain[j]==="")
            {
                divDivMain[j].style.backgroundColor = color;
            }
        })
    }
    // le code de l'étape 3 se passe ici



});