const btn = document.querySelector('#btn-traduzir');
const ingles = document.querySelector('.p-ingles');
const br = document.querySelector('.p-pt-br');

btn.addEventListener('click', function() {
    if(br.style.display === 'block') {
        br.style.display = 'none';
    } else {
        br.style.display = 'block';
    }
    if(ingles.style.display === 'none') {
        ingles.style.display = 'block';
    } else {
        ingles.style.display = 'none';
    }
});

/*
var btnAceitar = document.querySelector('#btn-aceitar')
var btnAbrir = document.querySelector('#btn-abrir')
var modal = document.querySelector('.modal')

btnAceitar.addEventListener('click', function() {
    if(modal.style.display === 'block') {
        modal.style.display = 'none';
    } else {
        modal.style.display = 'block';
    }
});

btnAbrir.addEventListener('click', function() {
    if(modal.style.display === 'none') {
        modal.style.display = 'block';
    } else {
        modal.style.display = 'none';
    }
});
*/
/*
const openModalBtn = document.querySelector('#open-modal');
const closeModalBtn = document.querySelector('#close-modal');
const modal = document.querySelector('.modal');

const toggleModal = () => {
    modal.classList.toggle('hide');
}

[openModalBtn, closeModalBtn].forEach((el) => {
    el.addEventListener('click', () => toggleModal());
});
*/
/*
function open(){
    var modal = document.querySelector('.modal')

    modal.style.display = 'block';
}
*/
