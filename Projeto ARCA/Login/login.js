window.onload = function() {
    let usuarioSalvo = localStorage.getItem("usuario");

    if (usuarioSalvo) {
        document.getElementById("login").value = usuarioSalvo;
        document.getElementById("lembrar").checked = true;
    }
}

function logar() {
    let user = document.getElementById("email").value;
    let password = document.getElementById("senha").value;
    let lembrar = document.getElementById("rememberMe").checked;

    if (user == "tutor" && password == 123456) {
        if (lembrar) {
            localStorage.setItem("usuario", "tutor");
        }
        window.location.href = "../Saiba Mais/saibaMais.html"
    }
    else if (user == "candidato " && password == "cand!098") {
        if (lembrar) {
            localStorage.setItem("usuario", "candidato");
        }
        window.location.href = "../Saiba Mais/saibaMais.html"
    }
    else if (user == "Ong" && password == "ong$-135") {
        if (lembrar) {
            localStorage.setItem("usuario", "Ong");
        }
        window.location.href = "../Saiba Mais/saibaMais.html"
    }
    else if (user == "prefeitura" && password == "pref@456") {
        if (lembrar) {
            localStorage.setItem("usuario", "prefeitura");
        }
        window.location.href = "../Saiba Mais/saibaMais.html"
    } else {    
        window.alert("Usuário ou senha inválidos!")
    }
}

// function mudarSenha(){
//     window.
// }

function facebook() {
    window.open("https://www.facebook.com/")
}

function google() {
    window.open("https://www.google.com/")  
}

const modal = document.getElementById("modal");
const abrirModal = document.getElementById("abrirModal");
const fecharModal = document.getElementById("fechar");

abrirModal.addEventListener("click", () => {
    modal.style.display = "flex";
});

fecharModal.addEventListener("click", () => {
    modal.style.display = "none";
});