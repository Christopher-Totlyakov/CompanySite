document.addEventListener("DOMContentLoaded", () => {
    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;
        }).then(() => {
            initMenu();
        });

        // CVG не се зареждат правилно при заявката
    // fetch("/_includes/footer.html")
    //     .then(response => response.text())
    //     .then(data => {
    //         document.getElementById("footer").innerHTML = data;
    //     });

    
});
function loadPage(page) {
fetch(page)
.then(response => response.text())
.then(data => {
    document.getElementById("main-content").innerHTML = data;
})
.catch(error => console.error("Error loading page:", error));
}