const form = document.getElementById('formulario');
const campoa = document.getElementById('campo-a');
const campob = document.getElementById('campo-b');
const botao = document.getElementById('btn');
const msg = document.querySelector('.output-msg');



form.addEventListener('submit',  function(e) {
    e.preventDefault()
    if (campoa.value < campob.value) {
        
        console.log("Formulário válido!")
        msg.innerHTML = `Formulário válido!`
        msg.style = ''
        
        //alert('error')
    } else {
        console.log("Formulário inválido!")
        msg.innerHTML = 'Formulário inválido!'
        msg.style.color = 'red'
        
    }})