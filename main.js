









// Propriedade onreadustatechange:

function loadDoc3() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById('content__server').innerHTML = 
            this.responseText;
        }
    }
    xhttp.open('GET', 'dados.txt');
    xhttp.send();
}

//No exemplo abaixo, existem múltiplos callbacks para a mesma requisição:


//loadDoc2("dados.txt", myFunction1)
//loadDoc2("dados.txt", myFunction2)


function loadDoc2(url, cFunction) {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        cFunction(this);
    }
    xhttp.open("GET", url);
    xhttp.send();

}

function myFunction1(xhttp) {
    console.log('myfunction 1');
}


function myFunction2(xhttp) {
    console.log('myfunction 2');
}

// XMLHttpRequest() exemple:

function loadDoc() {
    const xhttp = new XMLHttpRequest();
    const pageField = document.getElementById('content__server');

    xhttp.onload = function (){
        
        pageField.innerHTML = this.responseText;
    }
    xhttp.open("GET", "dados.txt");
    xhttp.send();
}

// onload example:

function onloadExample() {
    const xhttp = new XMLHttpRequest();    

    xhttp.onload = function() {
        document.getElementById('content__server').innerHTML = this.responseText;
    }
    xhttp.open('GET', "dados.txt");
    xhttp.send();
}



onloadExample()