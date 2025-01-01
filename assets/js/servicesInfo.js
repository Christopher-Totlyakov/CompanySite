function servicesInfo(button) {
    const popup = document.getElementById('popup');
    const popupText = document.getElementById('popup-text');
    const closeBtn = document.getElementById('close-btn');

    const info = button.getAttribute('data-info');
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