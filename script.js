var darkMode = "darkMode";

function setDarkMode() {
    if (window.localStorage.getItem(darkMode)=="dark") {
        document.documentElement.style.setProperty('--page-body-background','#002b36');
        document.documentElement.style.setProperty('--page-area-background', '#073642');
        document.documentElement.style.setProperty('--page-font-color', '#93a1a1');
        document.documentElement.style.setProperty('--page-body-inverse', 'var(--solarized-base3)')
    }
    else {
        document.documentElement.style.setProperty('--page-body-background','#fdf6e3');
        document.documentElement.style.setProperty('--page-area-background', '#eee8d5');
        document.documentElement.style.setProperty('--page-font-color', '#586e75');
        document.documentElement.style.setProperty('--page-body-inverse', 'var(--solarized-base03)')
    }
}

function setDarkModeStorage() {
    //Toggles the darkMode localStorage and sets it to dark if it doesn't exist

    if (window.localStorage.getItem(darkMode)=="light") {
        window.localStorage.setItem(darkMode,"dark")
    }
    else {
        window.localStorage.setItem(darkMode,"light")
    }
}

function darkModeToggle() {
    setDarkModeStorage(); //Toggle the dark mode
    setDarkMode();
}

function pageLoad() {
    setDarkMode();

    var body = document.getElementById("body");
    body.classList.remove("preLoad");
    body.classList.add("postLoad");
}