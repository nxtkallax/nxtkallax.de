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
            function zufallsAktion(min = 1, max = 5) {
                var zufallszahl = Math.floor(Math.random() * (max - min + 1)) + min;
                if (zufallszahl === 1) {
                    window.location.href = 'https://www.youtube.com/watch?v=vES5N7ouo8A';
                } else if (zufallszahl === 2) {
                    window.location.href = 'https://www.youtube.com/watch?v=9bZkp7q19f0';
                } else if (zufallszahl === 3) {
                    window.location.href = 'https://www.youtube.com/watch?v=gT2wY0DjYGo';
                } else if (zufallszahl === 4) {
                    window.location.href = 'https://www.youtube.com/watch?v=cbB3iGRHtqA';
                } else if (zufallszahl === 5) {
                    window.location.href = 'https://www.youtube.com/watch?v=1o69aqubNcMo';
                } else {
                    console.log("na hömma, was hast du jetzt wieder angestellt?");
                }
                console.log("ole ole ole ole");
            }  
            document.getElementById('Chicken Sakurako').addEventListener('click', ChickenSakurako);