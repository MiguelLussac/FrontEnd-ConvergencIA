function aplicarFonte(input) {
    if (input.checked) {
        document.body.style.fontFamily = "'OpenDyslexic', 'Inter', sans-serif";
    } else {
        document.body.style.fontFamily = "'Inter', sans-serif";
    }
}

function aplicarContraste(input) {
    if (input.checked) {
        document.body.style.filter = "contrast(1.3)";
        document.body.style.backgroundColor = "#000";
        document.body.style.color = "#fff";
    } else {
        document.body.style.filter = "";
        document.body.style.backgroundColor = "";
        document.body.style.color = "";
    }
}