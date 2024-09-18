//Crear función para lanzar los dados
function lanzarDados() {
    //Se generan números aleatorios entre 1 y 6 para ambos jugadores
    const dadoJugador1 = Math.floor(Math.random() * 6) + 1;
    const dadoJugador2 = Math.floor(Math.random() * 6) + 1;

    //Actualizar el contenido de los dados en el HTML
    document.getElementById('jugador1-dado').src = `imagenes/dado${dadoJugador1}.png`;
    document.getElementById('jugador2-dado').src = `imagenes/dado${dadoJugador2}.png`;

    //Determinar el ganador
    let resultado;
    //Se utiliza el método if para comparar los resultados y seleccionar al ganador
    if (dadoJugador1 > dadoJugador2) {
        resultado = "¡Jugador 1 gana!";
    } else if (dadoJugador1 < dadoJugador2) {
        resultado = "¡Jugador 2 gana!";
    } else {
        resultado = "¡Empate!";
    }

    //A continuación se muestra el resultado en el HTML
    document.getElementById('resultado').textContent = resultado;
    //Se oculta el botón Lanzar Dados
    document.getElementById('lanzar-btn').style.display = 'none';
    //Se muestra el botón Reiniciar Juego
    document.getElementById('reiniciar-btn').style.display = 'inline-block';
}

//Función para reiniciar el juego
function reiniciarJuego() {
    //Recargar la página para reiniciar el juego
    location.reload();
}
