let firstClick = true;
            function ChickenSakurako() {
                var video = document.getElementById('Chicken Sakurako');
                if (firstClick) {
                    video.muted = !video.muted;
                    video.currentTime = 0;
                    video.play();
                    firstClick = false;
                    video.style.cursor = 'default';
                } else {
                    zufallsAktion(); 
                }
            }
            function zufallsAktion() {
                var zufallszahl = Math.floor(Math.random() * 100) + 1;
                if (zufallszahl <= 33) {
                    window.location.href = 'https://www.youtube.com/watch?v=vES5N7ouo8A';
                } else if (zufallszahl >= 66) {
                    window.location.href = 'https://www.youtube.com/watch?v=9bZkp7q19f0';
                } else {
                    window.location.href = 'https://www.youtube.com/watch?v=gT2wY0DjYGo'
                }
            }   
            document.getElementById('Chicken Sakurako').addEventListener('click', ChickenSakurako);