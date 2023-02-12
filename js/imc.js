const mylocal = JSON.parse(localStorage.getItem('user'));


function listaTabela(){
    const mylocal = JSON.parse(localStorage.getItem('user'))
    const dados = JSON.parse(localStorage.getItem('user'))
    const imcMylocal =  (mylocal).imc;
    const indeseMylocal =  (mylocal).indese
    
    if(imcMylocal === null){
        document.getElementById('span-imc').innerHTML = "Sem IMC"
    }
    if(indeseMylocal === ""){
        document.getElementById('indese-imc').innerHTML =""
    }
    else{
        document.getElementById('span-imc').innerHTML =  (mylocal).imc + " -";
        document.getElementById('indese-imc').innerHTML = (mylocal).indese;
    }
}
listaTabela()

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