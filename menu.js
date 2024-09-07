const botonmenu = document.querySelector("#menuhamburguesa");

botonmenu.addEventListener("click", () => {
    const menu = document.querySelector("#menu");
    menu.classList.toggle("mostra-menu");
})