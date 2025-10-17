/* 01 MAPEAMENTO DAS CLASSES DO HTML*/
const botao = document.querySelector('.botao-menu')
 const menuLateral = document.querySelector('.menu-lateral')
 const conteudo = document.querySelector('.conteudo')
 const background = document.querySelector('.background')

 /* 02 FICAR DE OLHO NO BOTÃO AO CLICAR */
 botao.addEventListener('click', () => {

    /* 03 ADICIONAR A CLASSE ATIVO NAS CLASSES NO HTML */
    menuLateral.classList.toggle('ativo')
    botao.classList.toggle('ativo')
    conteudo.classList.toggle('ativo')
    background.classList.toggle('ativo')                    /* IF E ELSE TERNÁRIO */
    document.body.style.backgroundColor = menuLateral.classList.contains('ativo') ? '#34495e' : '#ecf0f1'
 })


/* 04 FICAR DE OLHO NO BACKGROUND AO CLICAR, REMOVER A CLASSE ATIVO DAS CLASSES E MUDAR A COR DO BACKGROUND */
 background.addEventListener('click', () => {
    menuLateral.classList.remove('ativo')
    botao.classList.remove('ativo')
    conteudo.classList.remove('ativo')
    background.classList.remove('ativo')
    document.body.style.backgroundColor = '#ecf0f1'
 })