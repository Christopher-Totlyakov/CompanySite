function servicesInfo(button) {
    const popup = document.getElementById('popup');
    const popupTitle = document.getElementById('popup-title');
    const popupText = document.getElementById('popup-text');
    const closeBtn = document.getElementById('close-btn');

    const title = button.getAttribute('data-title');
    const info = button.getAttribute('data-info');

    popupTitle.textContent = title; 
    popupText.textContent = info; 
    popup.style.display = 'flex'; 

    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.style.display = 'none';
        }
    });
}