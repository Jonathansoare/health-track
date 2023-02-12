const emailInput = document.getElementById('input-email');
const senhaInput = document.getElementById('input-senha');
const nomeInput = document.getElementById('input-Nome')
const btnSalva = document.getElementById('btn-salva');
const btnExcluir = document.getElementById('btn-excluir-conta')
const alert = document.getElementById('alert-msg').innerHTML;
const idadeInput = document.getElementById('input-Idade')
const generoSelect = document.getElementById('genero')

btnSalva.addEventListener("click",(el) =>{
    el.preventDefault()
    const email = emailInput.value;
    const senha = senhaInput.value;
    const nome = nomeInput.value;
    const idade = idadeInput.value;
    const genero = generoSelect.value;

    editarUser(nome,idade,genero,email,senha)    
})

btnExcluir.addEventListener('click', (el) =>{
    el.preventDefault()
    AmostraPopUpConta()
})



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

function validaInputNome(){
    const nome = nomeInput.value

    function validarNome(nome){
        var nomePattern = /[A-z][ ][A-z]/;
        var resul  = nomePattern.test(nome);
        if (resul === true){
            return true
        }
        else{
            return false
        }
    }
    if(nome === ""){
        erroInputs(nomeInput,"input-register-erro")
        mostraMsg("Nome inválido",'msg-erro')
        return false
    }
    if(validarNome(nome) !== true){
        erroInputs(nomeInput,"input-register-erro")
        mostraMsg("Digite seu nome completo",'msg-erro')
        return false
    }
    else{
        erroInputs(nomeInput,"input-register");
        mostraMsg("")
        return true
    }
}

function validaInputIdade(){
    const idade = idadeInput.value
    
    if(idade === ""){
        mostraMsg("Idade inválida",'msg-erro')
        erroInputs(idadeInput,"input-register-erro")
        return false
    }
    if(idade < 18){
        mostraMsg("So pode cria conta acima de 18 Anos",'msg-erro')
        erroInputs(idadeInput,"input-register-erro")
        return false
    }
    else{
        mostraMsg("")
        erroInputs(idadeInput,"input-register")
        return true
    }
}
function validaGenero(){
    const genero = generoSelect.value
    if(genero === "seleciona"){
        mostraMsg("Selecione um Genero")
        erroInputs(generoSelect,"input-register-erro")
        return false
    }
    else{
        mostraMsg("")
        erroInputs(generoSelect,"input-register")
        return true
    }
}

function validaInputEmail(){
    const email = emailInput.value
    function validarEmail(email){
        var emailPattern =  /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
        var resul  = emailPattern.test(email);
        if (resul === true){
            return true
        }
        else{
            return false
        }
    }
    
    if(email === ""){
        erroInputs(emailInput,"input-register-erro")
        mostraMsg("Email inválido")
        return false
    }
    if(validarEmail(email) !== true){
        erroInputs(emailInput,"input-register-erro")
        mostraMsg("Por favor, forneça um endereço de email válido.",'msg-erro')
        return false
    }
    else{
        erroInputs(emailInput,"input-register")
        mostraMsg("")
        return true
    }
}

function validaInputSenha(){
    const senha = senhaInput.value
    if(senha === ""){
        mostraMsg("Senha inválida",'msg-erro')
        erroInputs(senhaInput,"input-register-erro")
        return false
    }
    if(senha.length < 8){
        mostraMsg("Presisa der 8 caracteres",'msg-erro')
        erroInputs(senhaInput,"input-register-erro")
        return false
    }
    else{
        mostraMsg("")
        erroInputs(senhaInput,"input-register-erro")
        return true
    }
}
function editarUser(nome,idade,genero,email,senha){
    const mylocal = JSON.parse(localStorage.getItem('user'))

    const user = JSON.stringify({
        nome:nome,
        idade:idade,
        genero:genero,
        email:email,
        senha:senha,
        peso:mylocal.peso,
        altura:mylocal.altura,
        dataPeso:mylocal.dataPeso,
        dataPressao:mylocal.dataPressao,
        pressao:mylocal.pressao,
        dataAtividade:mylocal.dataAtividade,
        tipo:mylocal.tipo,
        duracao:mylocal.duracao,
        dataAlimento: mylocal.dataAlimento,
        ultimo_alimento: mylocal.ultimo_alimento,
        calorias: mylocal.calorias,
        porcentagem_peso: mylocal.porcentagem_peso,
        porcentagem_pressao: mylocal.porcentagem_pressao,
        imc: mylocal.imc,
        porcentagem_imc:mylocal.porcentagem_imc,
        indese:mylocal.indese,
    })

    localStorage.setItem("user",user)  
    mostraMsg("Usuario editado com sucesso",'msg')
    setTimeout(() => {
        mostraMsg("",'msg')
    }, 5000);
}

function mostradados(){
    const mylocal = JSON.parse(localStorage.getItem('user'))
    document.getElementById('input-email').value = (mylocal).email
    document.getElementById('input-Nome').value = (mylocal).nome
    document.getElementById('input-Idade').value = (mylocal).idade
    document.getElementById('genero').value = (mylocal).genero
    document.getElementById('input-senha').value = (mylocal).senha
    
}

function excluirConta(){
    location.href = '/index.html'
    localStorage.removeItem('user')
}

function AmostraPopUpConta(){
    const popUp = document.querySelector('.popup-wrapper')

    popUp.style.display = 'flex'

    document.addEventListener("click", (e) =>{
        const el = e.target

        if(el.classList.contains('popup-close')){
            popUp.style.display = 'none'
        }
        if(el.classList.contains('popup-wrapper')){
            popUp.style.display = 'none'
        }
        if(el.classList.contains('btnPopupNao')){
            popUp.style.display = 'none'
        }
        if(el.classList.contains('btnPopupSim')){
            popUp.style.display = 'none'
            excluirConta()
        }
    })
}
function AmostraPopUp(){
    const popUp = document.querySelector('.popup-wrapper-logount')
    popUp.style.display = 'flex'
    let sidebar = document.getElementById('sidebar');
    sidebar.style.left = '-300px';

    document.addEventListener("click", (e) =>{
        const el = e.target

        if(el.classList.contains('popup-close')){
            popUp.style.display = 'none'
        }
        if(el.classList.contains('popup-wrapper-logount')){
            popUp.style.display = 'none'
        }
        if(el.classList.contains('btnPopupNao')){
            popUp.style.display = 'none'
        }
        if(el.classList.contains('btnPopupSim')){
            popUp.style.display = 'none'
            location.href="../index.html" 
        }
    })
}


function mostraSenha(){
    var temp = senhaInput;
    if (temp.type === "password") {
        temp.type = "text";
    }
    else {
        temp.type = "password";
    }
}
mostradados()