function logar() {
    let user = document.getElementById("login").value;
    let password = document.getElementById("senha").value;

    if (user === "tutor" && password === "123456") {
        window.open()
    }
    else if (user === "candidato " && password === "cand!098") {
        window.open()
    }
    else if (user === "Ong" && password === "ong$-135") {
        window.open()
    }
    else if (user === "prefeitura" && password === "pref@456") {
        window.open()
    }
    else {
        window.alert("Usuário ou senha inválidos!")
    }
}

function facebook() {
    window.open("https://www.facebook.com/")
}

function google() {
    window.open("https://www.google.com/")
}
