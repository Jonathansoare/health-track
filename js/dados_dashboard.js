const mylocal = JSON.parse(localStorage.getItem('user'))
    const dados = JSON.parse(localStorage.getItem('user'))
function listaTabela(){
    const pesoMylocal =  (mylocal).peso;
    const alturaMylocal =  (mylocal).altura;
    const dataMylocal =  (mylocal).data
    const porcePesoIndese = document.getElementById('porce-peso-ds').innerHTML
    
    boxPeso()
    boxPressao()
    boxImc()
    boxAtividade()
}
listaTabela()


function boxPeso(){
    const mylocal = JSON.parse(localStorage.getItem('user'))
    const valuePeso = document.getElementById('value-peso-ds')
    const indesePorcePesoUp = document.getElementById('porce-peso-ds-up')
    const indesePorcePesoDn = document.getElementById('porce-peso-ds-dn')
    const indesePorcePeso = document.getElementById('porce-peso-ds')
    const valuePorcePeso = document.getElementById('value-porce-peso')
    const pesoNovo = mylocal.peso;
    const porceFinal = mylocal.porcentagem_peso

    if(mylocal.peso === null){
        valuePeso.innerHTML = "00"
    }
    else{
        valuePeso.innerHTML = pesoNovo + "Kg"
        valuePorcePeso.innerHTML = porceFinal + "%"
    }

// Validar porcentagem se é positiva ou negativa
    if(porceFinal > 0){
        indesePorcePeso.style.display = "none"
        indesePorcePesoUp.style.display = "block"
        valuePorcePeso.style.color = "green"
    }
    else if(porceFinal === 0 ){
        indesePorcePeso.style.display = "block"
        indesePorcePesoUp.style.display = "none"
        valuePorcePeso.style.color = "white"
    }
    else if(porceFinal < 0){
        indesePorcePeso.style.display = "none"
        indesePorcePesoDn.style.display = "block"
        valuePorcePeso.style.color = "red"
    }
}

function boxPressao(){
    const mylocal = JSON.parse(localStorage.getItem('user'))
    const pesoInput = document.getElementById('peso')
    const indesePorcePressaoUp = document.getElementById('porce-pressao-ds-up')
    const indesePorcePressaoDn = document.getElementById('porce-pressao-ds-dn')
    const indesePorcepressao = document.getElementById('porce-pressao-ds')
    const valuePressao = document.getElementById('value-pressao-ds')
    const valuePorcePressao = document.getElementById('value-porce-pressao')
    const pressao = mylocal.pressao
    const porcentagem = mylocal.porcentagem_pressao

    if(pressao === null){
        valuePressao.innerHTML = "00"
    }
    else{
        valuePressao.innerHTML = pressao + "MMC"
        valuePorcePressao.innerHTML = porcentagem + "%"
    }
    if(porcentagem > 0){
        indesePorcepressao.style.display = "none"
        indesePorcePressaoUp.style.display = "block"
        valuePorcePressao.style.color = "green"
    }
    else if(porcentagem === 0 ){
        indesePorcepressao.style.display = "block"
        indesePorcePressaoUp.style.display = "none"
        valuePorcePressao.style.color = "white"
    }
    else if(porcentagem < 0){
        indesePorcepressao.style.display = "none"
        indesePorcePressaoDn.style.display = "block"
        valuePorcePressao.style.color = "red"
    }
}

function boxImc(){
    const mylocal = JSON.parse(localStorage.getItem('user'))
    const indesePorceImcUp = document.getElementById('porce-imc-ds-up')
    const indesePorceImcDn = document.getElementById('porce-imc-ds-dn')
    const indesePorceImc = document.getElementById('porce-imc-ds')
    const valueImc = document.getElementById('value-imc-ds')
    const valuePorceImc = document.getElementById('value-porce-imc')
    const porceFinal = mylocal.porcentagem_imc
    const imc = (mylocal).imc
    const indeseImc = document.getElementById("indese-imc")

   if(imc === null){
    valueImc.innerHTML = '00'
   }
    else{
        valueImc.innerHTML = imc
        valuePorceImc.innerHTML = porceFinal + "%"
        
        if(mylocal.indese === "Abaixo do Peso"){
            indeseImc.innerHTML = mylocal.indese
            indeseImc.style.color = "red"
        }

        else if(mylocal.indese === "Peso normal"){
            indeseImc.innerHTML = mylocal.indese
            indeseImc.style.color = "green"
        }

        else if(mylocal.indese === "Sobrepeso"){
            indeseImc.innerHTML = mylocal.indese
            indeseImc.style.color = "yellow"
        }
        else if(mylocal.indese === "Obesidade grau 1" || "Obesidade grau 2" || "Obesidade grau 3"){
            indeseImc.innerHTML = mylocal.indese
            indeseImc.style.color = "red"
        }
    }
    if(porceFinal > 0){
        indesePorceImc.style.display = "none"
        indesePorceImcUp.style.display = "block"
        valuePorceImc.style.color = "green"
    }
    else if(porceFinal === 0 ){
        indesePorceImc.style.display = "block"
        indesePorceImcUp.style.display = "none"
        valuePorceImc.style.color = "white"
    }
    else if(porceFinal < 0){
        indesePorceImc.style.display = "none"
        indesePorceImcDn.style.display = "block"
        valuePorceImc.style.color = "red"
    }
}

function boxAtividade(){
    const mylocal = JSON.parse(localStorage.getItem('user'))
    const atividadeMylocal = mylocal.tipo;
    const atividade = document.getElementById('atividade-ds')
    const dataMylocal = mylocal.dataAtividade.split("|",3)[1]

    const data = document.getElementById('date-atividade-ds')

    if(atividadeMylocal === ""){
        atividade.innerHTML = "Sem atividade"
        data.innerHTML = "Sem data"
    }
    else{
        atividade.innerHTML = atividadeMylocal
        data.innerHTML = dataMylocal
    }
}

function AmostraPopUp(){
    const popUp = document.querySelector('.popup-wrapper')
    popUp.style.display = 'flex'
    let sidebar = document.getElementById('sidebar');
    sidebar.style.left = '-300px';

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
            location.href="../index.html" 
        }
    })
}