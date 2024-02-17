
const mainPage = document.getElementById('scrollable');
        let isTop = true;

mainPage.addEventListener('wheel', (event) => {
    const direction = event.deltaY > 0 ? 1 : -1;

    // Verifica se la pagina è in cima e si sta scorrendo verso l'alto
    if (isTop && direction === -1) {
        event.preventDefault(); // Blocca lo scroll verso l'alto
        return;
    }

    // Calcola la nuova posizione
    const newPosition = mainPage.scrollTop + direction * 50; // Regola il valore a tuo piacimento

    // Imposta la nuova posizione
    mainPage.scrollTop = newPosition;

    // Aggiorna il flag isTop in base alla posizione
    isTop = newPosition <= 0;
});