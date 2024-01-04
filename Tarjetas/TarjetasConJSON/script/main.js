fetch('data/players.json')
    .then(response => response.json())
    .then(data => {
        
        const cards = document.getElementById('cards')

        for(player of data){
            
            cards.innerHTML += `<div class="card">
            <h2>${player.jugador}</h2>
            <img src="${player.imagen}">
            <div class="info">
            <p>Nacimiento: ${player.fechaNacimiento}</p>
            <p>Cantera: ${player.cantera}</p>
            </div>
            </div>`
        }

    })