let movimientos = 0;

// Obtener los postes
const poste1 = document.getElementById('poste1');
const poste2 = document.getElementById('poste2');
const poste3 = document.getElementById('poste3');

// Event listeners para los discos
poste1.addEventListener('click', moverDisco);
poste2.addEventListener('click', moverDisco);
poste3.addEventListener('click', moverDisco);

function moverDisco(e) {
    const posteOrigen = e.currentTarget;
    const discos = posteOrigen.querySelectorAll('.disco');

    if (discos.length > 0) {
        const discoSeleccionado = discos[discos.length - 1];
        const posteDestino = obtenerPosteDestino(posteOrigen);

        if (puedeMover(posteOrigen, posteDestino, discoSeleccionado)) {
            // Mover el disco al poste destino
            posteDestino.appendChild(discoSeleccionado);
            movimientos++;
            console.log(`Movimiento ${movimientos}: Disco movido de poste ${posteOrigen.id} a poste ${posteDestino.id}`);
        }
    }
}

function obtenerPosteDestino(posteOrigen) {
    // Devuelve el siguiente poste según la lógica de Torres de Hanoi
    const postes = [poste1, poste2, poste3].filter(p => p !== posteOrigen);
    return postes[0]; // Devuelve el primer poste que no es el origen
}

function puedeMover(posteOrigen, posteDestino, disco) {
    const discosDestino = posteDestino.querySelectorAll('.disco');
    const ultimoDiscoDestino = discosDestino[discosDestino.length - 1];

    // Verificar si se puede mover el disco según las reglas de Torres de Hanoi
    if (!ultimoDiscoDestino || +disco.style.width.replace('%', '') < +ultimoDiscoDestino.style.width.replace('%', '')) {
        return true;
    } else {
        console.log('Movimiento no válido');
        return false;
    }
}
