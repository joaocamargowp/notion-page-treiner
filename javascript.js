const btnmenu = document.getElementById('btn-menu');
const backmenu = document.getElementById('back-menu');
const menu = document.querySelector('nav ul');

btnmenu.addEventListener('click', () => {
    menu.style.display = 'flex';
    btnmenu.style.display = 'none';
    backmenu.style.display = 'block';
});

backmenu.addEventListener('click', () => {
    menu.style.display = 'none';
    btnmenu.style.display = 'block';
    backmenu.style.display = 'none';
});

// Solução: limpa os estilos inline ao redimensionar a tela
window.addEventListener('resize', () => {
    menu.style.display = '';
    btnmenu.style.display = '';
    backmenu.style.display = '';
});

const seta = document.getElementById('notion');
const setaImg = document.getElementById('seta-1');
seta.addEventListener('click', () => {
    if (setaImg.style.transform === 'rotate(180deg)') {
        setaImg.style.transform = 'rotate(0deg)';
    } else {
        setaImg.style.transform = 'rotate(180deg)';
    }
});

const seta2 = document.getElementById('explorar');
const setaImg2 = document.getElementById('seta-2');

seta2.addEventListener('click', () => {
    if (setaImg2.style.transform === 'rotate(180deg)') {
        setaImg2.style.transform = 'rotate(0deg)';
    } else {
        setaImg2.style.transform = 'rotate(180deg)';
    }
});
