const lista = document.querySelector('.lista')
const modal = document.querySelector('.modal')
const baseModal = document.querySelector('.base-modal')



for(i of carlist){
    
    lista.innerHTML += `<div class="linea">
    <div class="auto" data-id="${i.ident}">${i.marca} - ${i.modelo}</div>
    <div class="dato" data-id="${i.ident}">${i.ano}</div>
    <div class="dato" data-id="${i.ident}">${i.color}</div>
    </div>`
}

 

let cerrarModal = () => {

    modal.style.display = 'none'
    baseModal.style.display = 'none'
}

let armarModal = (numeroID) => {

    let autoSeleccionado = carlist.find(a => a.ident == numeroID)

    modal.innerHTML = `<h2>${autoSeleccionado.marca} - ${autoSeleccionado.modelo}</h2>
    <img src="${autoSeleccionado.imagen}">
    <h3>Informacion</h3>
    <p>${autoSeleccionado.kilometros} KM</p>
    <p>Color: ${autoSeleccionado.color}</p>
    <p>Año: ${autoSeleccionado.ano}</p>
    <h4>$ ${autoSeleccionado.precio}</h4>
    <button onclick="cerrarModal()">Cerrar</button>`

    modal.style.display = 'block'
    baseModal.style.display = 'block'
}


lista.addEventListener('click', (e) => {

    let seleccion = e.target.dataset.id

    if(seleccion !== undefined){
        armarModal(seleccion)
    }
    
})