var bilder = [
    "/dreck/bilder/kippenfisch.jpg",
    "/dreck/bilder/bocchi.jpg",
    "/dreck/bilder/chiyo.jpg",
    "/dreck/bilder/fish.jpg",
    "/dreck/bilder/hot.jpg",
    "/dreck/bilder/logo.png",
    "/dreck/bilder/meme.jpg",
    "/dreck/bilder/osaker.jpg",
    "/dreck/bilder/reimu.jpg",
    "/dreck/bilder/toshinokyouko.png",
];
var zufallsIndex = Math.floor(Math.random() * bilder.length);
document.getElementById("randomImage").src = bilder[zufallsIndex];
function playSound() {
    var image = document.getElementById("randomImage");
    var currentSrc = image.src;
    if (currentSrc.includes("toshinokyouko.png")) {
        var audio = document.getElementById("toshinokyouko");
        audio.play();
    } else {
        var audio = document.getElementById("yeehaw");
        audio.play();
    }
}