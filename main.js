
/*
<section class="program">
        <h1 class="program__text">TO DO LIST</h1>
        <div class="program__container-input">
            <input class="program__input" type="text"  placeholder="Añadir tarea...">
            <button class="program__btn-anadir">AÑADIR</button>
        </div>
        <div class="program__container-list">
            <div class="program__tarea">
                <p class="program__nombre-tarea">tarea prueba</p>
                <div class="program__btndiv" >
                    <button class="program__btn-editar"><i class="fa-solid fa-pencil"></i></button>
                    <button class="program__btn-eliminar"><i class="fa-solid fa-trash"></i></button>
                </div>
            </div>
        </div>
    </section>
*/


//Identification:

let elementInput = document.querySelector('.program__input');
let elementAnadir = document.querySelector('.program__btn-anadir');
let elementList = document.querySelector('.program__container-list');
// let elementTarea = document.querySelector('.program__tarea');
// let elementNombreTarea = document.querySelector('.program__nombre-tarea');
// let elementDivBtn = document.querySelector('.program__btndiv');
// let elementBtnEditar = document.querySelector('.program__btn-editar');
// let elementBtnEliminar = document.querySelector('.program__btn-eliminar');





// Variables:

let contador;
let arrayTareas = [];
let dataObject= 0;
let iD = 0;

// Functions:

function borrarInput(){
    elementInput.value='';
}

function anadirTarea(tarea) {
    crearObjetoArray(tarea)
    anadirLocal(arrayTareas);
    borrarInput();
}
function pintarTareas (array){

    for ( let i = 0 ; i < array.length ; i++ ){

        console.log(array[i]);

        let elementTarea = document.createElement('div'); 
        elementTarea.classList.add('program__tarea');
        let elementNombreTarea = document.createElement('p');
        elementNombreTarea.classList.add('program__nombre-tarea');
        elementNombreTarea.textContent = array[i].name;
        let elementDivBtn = document.createElement('div');
        elementDivBtn.classList.add('program__btndiv');
        let elementBtnEditar = document.createElement('button');
        elementBtnEditar.classList.add('program__btn-editar');
        let elementBtnEliminar = document.createElement('button');
        elementBtnEliminar.classList.add('program__btn-eliminar');
        let elementIconEdit = document.createElement('i');
        elementIconEdit.classList.add('fa-solid', 'fa-pencil');
        let elementIconElim = document.createElement('i');
        elementIconElim.classList.add('fa-solid', 'fa-trash');

        elementBtnEliminar.appendChild(elementIconElim);
        elementBtnEditar.appendChild(elementIconEdit);
        elementDivBtn.appendChild(elementBtnEditar);
        elementDivBtn.appendChild(elementBtnEliminar);
        elementTarea.appendChild(elementNombreTarea);
        elementTarea.appendChild(elementDivBtn);
        elementList.appendChild(elementTarea);
    }  
}


function crearObjetoArray(tarea){   
    arrayTareas.push(arrayTareas[contador] = {name: tarea, estado: 'Activo', id: iD});
    contador++
    iD++
}

function anadirLocal(array) {
    localStorage.setItem('tarea', JSON.stringify(array));
    let data = localStorage.getItem('tarea');
    dataObject = JSON.parse(data);
    // console.log(dataObject);
    pintarTareas(dataObject);

    console.log(dataObject);

    // for (let i = 0; i < array.length; i++) {
    //     console.log(array[i].name);
    // }
}


// console.log(dataObject[0].name);

//Events:

elementAnadir.addEventListener('click', function(){anadirTarea(elementInput.value)});