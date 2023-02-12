const pressaoInput = document.getElementById('pressao')
const formInput = document.getElementById('dynamic-content-cadastro').innerHTML
const abri_tela = document.getElementById('abri-pressao')
const btn = document.getElementById('cadastra-pressao')

btn.addEventListener("click", (el) => {
    el.preventDefault()

    const pressao = pressaoInput.value

    if(pressao == ""){
        mostraMsg("Pressão invalida",'msg-erro')
    }
    else{
        cadastraPressao(pressao)
    }
})


function listaTabela(){
    const mylocal = JSON.parse(localStorage.getItem('user'))
    const pressaoMylocal = (mylocal).pressao;
    const dataMylocal = (mylocal).dataPressao

    if(pressaoMylocal === null){
        document.getElementById('pressao-vizul').innerHTML = "Sem pressão"
    }
    if(dataMylocal === null){
        document.getElementById('date-vizul').innerHTML = "Sem data"
    }
    else{
        document.getElementById('pressao-vizul').innerHTML = (mylocal).pressao + "MMC";
        document.getElementById('date-vizul').innerHTML = (mylocal).dataPressao;
    }
}
function AmostraformCadastro(){
    if(document.getElementById('dynamic-content-vizul').style.display == "block"){
        ////////////////////////////////////////////////////////////////
        document.getElementById('dynamic-content-vizul').style.display = "none";

        //////////////////////////////////////////////////////////////////
        document.getElementById('dynamic-content-cadastro').style.display = "block";
    }

    ////////////////////////////////////////////////////////////////
    
    else if(document.getElementById('dynamic-content-cadastro').style.display == "block"){
        ////////////////////////////////////////////////////////////////
        document.getElementById('dynamic-content-cadastro').style.display = "none"
    }

    ////////////////////////////////////////////////////////////////

    else{
        ////////////////////////////////////////////////////////////////
        document.getElementById('dynamic-content-cadastro').style.display = "block" 
        document.getElementById('dynamic-content-vizul').style.display = "none"
    }
}

function AmostraFormVizul(){
    if(document.getElementById('dynamic-content-cadastro').style.display == "block"){
        ////////////////////////////////////////////////////////////////
        document.getElementById('dynamic-content-cadastro').style.display = "none";

        ////////////////////////////////////////////////////////////////
        document.getElementById('dynamic-content-vizul').style.display = "block";
    }

    ////////////////////////////////////////////////////////////////
    else{
        if(document.getElementById('dynamic-content-vizul').style.display == "block"){
            ////////////////////////////////////////////////////////////////
            document.getElementById('dynamic-content-vizul').style.display = "none"
        }

        ////////////////////////////////////////////////////////////////
        else{
            ////////////////////////////////////////////////////////////////
            document.getElementById('dynamic-content-vizul').style.display = "block"
            listaTabela()
}}}
function mostraMsg(a,y){
    document.getElementById('alert-msg').innerHTML = a
    document.getElementById('alert-msg').classList.remove('msg-erro')
    document.getElementById('alert-msg').classList.remove('msg')
    document.getElementById('alert-msg').classList.add(y)
    setTimeout(() => {
        document.getElementById('alert-msg').innerHTML = ""
        document.getElementById('alert-msg').classList.remove('msg-erro')
        document.getElementById('alert-msg').classList.remove('msg')
        document.getElementById('alert-msg').style.transition = '0.2s'
    }, 5000);
}
function erroInputs(a,y){
    a.classList.remove("input-register-erro" || "input-register")
    a.classList.add(y)
}

function editar(){
    AmostraformCadastro()
    document.getElementById('dynamic-content-cadastro').style.display = "block"
    document.getElementById('dynamic-content-vizul').style.display = "none"
    btn.addEventListener("click", () => {
        document.getElementById('dynamic-content-vizul').style.display = "block";    
    })
}

function apagar(){
    const mylocal = JSON.parse(localStorage.getItem('user'))

    document.getElementById('dynamic-content-vizul').style.display = "none"

    const user = JSON.stringify({
        nome:mylocal.nome,
        idade:mylocal.idade,
        genero:mylocal.genero,
        email:mylocal.email,
        senha:mylocal.senha,
        peso:mylocal.peso,
        altura:mylocal.altura,
        dataPeso:mylocal.dataPeso,
        dataPressao:null,
        pressao:null,
        dataAtividade:mylocal.dataAtividade,
        tipo:mylocal.tipo,
        duracao:mylocal.duracao,
        dataAlimento: mylocal.dataAlimento,
        ultimo_alimento: mylocal.ultimo_alimento,
        calorias: mylocal.calorias,
        porcentagem_peso:mylocal.porcentagem_peso,
        porcentagem_pressao:null,
        imc: mylocal.imc,
        porcentagem_imc:mylocal.porcentagem_imc,
        indese:mylocal.indese
    });
    localStorage.setItem('user',user)
}

function porcentagemPressao(){
    const mylocal = JSON.parse(localStorage.getItem('user'))
    const pressaoNovo = pressaoInput.value
    const pressaoAntiga = mylocal.pressao;

    if(pressaoAntiga === null){
        return 00
    }else{
        const porcentagem = pressaoNovo / pressaoAntiga -1
        const porceFinal = (porcentagem * 100).toFixed(2)
        return porceFinal
    }
}

function cadastraPressao(pressao){
    const mylocal = JSON.parse(localStorage.getItem('user'))
    const data = new Date();
    let dia = data.getDate()
    let ano = data.getFullYear()
    let diaMes = data.getMonth()
    // [0]-dadosPessoais [1]-dadosPeso [2]-pressao [3]-atividade [4]-alimentos [5]-dashboard
    const user = JSON.stringify({
        nome:mylocal.nome,
        idade:mylocal.idade,
        genero:mylocal.genero,
        email:mylocal.email,
        senha:mylocal.senha,
        peso:mylocal.peso,
        altura:mylocal.altura,
        dataPeso:mylocal.dataPeso,
        dataPressao:data.toLocaleTimeString() + ' |' + ' ' + dia+'/'+diaMes+'/'+ano,
        pressao:pressao,
        dataAtividade:mylocal.dataAtividade,
        tipo:mylocal.tipo,
        duracao:mylocal.duracao,
        dataAlimento: mylocal.dataAlimento,
        ultimo_alimento: mylocal.ultimo_alimento,
        calorias: mylocal.calorias,
        porcentagem_peso:mylocal.porcentagem_peso,
        porcentagem_pressao:porcentagemPressao(),
        imc: mylocal.imc,
        porcentagem_imc:mylocal.porcentagem_imc,
        indese:mylocal.indese,
    })
    localStorage.setItem('user',user)
    document.getElementById('dynamic-content-cadastro').style.display = "none"
    AmostraFormVizul()
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