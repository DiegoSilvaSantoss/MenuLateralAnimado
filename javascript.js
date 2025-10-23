const botaoMenu = document.querySelector('.botao-menu')
const menuLateral = document.querySelector('.menu-lateral')
const conteudo = document.querySelector('.conteudo')
const fundo = document.querySelector('.fundo')

botaoMenu.addEventListener('click', () => {
    botaoMenu.classList.toggle('ativo')
    menuLateral.classList.toggle('ativo')
    conteudo.classList.toggle('ativo')
    fundo.classList.toggle('ativo')
    document.body.style.backgroundColor = menuLateral.classList.contains('ativo') ? '#34495e' : '#fff'
})


fundo.addEventListener('click', () => {
    botaoMenu.classList.remove('ativo')
    menuLateral.classList.remove('ativo')
    conteudo.classList.remove('ativo')
    fundo.classList.remove('ativo')
    document.body.style.backgroundColor = '#fff'
})