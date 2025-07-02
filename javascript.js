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