const boutons = document.querySelectorAll("input[type='button']");
const affichage = document.getElementById("resultat");
const effacer = document.getElementById("effacer")
const egal = document.getElementById("egal")

boutons.forEach(button => {
    button.addEventListener("click", () => {
        console.log(button.value);
        affichage.value += button.value;
    });
});

effacer.addEventListener("click", () => {
    affichage.value = ""
})

egal.addEventListener("click", () => { 
    const expression = affichage.value
        .replace(/x/g,'*') 
        .replace(/÷/g,'/')   
    affichage.value = eval(expression)
})

