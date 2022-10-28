var btn = document.querySelector('#btn-traduzir')
var ingles = document.querySelector('.p-ingles')
var br = document.querySelector('.p-pt-br')

btn.addEventListener('click', function() {
    if(br.style.display === 'block') {
        br.style.display = 'none';
    } else {
        br.style.display = 'block'
    }
    if(ingles.style.display === 'none') {
        ingles.style.display = 'block';
    } else {
        ingles.style.display = 'none'
    }
})