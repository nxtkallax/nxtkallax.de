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
            function zufallsAktion(min = 1, max = 12) {
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
                } else if (zufallszahl === 6) {
                    window.location.href = 'https://www.youtube.com/watch?v=9B3zUiG0qEo';
                } else if (zufallszahl === 7) {
                    window.location.href = 'https://www.youtube.com/watch?v=iuJDhFRDx9M ';
                } else if (zufallszahl === 8) {
                    window.location.href = 'https://www.youtube.com/watch?v=k85mRPqvMbE';
                } else if (zufallszahl === 9) {
                    window.location.href = 'https://www.youtube.com/watch?v=NfuiB52K7X8';
                } else if (zufallszahl === 10) {
                    window.location.href = 'https://www.youtube.com/watch?v=rzXWaP7Qf4U';
                } else if (zufallszahl === 11) {
                    window.location.href = 'https://www.youtube.com/watch?v=STzK1XrpoBs';
                } else if (zufallszahl === 12) {
                    window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
                } else {
                    console.log("na hömma, was hast du jetzt wieder angestellt?");
                }
                console.log("ole ole ole ole");
            }  
            document.getElementById('Chicken Sakurako').addEventListener('click', ChickenSakurako);