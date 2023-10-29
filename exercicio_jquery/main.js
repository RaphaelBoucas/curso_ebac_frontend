$(document).ready(function() {

const novoCampo = $('#lista-tarefa');

$('header #cadastra-tarefa').click(function(e) {
    e.preventDefault();
    const tarefaDigitada = $('#campo-tarefas').val();
    const itemListado = $(`<li>${tarefaDigitada}</li>`);



    $('#lista-tarefa').append(itemListado);
    
    itemListado.click(function() {
    $(this).toggleClass('crossOut');
    console.log(this)
    })

})

$('header #reseta-tarefa').click(function() {


    novoCampo.empty();


})


})









