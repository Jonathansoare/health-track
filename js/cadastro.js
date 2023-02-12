const emailInput = document.getElementById('input-email')
const nomeInput = document.getElementById('input-nome');
const senhaInput = document.getElementById('input-senha');
const idadeInput = document.getElementById('idade')
const generoSelect = document.getElementById('genero')
const checkbox = document.getElementById('checkbox-1')


document.addEventListener("click", (e) =>{
    const el = e.target;

    const nome = nomeInput.value;
    const idade = idadeInput.value;
    const genero = generoSelect.value;
    const email = emailInput.value;
    const senha = senhaInput.value;
    if(el.classList.contains('btn')){
        validaForm(nome,idade,genero,email,senha)
    }    
});

function erroInputs(a,y){
    a.classList.remove("input-register-erro" || "input-register")
    a.classList.add(y)
}

function mostraMsg(msg,campo){
    document.getElementById('alert-msg').innerHTML = msg
    document.getElementById('alert-msg').classList.remove('msg-erro')
    document.getElementById('alert-msg').classList.remove('msg')
    document.getElementById('alert-msg').classList.add(campo)
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
        mostraMsg("Nome inválido")
        return false
    }
    if(validarNome(nome) !== true){
        erroInputs(nomeInput,"input-register-erro")
        mostraMsg("Digite seu nome completo")
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
        mostraMsg("Idade inválida")
        erroInputs(idadeInput,"input-register-erro")
        return false
    }
    if(idade < 18){
        mostraMsg("So pode cria conta acima de 18 Anos")
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
        var emailPattern =  /^[_A-z0-9-]+(\.[_A-z0-9-]+)*@[A-z0-9-]+(\.[A-z0-9-]+)*(\.[A-z]{2,4})$/;
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
        mostraMsg("Por favor, forneça um endereço de email válido.")
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
        mostraMsg("Presisa der 8 caracteres")
        erroInputs(senhaInput,"input-register-erro")
        return false
    }
    else{
        mostraMsg("")
        erroInputs(senhaInput,"input-register")
        return true
    }
}

function validaForm(nome,idade,genero,email,senha){
    if(validaInputNome() === true && validaInputIdade() === true && validaGenero() === true && validaInputEmail() === true && validaInputSenha() === true){
        cadastrauser(nome,idade,genero,email,senha)
    }
}


function cadastrauser(nome,idade,genero,email,senha){
    const mylocal = JSON.parse(localStorage.getItem('user'))

    const user = JSON.stringify({
        nome:nome,
        idade:idade,
        genero:genero,
        email:email,
        senha:senha,
        peso:null,
        altura:null,
        dataPeso:null,
        dataPressao:null,
        pressao:null,
        dataAtividade:null,
        tipo:'',
        duracao:null,
        dataAlimento: null,
        ultimo_alimento: '',
        calorias: null,
        porcentagem_peso: null,
        porcentagem_pressao: null,
        imc: null,
        porcentagem_imc:null,
        indese:""
    })

    if(localStorage.getItem('user') === null){
        localStorage.setItem('user',user)
        location.href = '../views/dashboard.html'
    }
    else{
        if((mylocal).email === email){
            mostraMsg("Email já cadastrado",'msg-erro')
            setTimeout(() => {
                mostraMsg(" ",'msg')
            }, 5000);
        }else{
            localStorage.setItem("user",user)  
            location.href = '../views/dashboard.html'
        }
        }
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

/*
function cadastraUser(nome,idade,genero,nome,senha){
    const mylocal = JSON.stringify(localStorage.getItem(''))

    [0]-dadosPessoais [1]-dadosPeso [2]-pressao [3]-atividade [4]-alimentos [5]-dashboard
    const user = JSON.stringify({
        nome:nome,
        nome:nome,
        idade:idade,
        genero:genero,
        senha:senha
        peso:Object.entries(mylocal)[1][1].peso || null,
        altura:Object.entries(mylocal)[1][1].altura || null,
        data:Object.entries(mylocal)[1][1].data || null,
        data:Object.entries(mylocal)[2][1].data || null,
        pressao:Object.entries(mylocal)[2][1].pressao || null,
        data:Object.entries(mylocal)[3][1].data || null,
        tipo:Object.entries(mylocal)[3][1].tipo || '',
        duracao:Object.entries(mylocal)[3][1].duracao || null,
        data: null,
        ultimo_alimento: '',
        calorias: null
        porcentagem_peso: null,
        porcentagem_pressao: null,
        imc: null,
        porcentagem_imc:null,
        indese:""
    }
}) 
    const id = Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    const nomeLocal = JSON.parse(localStorage.getItem('user'))
    if(localStorage.getItem('user') === null){
        console.log("user nao existe");
        localStorage.setItem('user',user)
        mostraMsg("",'msg')
        mostraMsg("Usuario cadastrado com sucesso!",'msg')
    }
    else{
        if(Object.entries(nomeLocal)[0][1].nome === nome){
        mostraMsg("Usuario ja cadastrado",'msg-erro')
        mostraMsg("",'msg')
        console.log("usuario ja existe");
        }else{
            localStorage.setItem("user",user)  
            mostraMsg("",'msg')
            mostraMsg("Usuario cadastrado com sucesso!",'msg')
    }
    }
}*/
/*
$(document).ready(function(){
        
    $("#form-register").validate({
        rules: {
            "nome": {
            required: true,
            maxLength:50,
            minLength:2
            },
            "idade":{
            required:true,
            min:1,
            min:120
            },
            "input-nome":{
            required:true,
            nome:true
            },
        },
        submitHandler:function(form){
            alert("Formulario enviado com sucesso!")()
        }
})}*/