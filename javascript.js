const btnmenu = document.getElementById('btn-menu');
const backmenu = document.getElementById('back-menu');
const menu = document.querySelector('nav ul');

btnmenu.addEventListener('click', () => {
    menu.style = 'opacity: 1; transition: opacity 0.2s ease-in-out;';
    btnmenu.style.display = 'none';
    backmenu.style.display = 'block';
});

backmenu.addEventListener('click', () => {
    menu.style = 'opacity: 0; transition: opacity 0.2s ease-in-out;';
    btnmenu.style.display = 'block';
    backmenu.style.display = 'none';
});

// Solução: limpa os estilos inline ao redimensionar a tela
window.addEventListener('resize', () => {
    menu.style.opacity = '';
    btnmenu.style.display = '';
    backmenu.style.display = '';
});

const seta = document.getElementById('notion');
const setaImg = document.getElementById('seta-1');
seta.addEventListener('mouseover',() => { 
    setaImg.style.transform = 'rotate(180deg)';
});
seta.addEventListener('mouseout',() => {
    setaImg.style.transform = 'rotate(0deg)';
});

const seta2 = document.getElementById('explorar');
const setaImg2 = document.getElementById('seta-2');

seta2.addEventListener('mouseover',() => { 
    setaImg2.style.transform = 'rotate(180deg)';
});
seta2.addEventListener('mouseout',() => {
    setaImg2.style.transform = 'rotate(0deg)';
});
