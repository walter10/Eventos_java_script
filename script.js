const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btncalcular');
const pReseult = document.querySelector('#result');


form.addEventListener('submit',btnOnClick);

function btnOnClick(event){
    event.preventDefault();
    let restulado = input1.value + input2.value ; 
    pReseult.innerText = "Resultado:  " + restulado;
    console.log (restulado);
}


