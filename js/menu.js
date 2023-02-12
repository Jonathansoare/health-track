let iconMenu = document.getElementById('iconMenu');
let sidebar = document.getElementById('sidebar');
let = main = document.getElementById('main-content')
sidebar.style.left = '-300px';
let w = window.innerWidth;

window.addEventListener("resize", () => {
    w = window.innerWidth;
})

if(w <= 768){
    sidebar.classList.add('hide');
}else{
    sidebar.classList.remove('hide');
}

function responsiveSiderbar() {
    if (w <= 768) {
       if( sidebar.classList.contains('hide') || sidebar.style.left == '-300px'){
        sidebar.style.left = '0px';
        sidebar.classList.remove('hide');
       }else{
        sidebar.style.left = '-300px';
       }
    } else {
        
        if (sidebar.style.display == 'none') {
            sidebar.style.display = 'block';
            main.style.width = 'calc(  100% - 300px)%'
            
        } else {
            sidebar.style.display = 'none';
            main.style.width = '100%'
            iconMenu.style.display = 'none';
        }
    }
}