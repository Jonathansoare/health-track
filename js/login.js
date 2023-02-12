const inputEmail = document.getElementById('email-input');
const inputSenha = document.getElementById('input-senha');
const btn = document.querySelector('.btn-login');
const alert = document.getElementById('alert-msg');

const email = inputEmail.value
const senha = inputSenha.value;


document.addEventListener("click", (e) => {
    const el = e.target;

    if(el.classList.contains('btn-login')){
        validarLogin()
    }
    if(el.classList.contains('page-cadastro')){
        location.href = 'views/register.html'
    }
})

function validarLogin(){
    if(validaEmail() === true && validaPassword() === true){
        validarUser()
    }
}

function validaEmail(){
    const email = inputEmail.value

    function validarEmail(email){
        var emailPattern =  /^[_A-z0-9-]+(\.[_A-z0-9-]+)*@[A-z0-9-]+(\.[A-z0-9-]+)*(\.[A-z]{2,4})$/;
        var resul  = emailPattern.test(email);
        if (resul === true){
            return true
        }
        else{
            return false
        }
    }

    if(email === "" || validarEmail(email) !== true){
        erroInputs(inputEmail,"input-register-erro")
        mostraMsg("Por favor, forneça um endereço de email válido.",'msg-erro')
        return false
    }
    else{
        erroInputs(inputEmail,"input-register")
        mostraMsg("",'msg-erro')
        return true
    }
}

function validaPassword(){
    const senha = inputSenha.value;
    const emailLocal = JSON.parse(localStorage.getItem('user'))

    if(senha === ""){
        mostraMsg("Senha inválida",'msg-erro')
        erroInputs(inputSenha,"input-register-erro")
        return false;
    }
    mostraMsg("","msg-erro")
    erroInputs(inputSenha,"input-register")
    return true;
}

function erroInputs(a,y){
    a.classList.remove("input-register-erro" || "input-register")
    a.classList.add(y)
}

function mostraMsg(a,y){
    document.getElementById('alert-msg').innerHTML = a
    document.getElementById('alert-msg').classList.remove('msg-erro')
    document.getElementById('alert-msg').classList.remove('msg')
    document.getElementById('alert-msg').classList.add(y)
}

function validarUser(){
    const email = inputEmail.value;
    const senha = inputSenha.value;
    const mylocal = JSON.parse(localStorage.getItem('user'))

    if(validaEmail() === true && validaPassword() === true){
        if(email === (mylocal).email && senha === (mylocal).senha){
            location.href = 'views/dashboard.html'
            return true
        }
        else{
            mostraMsg("Usuario ou senha incorreta","msg-erro")
            setTimeout(() => {
                mostraMsg(" ",'msg')
            }, 5000);
        }

    }
}

