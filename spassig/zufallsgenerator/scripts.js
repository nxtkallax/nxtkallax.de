function zufallsAktion() {
    // Definiere die Prozentwahrscheinlichkeit (z.B. 30%)
    var wahrscheinlichkeit = 10;

    // Generiere eine Zufallszahl zwischen 1 und 100
    var zufallszahl = Math.floor(Math.random() * 100) + 1;

    // Überprüfe, ob die Zufallszahl kleiner oder gleich der Prozentwahrscheinlichkeit ist
    if (zufallszahl <= wahrscheinlichkeit) {
        window.location.href = 'https://www.youtube.com/watch?v=vES5N7ouo8A';

    } else {
        window.location.href = 'https://www.youtube.com/watch?v=9bZkp7q19f0';
        // Führe hier eine alternative Aktion aus, wenn die Bedingung nicht erfüllt ist
    }
}                             
    
