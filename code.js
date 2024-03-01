document.addEventListener("DOMContentLoaded", () => {
    const texto = document.body.querySelector("#texto");
    texto.addEventListener("click", () => {
        if(texto.textContent === "Ola Mundo")
        texto.textContent = "Hello World";
        else
        texto.textContent= "Ola Mundo";
    });
});
