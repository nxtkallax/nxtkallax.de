function displayRandomText() {
    const randomIndex = Math.floor(Math.random() * texts.length);
    const selectedText = texts[randomIndex];

    document.getElementById('title').innerText = selectedText.title;
    const paragraphsContainer = document.getElementById('paragraphs');
    paragraphsContainer.innerHTML = '';2
    selectedText.paragraphs.forEach(paragraph => {
        const p = document.createElement('p');
        p.innerText = paragraph;
        paragraphsContainer.appendChild(p);
    });
}

window.onload = displayRandomText;