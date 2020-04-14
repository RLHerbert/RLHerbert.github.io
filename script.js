function removeTransition() {
    var body = document.getElementById("body");
    body.classList.remove("preload");
}

function darkModeToggle(){
    document.documentElement.style.setProperty('--page-body-background','var(--solarized-base03)')
}