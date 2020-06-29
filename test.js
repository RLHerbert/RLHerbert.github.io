function load() {
    let elem = document.getElementById("drop_button_id");

    elem.classList.add("transition");

    console.log("load() called")
}

function navHoverIn() {
    // console.log("Mouse over nav");
    let nav = document.getElementById("drop_button_id");

    nav.classList.add("drop_button_hover");
}

function navHoverOut() {
    let nav = document.getElementById("drop_button_id");

    nav.classList.remove("drop_button_hover");
}