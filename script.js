let screen = document.getElementById('spaceOfScreen');
let boton1 = document.getElementById('button-1');
let boton2 = document.getElementById('button-2');
let boton3 = document.getElementById('button-3');
let botonmas = document.getElementById('button-+');
let boton4 = document.getElementById('button-4');
let boton5 = document.getElementById('button-5');
let boton6 = document.getElementById('button-6');
let botonmenos = document.getElementById('button--');
let boton7 = document.getElementById('button-7');
let boton8 = document.getElementById('button-8');
let boton9 = document.getElementById('button-9');
let botonmultiplicaion = document.getElementById('button-*');
let botonigual = document.getElementById('button-=');
let botonDelete = document.getElementById('button-DEL');
let botonTrash = document.getElementById('button-trash');

boton1.addEventListener('click', function () {
    screen.innerHTML += boton1.value
})
boton2.addEventListener('click', function () {
    screen.innerHTML += boton2.value
})
boton3.addEventListener('click', function () {
    screen.innerHTML += boton3.value
})
botonmas.addEventListener('click', function () {
    screen.innerHTML += botonmas.value
})
boton4.addEventListener('click', function () {
    screen.innerHTML += boton4.value
})
boton5.addEventListener('click', function () {
    screen.innerHTML += boton5.value
})
boton6.addEventListener('click', function () {
    screen.innerHTML += boton6.value
})
botonmenos.addEventListener('click', function () {
    screen.innerHTML += botonmenos.value
})
boton7.addEventListener('click', function () {
    screen.innerHTML += boton7.value
})
boton8.addEventListener('click', function () {
    screen.innerHTML += boton8.value
})
boton9.addEventListener('click', function () {
    screen.innerHTML += boton9.value
})
botonmultiplicaion.addEventListener('click', function () {
    screen.innerHTML += botonmultiplicaion.value
})
botonigual.addEventListener('click', function () {
    screen.textContent = eval(screen.textContent)
})
botonTrash.addEventListener('click', function () {
    screen.innerHTML = '';
})