document.addEventListener("DOMContentLoaded", () => {
    fetch("/_includes/header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;
        }).then(() => {
            initMenu();
        });

    fetch("/_includes/footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        });

    
});
function loadPage(page) {
fetch(page)
.then(response => response.text())
.then(data => {
    document.getElementById("main-content").innerHTML = data;
})
.catch(error => console.error("Error loading page:", error));
}