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

divHeader.addEventListener("click", selectColor);
{for (let i=0;i<divHeader.length;i++)
    {console.log(getSelectedColor(i));}
}

    // le code de l'étape 3 se passe ici

});